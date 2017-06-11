import React, { PropTypes } from 'react';
import stamp from 'react-stamp';
import itsSet from 'its-set';
import isFunction from 'lodash.isfunction';
import pick from 'lodash.pick';
import omit from 'lodash.omit';
import uniq from 'lodash.uniq';
import { interpolate } from 'd3-interpolate';
import * as ease from 'd3-ease';
import deepEqual from 'deep-equal';
import 'd3-transition';

import SelectSelfMixin from './mixins/SelectSelfMixin';

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
];

export default stamp(React).compose(SelectSelfMixin, {

  displayName: 'AnimatedElement',

  propTypes: {
    datum: PropTypes.oneOfType([
      PropTypes.object,
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
  },

  defaultProps: {
    enterDatum: ({ datum }) => datum,
    exitDatum: ({ datum }) => datum,
    enterEase: 'easeLinear',
    updateEase: 'easeLinear',
    exitEase: 'easeLinear',
    enterDuration: 0,
    updateDuration: 0,
    exitDuration: 0,
    propsToCheckForChanges: [],
    datumPropsToTween: [],
  },

  init() {
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
  },

  componentWillAppearOrEnter(callback) {
    const { enterDuration, enterDatum, enterEase } = this.props;
    const calculatedEnterDatum = this.assignAbsolutePropsToDatum(
      enterDatum(this.props),
      this.props
    );

    const enterAttrs = this.getAttrsFromDatum(calculatedEnterDatum);
    const enterStyle = this.getStyleFromDatum(calculatedEnterDatum);

    this.selection = this.selectSelf();

    this.applyAttrsToSelection(enterAttrs, this.selection);
    this.applyStyleToSelection(enterStyle, this.selection);
    this.applyDerivedAttrsToSelection(this.props, calculatedEnterDatum, this.selection);

    const transition = this.selection
      .transition()
      .duration(enterDuration)
      .ease(ease[enterEase]);

    this.tweenDerivedAttrs(
      calculatedEnterDatum,
      this.assignAbsolutePropsToDatum(this.getDatum(this.props), this.props),
      this.props,
      transition
    );
    this.applyAttrsToSelection(this.attrs, transition);
    this.applyStyleToSelection(this.getStyle(this.props), transition);

    this.currentDatum = calculatedEnterDatum;

    transition.on('interrupt', callback);
    transition.on('end', () => {
      this.setState(this.getState(), callback);
    });
  },

  componentWillAppear(callback) {
    this.componentWillAppearOrEnter(callback);
  },

  componentWillEnter(callback) {
    this.componentWillAppearOrEnter(callback);
  },

  componentWillReceiveProps(nextProps) {
    const { updateDuration, updateEase } = nextProps;

    const nextAttrs = this.getAttrs(nextProps);
    const nextDatum = this.getDatum(nextProps);
    const nextDerivedAttrs = this.getDerivedAttrs(nextProps, nextDatum);
    const nextCombinedAttrs = Object.assign({}, nextAttrs, nextDerivedAttrs);
    // TODO: this below is probably not a very good idea (slow) but I cant see any other way...
    if (
      itsSet(this.currentDatum) &&
      itsSet(nextDatum) &&
      deepEqual(this.currentDatum, nextDatum)
    ) {
      if (!deepEqual(this.currentAttrs, nextCombinedAttrs)) {
        this.updateFromNonDatumChange(nextProps);
        this.currentAttrs = nextCombinedAttrs;
      }
      return;
    }

    const nextStyle = this.getStyle(nextProps);

    this.selection = this.selectSelf();

    const transition = this.selection
      .transition()
      .duration(updateDuration)
      .ease(ease[updateEase]);

    this.applyAttrsToSelection(nextAttrs, transition);
    this.applyStyleToSelection(nextStyle, transition);
    this.tweenDerivedAttrs(
      this.assignAbsolutePropsToDatum(this.currentDatum, this.props),
      this.assignAbsolutePropsToDatum(nextDatum, nextProps),
      nextProps,
      transition
    );

    this.currentAttrs = nextCombinedAttrs;
    this.currentDatum = nextDatum;

    transition.on('end', () => {
      this.setState(this.getState(nextProps, nextAttrs));
    });
  },

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
  },

  componentWillLeave(callback) {
    const { exitDatum, exitDuration, exitEase } = this.props;

    if (exitDuration <= 0) callback();

    const computedExitDatum = this.assignAbsolutePropsToDatum(exitDatum(this.props), this.props);
    const exitAttrs = this.getAttrsFromDatum(computedExitDatum);
    const exitStyle = this.getStyleFromDatum(computedExitDatum);

    const transition = this.selection
      .transition()
      .duration(exitDuration)
      .ease(ease[exitEase]);

    this.applyAttrsToSelection(exitAttrs, transition);
    this.applyStyleToSelection(exitStyle, transition);
    this.tweenDerivedAttrs(
      this.assignAbsolutePropsToDatum(this.getDatum(this.props), this.props),
      computedExitDatum,
      this.props,
      transition
    );

    this.leaveTimeout = setTimeout(callback, exitDuration);
    this.leaveCallback = callback;
  },

  componentWillUnmount() {
    this.selection.interrupt();
    clearTimeout(this.leaveTimeout);
  },

  getState(props, attrs) {
    return omit(
      Object.assign({}, (props || this.props), (attrs || this.attrs)),
      this.privatePropNames
    );
  },

  getAttrNames() {
    return [];
  },

  getPrivatePropNames() {
    return [];
  },

  getDerivedAttrNames() {
    return [];
  },

  getDerivedAttrDefaults() {
    return {};
  },

  getDerivedAttrInputNames() {
    return [];
  },

  getDerivedAttrSelectors() {
    return {};
  },

  getDatum(props) {
    const { datum } = props;
    return isFunction(datum) ? datum(props) : datum;
  },

  assignAbsolutePropsToDatum(datum, props) {
    return this.allAttrInputNames
      .filter(name => !isFunction(props[name]))
      .reduce(
        (acc, name) => Object.assign({}, acc, { [name]: props[name] }),
        Object.assign({}, this.getDatum(Object.assign({}, props, { datum })))
      );
  },

  applyAttrsToSelection(attrs, selection) {
    if (!itsSet(attrs)) return;
    // TODO: check if we need to concat here
    this.attrNames.concat(this.derivedAttrNames)
      .forEach(name => {
        if (itsSet(attrs[name])) {
          selection.attr(name, attrs[name]);
        }
      });
  },

  applyStyleToSelection(style, selection) {
    if (!itsSet(style)) return;
    Object.keys(style)
      .forEach(name => {
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
    return (attrNames || this.attrNames)
      .filter(key => itsSet(props[key]))
      .reduce((acc, key) => {
        const datum = this.getDatum(props);
        const propsWithResolvedDatum = Object.assign({}, props, { datum });
        let prop = propsWithResolvedDatum[key];
        if (!itsSet(prop)) return acc;
        if (isFunction(prop) && itsSet(datum)) {
          prop = prop(propsWithResolvedDatum);
        }
        return Object.assign({}, this.attrDefaults, acc, { [key]: prop });
      }, {});
  },

  getStyle(props) {
    const { style } = props;
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

  getDerivedAttrs(props, datum) {
    return this.derivedAttrNames.reduce((acc, key) =>
      Object.assign({}, acc, {
        [key]: this.getDerivationMethod(key, props)(datum),
      })
    , {});
  },

  applyDerivedAttrs(toDatum, props, selection) {
    this.derivedAttrNames
      .forEach(key => {
        selection.attr(key, this.getDerivationMethod(key, props)(toDatum));
      });
  },

  tweenDerivedAttrs(fromDatum, toDatum, props, transition) {
    this.derivedAttrNames
      .forEach(key => {
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
    const { datumPropsToTween } = this.props;
    const keysToInterpolate = Object.keys(
      datumPropsToTween.length ? pick(toDatum, datumPropsToTween) : toDatum
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

});
