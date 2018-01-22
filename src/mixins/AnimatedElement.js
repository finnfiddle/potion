import PropTypes from 'prop-types';
import itsSet from 'its-set';
import { interpolate } from 'd3-interpolate';
import * as ease from 'd3-ease';
import deepEqual from 'deep-equal';
import 'd3-transition';
import uniq from 'array-uniq';

import SelectSelf from './SelectSelf';
import { isFunction, pick, omit } from '../helpers';

const EASE_TYPES = Object.keys(ease);
const PRIVATE_PROP_NAMES = [
  'enterDatum',
  'exitDatum',
  'enterDuration',
  'updateDuration',
  'exitDuration',
  'enterEase',
  'updateEase',
  'exitEase',
  'propsToCheckForChanges',
  'datum',
  'index',
  'style',
  '_key',
  'data',
  'nodes',
  'links',
  'datumPropsToTween',
  'datumAccessor',
];
const DONT_GET_DATUM = false;

export default class AnimatedElement extends SelectSelf {

  constructor(props) {
    super(props);
    this.displayName = 'AnimatedElement';
    this.attrNames = this.getAttrNames();
    this.derivedAttrNames = this.getDerivedAttrNames();
    this.derivedAttrDefaults = this.getDerivedAttrDefaults();
    this.derivedAttrInputNames = this.getDerivedAttrInputNames();
    this.privatePropNames = this.getPrivatePropNames().concat(PRIVATE_PROP_NAMES);
    this.allAttrInputNames = this.attrNames.concat(
      Object.keys(this.derivedAttrInputNames).reduce((acc, key) =>
        acc.concat(this.derivedAttrInputNames[key])
      , [])
    );
    this.allDerivedAttrInputNames = uniq(
      Object.keys(this.derivedAttrInputNames)
        .reduce((acc, key) =>
          acc.concat(this.derivedAttrInputNames[key])
        , [])
    );
    this.propsToCheckForChanges = ['datum'].concat(this.props.propsToCheckForChanges);
    this.attrs = this.getAttrs(this.props);
    this.state = this.getState();
  }

  componentWillAppearOrEnter(callback) {
    const { enterDuration, enterDatum, enterEase } = this.props;

    let resolvedEnterDatum = this.getDatum(this.props);
    const enterDatumIsSet = itsSet(enterDatum);
    if (enterDatumIsSet) {
      resolvedEnterDatum = isFunction(enterDatum) ? enterDatum(this.props) : enterDatum;
    }

    const calculatedEnterDatum = this.assignAbsolutePropsToDatum(
      resolvedEnterDatum,
      this.props,
      !enterDatumIsSet
    );
    const currentDatum = this.assignAbsolutePropsToDatum(this.getDatum(this.props), this.props);

    const derivedAttrs = this.getDerivedAttrs(this.props, currentDatum);
    const nextCombinedAttrs = Object.assign({}, this.attrs, derivedAttrs);
    const nextState = this.getState(this.props, nextCombinedAttrs);

    if (!enterDuration) {
      this.currentDatum = currentDatum;
      this.setState(nextState, callback);
      return;
    }

    const enterAttrs = this.getAttrsFromDatum(calculatedEnterDatum, DONT_GET_DATUM);
    const enterStyle = this.getStyleFromDatum(calculatedEnterDatum);

    this.selection = this.selectSelf();

    this.applyAttrsToSelection(enterAttrs, this.selection);
    this.applyStyleToSelection(enterStyle, this.selection);
    this.applyDerivedAttrsToSelection(
      this.props,
      calculatedEnterDatum,
      this.selection,
      DONT_GET_DATUM
    );

    const transition = this.selection
      .transition()
      .duration(enterDuration)
      .ease(ease[enterEase]);

    this.tweenDerivedAttrs(
      calculatedEnterDatum,
      currentDatum,
      this.props,
      transition,
      DONT_GET_DATUM
    );
    this.applyAttrsToSelection(this.attrs, transition);
    this.applyStyleToSelection(this.getStyle(this.props), transition);

    this.currentDatum = currentDatum;

    transition.on('interrupt', callback);
    transition.on('end', () => {
      this.setState(nextState, callback);
    });
  }

  componentWillAppear(callback) {
    this.componentWillAppearOrEnter(callback);
  }

  componentWillEnter(callback) {
    this.componentWillAppearOrEnter(callback);
  }

