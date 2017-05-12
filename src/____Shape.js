import React, { PropTypes } from 'react';
import stamp from 'react-stamp';
import itsSet from 'its-set';
import isFunction from 'lodash/isFunction';
import { attrTween } from 'd3-transition';
import { interpolate } from 'd3-interpolate';

import SelectSelfMixin from './mixins/SelectSelfMixin';

export default stamp(React).compose(SelectSelfMixin, {

  displayName: 'AnimatedElement',

  state: {
    didEnter: false,
  },

  init() {
    this.attrNames = this.getAttrNames();
    this.derivedAttrNames = this.getDerivedAttrNames();
    this.derivedAttrInputNames = this.getDerivedAttrInputNames();
    this.attrs = this.getAttrs(this.props);
    // this.transitions = {};
    // this.receiveFirstProps = false;
  },

  componentWillAppearOrEnter(callback) {
    const { _key, enterDuration, datum, data, index, enterDatum } = this.props;
    const calculatedEnterDatum = enterDatum(this.props);
    const enterAttrs = this.getAttrsFromDatum(calculatedEnterDatum);
    const enterStyle = this.getStyleFromDatum(calculatedEnterDatum);

    this.selection = this.selectSelf();

    this.applyAttrsToSelection(enterAttrs, this.selection);
    this.applyStyleToSelection(enterStyle, this.selection);
    this.applyDerivedAttrsToSelection(this.props, calculatedEnterDatum, this.selection);

    const transitionName = `${_key}_enter`;
    const transition = this.selection
      .transition(transitionName)
      .duration(enterDuration);

    // this.registerTransition(
    //   transitionName,
    //   callback,
    //   transition,
    //   calculatedEnterDatum,
    //   datum,
    //   enterDuration
    // );

    this.tweenDerivedAttrs(calculatedEnterDatum, datum, this.props, transition);
    this.applyAttrsToSelection(this.attrs, transition);
    this.applyStyleToSelection(this.getStyle(this.props), transition);

    transition.on('end', () => {
      this.setState(Object.assign({}, this.attrs, { didEnter: true }), callback);
    });
  },

  // registerTransition(
  //   transitionName,
  //   callback = () => {},
  //   transition,
  //   fromDatum,
  //   toDatum,
  //   duration
  // ) {
  //   this.transitions[transitionName] = {
  //     transitionName,
  //     callback,
  //     transition,
  //     fromDatum,
  //     toDatum,
  //     duration,
  //     start: new Date(),
  //   };
  //   setTimeout(() => {
  //     this.removeTransition(transitionName);
  //   }, duration);
  // },

  // cancelTransition(transitionName) {
  //   const transition = this.transitions[transitionName];
  //   if (!itsSet(transition)) return;
  //   // this.selection.interrupt(transitionName);
  //   const now = new Date();
  //   const start = transition.start.getTime();
  //   const percentageComplete = (now.getTime() - start) / transition.duration;
  //   console.log(percentageComplete);
  //   // transition.callback
  //   // transition.
  //   // transition.fromDatum
  //   // transition.toDatum
  // },

  // removeTransition(transitionName) {
  //   delete this.transitions[transitionName];
  // },

  componentWillAppear(callback) {
    this.componentWillAppearOrEnter(callback);
  },

  componentWillEnter(callback) {
    this.componentWillAppearOrEnter(callback);
  },

  componentWillReceiveProps(nextProps, nextState) {
    // if (!this.receiveFirstProps) return;
    // this.receiveFirstProps = true;
    const { _key, updateDuration } = nextProps;
    // if (itsSet(this.transitions[`${_key}_enter`])) return;
    const nextAttrs = this.getAttrs(nextProps);
    const nextStyle = this.getStyle(nextProps);

    this.selection = this.selectSelf();

    const transition = this.selection
      .transition(`${_key}_update`)
      .duration(updateDuration);

    this.applyAttrsToSelection(nextAttrs, transition);
    this.applyStyleToSelection(nextStyle, transition);

    if (this.state.didEnter) {
      this.tweenDerivedAttrs(this.props.datum, nextProps.datum, nextProps, transition);
    }
    else {
      // TODO: only set state for derived attrs
    }

    transition.on('end', () => {
      this.setState(nextAttrs);
    });
  },

  componentWillLeave(callback) {
    const { exitDatum, exitDuration, _key, datum, index, data } = this.props;
    // this.cancelTransition(`${_key}_enter`);
    // this.cancelTransition(`${_key}_update`);
    const computedExitDatum = exitDatum(this.props);
    const exitAttrs = this.getAttrsFromDatum(computedExitDatum);
    const exitStyle = this.getStyleFromDatum(computedExitDatum);

    const transition = this.selectSelf()
      .transition(`${_key}_exit`)
      .duration(exitDuration);

    this.applyAttrsToSelection(exitAttrs, transition);
    this.applyStyleToSelection(exitStyle, transition);
    this.tweenDerivedAttrs(this.props.datum, computedExitDatum, this.props, transition);

    transition.on('end', callback);
  },

  componentWillUnmount() {
    const { _key } = this.props;
    // Object.keys(this.transitions).forEach(this.cancelTransition.bind(this));
  },

  getAttrNames() {
    return [];
  },

  getDerivedAttrNames() {
    return [];
  },

  getDerivedAttrInputNames() {
    return [];
  },

  applyAttrsToSelection(attrs, selection) {
    if (!itsSet(attrs)) return;
    this.attrNames.concat(this.derivedAttrNames).forEach(name => {
      itsSet(attrs[name]) && selection.attr(name, attrs[name]);
    });
  },

  applyStyleToSelection(style, selection) {
    if (!itsSet(style)) return;
    Object.keys(style).forEach(name => {
      selection.attr(name, style[name]);
    });
  },

  getAttrsFromDatum(datum) {
    return this.getAttrs(Object.assign({}, this.props, { datum }));
  },

  getStyleFromDatum(datum) {
    return this.getStyle(Object.assign({}, this.props, { datum }));
  },

  getAttrs(props, attrNames) {
    const { datum, data, index } = props;

    return (attrNames || this.attrNames).reduce((acc, key) => {
      let prop = props[key];
      if (!itsSet(prop)) return acc;
      if (isFunction(prop)) prop = prop(props);
      return Object.assign({}, acc, { [key]: prop });
    }, {});
  },

  getStyle(props) {
    const { style, datum, data, index } = props;
    if (isFunction(style)) return style(props);
    return style;
  },

  applyDerivedAttrsToSelection(props, datum, selection) {
    this.derivedAttrNames.forEach(key => {
      this.applyAttrsToSelection({
        [key]: this.getDerivationMethod(key, props)(datum),
      }, selection);
    });
  },

  tweenDerivedAttrs(fromDatum, toDatum, props, transition) {
    this.derivedAttrNames.forEach(key => {
      this.attrTween(
        key,
        fromDatum,
        toDatum,
        transition,
        this.getDerivationMethod(key, props)
      );
    });
  },

  attrTween(attrName, fromDatum, toDatum, transition, derivationMethod) {
    const derivedAttrInputNames = this.derivedAttrInputNames[attrName];

    const keysToInterpolate = Object.keys(toDatum).filter(key =>
      derivedAttrInputNames.includes(key)
    );

    const interpolater = keysToInterpolate.reduce((acc, key) =>
      Object.assign({}, acc, { [key]: interpolate(fromDatum[key], toDatum[key]) })
    , {});

    transition.attrTween(attrName, () =>
      t => {
        const midDatum = {};
        keysToInterpolate.forEach(key => {
          midDatum[key] = interpolater[key](t);
        });
        return derivationMethod(midDatum);
      }
    );
  },

  getDerivedAttrs(props) {
    return this.derivedAttrNames.reduce((acc, key) => {
      return Object.assign({}, acc, { [key]: this.getDerivedAttr(key) });
    }, {});
  },

});
