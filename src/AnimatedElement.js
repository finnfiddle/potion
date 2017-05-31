import React from 'react';
import stamp from 'react-stamp';
import itsSet from 'its-set';
import isFunction from 'lodash/isFunction';
import uniq from 'lodash/uniq';
import { interpolate } from 'd3-interpolate';
import * as ease from 'd3-ease';
import deepEqual from 'deep-equal';
import 'd3-transition';

import SelectSelfMixin from './mixins/SelectSelfMixin';

export default stamp(React).compose(SelectSelfMixin, {

  displayName: 'AnimatedElement',

  state: {
    didEnter: false,
  },

  defaultProps: {
    datum: {},
    enterDatum: ({ datum }) => datum,
    exitDatum: ({ datum }) => datum,
    enterEase: 'easeLinear',
    updateEase: 'easeLinear',
    exitEase: 'easeLinear',
    enterDuration: 0,
    updateDuration: 0,
    exitDuration: 0,
    propsToCheckForChanges: [],
  },

  init() {
    this.attrNames = this.getAttrNames();
    this.derivedAttrNames = this.getDerivedAttrNames();
    this.derivedAttrDefaults = this.getDerivedAttrDefaults();
    this.derivedAttrInputNames = this.getDerivedAttrInputNames();
    this.derivedAttrSelectors = this.getDerivedAttrSelectors();
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
    this.state = this.attrs = this.getAttrs(this.props);
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

    transition.on('interrupt', callback);
    transition.on('end', () => {
      this.setState(this.attrs, callback);
    });
  },

  componentWillAppear(callback) {
    this.componentWillAppearOrEnter(callback);
  },

  componentWillEnter(callback) {
    this.componentWillAppearOrEnter(callback);
  },

  componentWillReceiveProps(nextProps) {
    const propsToCheckForChanges = this.attrNames
      .concat(this.allDerivedAttrInputNames)
      .concat(nextProps.propsToCheckForChanges);

    if (
      deepEqual(
        this.getAttrs(this.props, propsToCheckForChanges),
        this.getAttrs(nextProps, propsToCheckForChanges)
      )
    ) return;

    const { updateDuration, updateEase } = nextProps;
    const nextAttrs = this.getAttrs(nextProps);
    const nextStyle = this.getStyle(nextProps);

    this.selection = this.selectSelf();

    const transition = this.selection
      .transition()
      .duration(updateDuration)
      .ease(ease[updateEase]);

    this.applyAttrsToSelection(nextAttrs, transition);
    this.applyStyleToSelection(nextStyle, transition);
    this.tweenDerivedAttrs(
      this.assignAbsolutePropsToDatum(this.getDatum(this.props), this.props),
      this.assignAbsolutePropsToDatum(this.getDatum(nextProps), nextProps),
      nextProps,
      transition
    );

    transition.on('end', () => {
      this.setState(nextAttrs);
      // TODO + derived attrs
    });
  },

  componentWillLeave(callback) {
    const { exitDatum, exitDuration, exitEase } = this.props;
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
    // if (isFunction(this.leaveCallback)) this.leaveCallback();
    // delete this.leaveCallback;
  },

  getAttrNames() {
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
        Object.assign({}, datum)
      );
  },

  applyAttrsToSelection(attrs, selection, selector) {
    if (!itsSet(attrs)) return;
    this.attrNames.concat(this.derivedAttrNames).forEach(name => {
      if (itsSet(attrs[name])) {
        if (itsSet(selector)) {
          selection.select(selector).attr(name, attrs[name]);
        }
        else {
          selection.attr(name, attrs[name]);
        }
      }
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
    return (attrNames || this.attrNames).reduce((acc, key) => {
      let prop = props[key];
      if (!itsSet(prop)) return acc;
      if (isFunction(prop) && itsSet(props.datum)) {
        prop = prop(Object.assign({}, props, { datum: this.getDatum(props) }));
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
      }, selection, this.derivedAttrSelectors[key]);
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
    // TODO: put whitelist datum keys prop on collection to minimize num interpolations
    const keysToInterpolate = Object.keys(toDatum);

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

  getDerivedAttrs() {
    return this.derivedAttrNames.reduce((acc, key) =>
      Object.assign({}, acc, { [key]: this.getDerivedAttr(key) })
    , {});
  },

});