  componentWillReceiveProps(nextProps) {
    const { updateDuration, updateEase } = nextProps;

    const nextAttrs = this.getAttrs(nextProps);
    const nextDatum = this.assignAbsolutePropsToDatum(this.getDatum(nextProps), nextProps);
    const nextDerivedAttrs = this.getDerivedAttrs(nextProps, nextDatum);
    const nextCombinedAttrs = Object.assign({}, nextAttrs, nextDerivedAttrs);
    const nextState = this.getState(nextProps, nextCombinedAttrs);

    if (
      itsSet(nextDatum) &&
      itsSet(this.currentDatum) &&
      !deepEqual(pick(this.currentDatum, Object.keys(nextDatum)), nextDatum)
    ) {
      if (!updateDuration) {
        this.setState(nextState);
      }
      else {
        const nextStyle = this.getStyle(nextProps);

        this.selection = this.selectSelf();

        const transition = this.selection
          .transition()
          .duration(updateDuration)
          .ease(ease[updateEase]);

        this.applyAttrsToSelection(nextAttrs, transition);
        this.applyStyleToSelection(nextStyle, transition);
        this.tweenDerivedAttrs(
          this.currentDatum,
          nextDatum,
          nextProps,
          transition,
          DONT_GET_DATUM
        );

        transition.on('end', () => {
          this.setState(nextState);
        });
      }
    }
    else if (
      itsSet(this.currentAttrs) &&
      itsSet(nextCombinedAttrs) &&
      !deepEqual(this.currentAttrs, nextCombinedAttrs)
    ) {
      this.updateFromNonDatumChange(nextProps);
      this.currentAttrs = nextCombinedAttrs;
      this.setState(nextState);
    }
    else {
      this.setState(nextState);
    }

    this.currentAttrs = nextCombinedAttrs;
    this.currentDatum = nextDatum;
  }

  componentWillLeave(callback) {
    const { exitDatum, exitDuration, exitEase, datum } = this.props;

    if (!exitDuration) callback();

    let resolvedExitDatum = datum;
    if (itsSet(exitDatum)) {
      resolvedExitDatum = isFunction(exitDatum) ? exitDatum(this.props) : exitDatum;
    }

    const computedExitDatum = this.assignAbsolutePropsToDatum(
      resolvedExitDatum,
      this.props,
      DONT_GET_DATUM
    );
    const exitAttrs = this.getAttrsFromDatum(computedExitDatum);
    const exitStyle = this.getStyleFromDatum(computedExitDatum);

    const transition = this.selection
      .transition()
      .duration(exitDuration)
      .ease(ease[exitEase]);

    this.applyAttrsToSelection(exitAttrs, transition);
    this.applyStyleToSelection(exitStyle, transition);
    this.tweenDerivedAttrs(
      this.currentDatum,
      computedExitDatum,
      this.props,
      transition,
      DONT_GET_DATUM
    );

    this.leaveTimeout = setTimeout(callback, exitDuration);
    this.leaveCallback = callback;
  }

  componentWillUnmount() {
    if (itsSet(this.selection)) this.selection.interrupt();
    clearTimeout(this.leaveTimeout);
  }

  updateFromNonDatumChange(nextProps) {
    const nextAttrs = this.getAttrs(nextProps);
    const nextStyle = this.getStyle(nextProps);
    this.selection = this.selectSelf();

    this.applyAttrsToSelection(
      nextAttrs,
      this.selection,
    );
    this.applyStyleToSelection(
      nextStyle,
      this.selection,
    );
    this.applyDerivedAttrs(
      this.assignAbsolutePropsToDatum(this.getDatum(nextProps), nextProps),
      nextProps,
      this.selection,
    );
  }

  getState(props, attrs) {
    return omit(
      Object.assign({}, (props || this.props), (attrs || this.attrs)),
      this.privatePropNames
    );
  }

  getAttrNames() {
    return [];
  }

  getPrivatePropNames() {
    return [];
  }

  getDerivedAttrNames() {
    return [];
  }

  getDerivedAttrDefaults() {
    return {};
  }

  getDerivedAttrInputNames() {
    return [];
  }

  getDerivedAttrSelectors() {
    return {};
  }

  getDatum(props) {
    return props.datumAccessor(props);
  }

  assignAbsolutePropsToDatum(datum, props, shouldGetDatum = true) {
    const startingAcc = shouldGetDatum ?
      Object.assign({}, this.getDatum(Object.assign({}, props, { datum }))) :
      datum;
    return this.allAttrInputNames
      .filter(name => !isFunction(props[name]))
      .reduce(
        (acc, name) => Object.assign({}, acc, { [name]: props[name] }),
        startingAcc
      );
  }

