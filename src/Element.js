import { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import ReactFauxDOM from 'react-faux-dom';
import { select } from 'd3-selection';
import 'd3-transition';
import itsSet from 'its-set';
import isEqual from 'deep-equal';
import { interpolate } from 'd3-interpolate';

import { bindMouseEvents, diff, isFunction, pick } from './util';

const BEFORE_ENTER = 'BEFORE_ENTER';
const ENTER = 'ENTER';
const UPDATE = 'UPDATE';
const EXIT = 'EXIT';
const TICK = 16;

export default class Element extends Component {

  static displayName = 'Element';

  static propTypes = {
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    enterDuration: PropTypes.number,
    updateDuration: PropTypes.number,
    exitDuration: PropTypes.number,
  }

  static defaultProps = {
    enterEase: 'easeLinear',
    updateEase: 'easeLinear',
    exitEase: 'easeLinear',
    enterDuration: 0,
    updateDuration: 0,
    exitDuration: 0,
    datumPropsToTween: [],
  }

  constructor(props) {
    super(props);
    this.state = { el: null };
    this.el = new ReactFauxDOM.Element(props.component);
    this.selection = select(this.el);
    this.attrNames = this.getAttrNames();
    this.derivedAttrNames = this.getDerivedAttrNames();
    this.derivedAttrInputNames = this.getDerivedAttrInputNames();
    this.animationEnd = 0;
    this.currentAttr = {};
    this.currentStyle = {};
  }

  // eslint-disable-next-line react/sort-comp
  componentWillAppear(callback) {
    this.componentWillAppearOrEnter(callback);
  }

  componentWillEnter(callback) {
    this.componentWillAppearOrEnter(callback);
  }

  componentWillAppearOrEnter(callback) {
    this.draw(this.getDrawData(BEFORE_ENTER));
    this.draw({
      ...this.getDrawData(ENTER),
      callback,
    });
  }

  componentWillReceiveProps(nextProps) {
    this.draw(this.getDrawData(UPDATE, nextProps));
  }

  componentWillLeave(callback) {
    this.draw({
      ...this.getDrawData(EXIT),
      callback,
    });
  }

  getAttrNames() {
    return [];
  }

  getDerivedAttrNames() {
    return [];
  }

  getDerivedAttrInputNames() {
    return [];
  }

  getDatum(datum, nextProps) {
    const props = nextProps || this.props;
    const { datumAccessor } = props;
    return datumAccessor ? datumAccessor({ ...props, datum }) : datum;
  }

  getDrawData(stage, nextProps) {
    const props = nextProps || this.props;
    switch (stage) {
      case BEFORE_ENTER: {
        const datum = this.getDatum(
          this.getProp('enterDatum', props) || this.getProp('datum', props)
        );
        const normalizedProps = { ...props, datum };
        return {
          attr: this.getAttr(normalizedProps),
          style: this.getStyle(normalizedProps),
          transition: { duration: 0 },
        };
      }
      case ENTER: {
        const datum = this.getDatum(this.getProp('datum', props));
        const normalizedProps = { ...props, datum };
        return {
          attr: this.getAttr(normalizedProps),
          style: this.getStyle(normalizedProps),
          transition: { duration: props.enterDuration },
          tween: {
            fromDatum: this.getProp('enterDatum', props) || this.getProp('datum', props),
            toDatum: datum,
            props: this.props,
          },
        };
      }
      case UPDATE: {
        const datum = this.getDatum(this.getProp('datum', props));
        let datumHasChanged = false;
        if (nextProps) {
          datumHasChanged = !isEqual(
            datum,
            this.getDatum(this.getProp('datum', nextProps), nextProps)
          );
        }
        const normalizedProps = { ...props, datum };
        let attr = this.getAttr(normalizedProps);
        let style = this.getStyle(normalizedProps);
        if (!datumHasChanged) {
          attr = diff(attr, this.currentAttr);
          style = diff(style, this.currentStyle);
        }
        return {
          attr,
          style,
          transition: { duration: datumHasChanged ? props.updateDuration : 0 },
        };
      }
      case EXIT: {
        const datum = this.getDatum(
          this.getProp('exitDatum', props) || this.getProp('datum', props)
        );
        const normalizedProps = { ...props, datum };
        return {
          attr: this.getAttr(normalizedProps),
          style: this.getStyle(normalizedProps),
          transition: { duration: props.exitDuration },
        };
      }
      // no default
    }
  }

  getProp(key, props) {
    let prop = props[key];
    if (isFunction(prop)) {
      prop = prop(props);
    }
    return prop;
  }

  getAttr(props, whitelist) {
    return (whitelist || this.attrNames)
      .filter(key => itsSet(props[key]))
      .reduce((acc, key) => {
        const prop = this.getProp(key, props);
        return { ...this.attrDefaults, ...acc, [key]: prop };
      }, {});
  }

  getStyle(props) {
    const { style } = props;
    if (isFunction(style)) return style(props);
    return style || {};
  }

  tweenDerivedAttrs({ fromDatum, toDatum, props, selection }) {
    if (!props || !selection) return;
    if (!fromDatum || !toDatum) {
      this.derivedAttrNames
        .forEach(key => {
          selection.attr(key, this.getDerivationMethod(key, props)());
        });
      this.solidify();
      return;
    }
    this.derivedAttrNames
      .forEach(key => {
        this.attrTween({
          attrName: key,
          fromDatum,
          toDatum,
          selection: selection.constructor.name === 'Transition' ?
            selection :
            selection.transition(),
          derivationMethod: this.getDerivationMethod(key, props),
        });
      });
  }

  attrTween({ attrName, fromDatum, toDatum, selection, derivationMethod }) {
    const { datumPropsToTween } = this.props;
    const keysToInterpolate = Object.keys(
      datumPropsToTween.length ? pick(toDatum, datumPropsToTween) : toDatum
    );

    const interpolater = keysToInterpolate.reduce((acc, key) =>
      Object.assign({}, acc, {
        [key]: interpolate(itsSet(fromDatum[key]) ? fromDatum[key] : toDatum[key], toDatum[key]),
      })
    , {});

    selection.attrTween(attrName, () =>
      t => {
        const midDatum = {};
        keysToInterpolate.forEach(key => {
          midDatum[key] = interpolater[key](t);
        });
        return derivationMethod(midDatum);
      }
    );
  }

  evaluateProps(props) {
    return Object.keys(props).reduce((acc, key) => ({
      ...acc,
      [key]: isFunction(props[key]) ? props[key](props) : props[key],
    }), {});
  }

  draw({
    attr = {},
    style = {},
    transition = {},
    tween,
    callback = () => {},
  }) {
    const attrKeys = Object.keys(attr);
    const styleKeys = Object.keys(style);
    if (!attrKeys.length && !styleKeys.length && !this.derivedAttrNames.length) {
      this.solidify();
      callback();
      return;
    }
    const duration = Math.max((transition.duration || 0) - (TICK * 2), 0);
    let selection = this.selection;
    if (duration) {
      selection = selection.transition()
        .duration(duration);
    }
    if (attrKeys.length) {
      attrKeys.forEach(key => {
        selection.attr(key, attr[key]);
      });
    }
    if (styleKeys.length) {
      styleKeys.forEach(key => {
        selection.style(key, style[key]);
      });
    }
    if (tween) {
      this.tweenDerivedAttrs({ ...tween, selection });
    }
    if (duration) {
      this.currentAttr = { ...this.currentAttr, ...attr };
      this.currentStyle = { ...this.currentStyle, ...style };
      this.animate(duration);
    }
    setTimeout(() => {
      this.currentAttr = { ...this.currentAttr, ...attr };
      this.currentStyle = { ...this.currentStyle, ...style };
      this.solidify();
      callback();
    }, duration);
  }

  solidify(callback = () => {}) {
    this.setState({
      el: cloneElement(this.el.toReact(), bindMouseEvents(this.props)),
    }, callback);
  }

  animate(duration) {
    this.animationEnd = Math.max(Date.now() + duration, this.animationEnd) + (TICK * 2);
    if (!this.animation) {
      this.animation = setInterval(() => {
        if (Date.now() < this.animationEnd) {
          this.solidify();
        }
        else {
          this.stopAnimating();
        }
      }, TICK);
    }
  }

  stopAnimating() {
    this.animation = clearInterval(this.animation);
    this.animationEnd = 0;
  }

  isAnimating() {
    return !!this.animation;
  }

}