  applyAttrsToSelection(attrs, selection) {
    if (!itsSet(attrs)) return;
    // TODO: check if we need to concat here
    this.attrNames.concat(this.derivedAttrNames)
      .forEach(name => {
        if (itsSet(attrs[name])) {
          selection.attr(name, attrs[name]);
        }
      });
  }

  applyStyleToSelection(style, selection) {
    if (!itsSet(style)) return;
    Object.keys(style)
      .forEach(name => {
        selection.attr(name, style[name]);
      });
  }

  getAttrsFromDatum(datum, shouldGetDatum = true) {
    return this.getAttrs(Object.assign({}, this.props, { datum }), undefined, shouldGetDatum);
  }

  getStyleFromDatum(datum) {
    return this.getStyle(Object.assign({}, this.props, { datum }));
  }

  getAttrs(props, attrNames, shouldGetDatum = true) {
    return (attrNames || this.attrNames)
      .filter(key => itsSet(props[key]))
      .reduce((acc, key) => {
        const datum = shouldGetDatum ? this.getDatum(props) : props.datum;
        const propsWithResolvedDatum = Object.assign({}, props, { datum });
        let prop = propsWithResolvedDatum[key];
        if (!itsSet(prop)) return acc;
        if (isFunction(prop) && itsSet(datum)) {
          prop = prop(propsWithResolvedDatum);
        }
        return Object.assign({}, this.attrDefaults, acc, { [key]: prop });
      }, {});
  }

  getStyle(props) {
    const { style } = props;
    if (isFunction(style)) return style(props);
    return style || {};
  }

  applyDerivedAttrsToSelection(props, datum, selection, shouldGetDatum) {
    this.derivedAttrNames.forEach(key => {
      this.applyAttrsToSelection({
        [key]: this.getDerivationMethod(key, props, shouldGetDatum)(datum),
      }, selection);
    });
  }

  getDerivedAttrs(props, datum, shouldGetDatum) {
    return this.derivedAttrNames.reduce((acc, key) =>
      Object.assign({}, acc, {
        [key]: this.getDerivationMethod(key, props, shouldGetDatum)(datum),
      })
    , {});
  }

  applyDerivedAttrs(toDatum, props, selection, shouldGetDatum) {
    this.derivedAttrNames
      .forEach(key => {
        selection.attr(key, this.getDerivationMethod(key, props, shouldGetDatum)(toDatum));
      });
  }

  tweenDerivedAttrs(fromDatum, toDatum, props, transition, shouldGetDatum) {
    this.derivedAttrNames
      .forEach(key => {
        this.attrTween(
          key,
          fromDatum,
          toDatum,
          transition,
          this.getDerivationMethod(key, props, shouldGetDatum)
        );
      });
  }

  attrTween(attrName, fromDatum, toDatum, transition, derivationMethod) {
    const { datumPropsToTween } = this.props;
    const keysToInterpolate = Object.keys(
      datumPropsToTween.length ? pick(toDatum, datumPropsToTween) : toDatum
    );

    const interpolater = keysToInterpolate.reduce((acc, key) =>
      Object.assign({}, acc, {
        [key]: interpolate(itsSet(fromDatum[key]) ? fromDatum[key] : toDatum[key], toDatum[key]),
      })
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
  }

}

AnimatedElement.propTypes = {
  datum: PropTypes.object,
  datumAccessor: PropTypes.oneOfType([
    PropTypes.func,
  ]),
  enterDatum: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]),
  exitDatum: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]),
  enterEase: PropTypes.oneOf(EASE_TYPES),
  updateEase: PropTypes.oneOf(EASE_TYPES),
  exitEase: PropTypes.oneOf(EASE_TYPES),
  enterDuration: PropTypes.number,
  updateDuration: PropTypes.number,
  exitDuration: PropTypes.number,
  propsToCheckForChanges: PropTypes.arrayOf(PropTypes.string),
  datumPropsToTween: PropTypes.arrayOf(PropTypes.string),
};

AnimatedElement.defaultProps = {
  datumAccessor: ({ datum }) => datum,
  enterEase: 'easeLinear',
  updateEase: 'easeLinear',
  exitEase: 'easeLinear',
  enterDuration: 0,
  updateDuration: 0,
  exitDuration: 0,
  propsToCheckForChanges: [],
  datumPropsToTween: [],
};
