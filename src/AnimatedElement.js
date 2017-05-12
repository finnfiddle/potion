import React, { PropTypes } from 'react';
import stamp from 'react-stamp';
import itsSet from 'its-set';
import isFunction from 'lodash/isFunction';
import uniq from 'lodash/uniq';
import { attrTween } from 'd3-transition';
import { interpolate } from 'd3-interpolate';
import * as ease from 'd3-ease';
import deepEqual from 'deep-equal';

import SelectSelfMixin from './mixins/SelectSelfMixin';

export default stamp(React).compose(SelectSelfMixin, {

  displayName: 'AnimatedElement',

  state: {
    didEnter: false,
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
  },

  init() {
    this.attrNames = this.getAttrNames();
    this.derivedAttrNames = this.getDerivedAttrNames();
    this.derivedAttrInputNames = this.getDerivedAttrInputNames();
    this.derivedAttrSelectors = this.getDerivedAttrSelectors();
    this.allDerivedAttrInputNames = uniq(
      Object.keys(this.derivedAttrInputNames)
        .reduce((acc, key) =>
          acc.concat(this.derivedAttrInputNames[key])
        , [])
    );
    this.state = this.attrs = this.getAttrs(this.props);
  },

  componentWillAppearOrEnter(callback) {
    const { _key, enterDuration, datum, data, index, enterDatum, enterEase } = this.props;
    const calculatedEnterDatum = enterDatum(this.props);
    const enterAttrs = this.getAttrsFromDatum(calculatedEnterDatum);
    const enterStyle = this.getStyleFromDatum(calculatedEnterDatum);
    console.log({ enterAttrs, 'this.attrs': this.attrs });

    this.selection = this.selectSelf();

    this.applyAttrsToSelection(enterAttrs, this.selection);
    this.applyStyleToSelection(enterStyle, this.selection);
    this.applyDerivedAttrsToSelection(this.props, calculatedEnterDatum, this.selection);

    const transition = this.selection
      .transition()
      .duration(enterDuration)
      .ease(ease[enterEase]);

    this.tweenDerivedAttrs(calculatedEnterDatum, datum, this.props, transition);
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

  componentWillReceiveProps(nextProps, nextState) {
    const propsToCheckForChanges = this.attrNames.concat(this.allDerivedAttrInputNames);

    if (
      deepEqual(
        this.getAttrs(this.props, propsToCheckForChanges),
        this.getAttrs(nextProps, propsToCheckForChanges)
      )
    ) return;


    const { _key, updateDuration, updateEase } = nextProps;
    const nextAttrs = this.getAttrs(nextProps);
    const nextStyle = this.getStyle(nextProps);

    this.selection = this.selectSelf();

    const transition = this.selection
      .transition()
      .duration(updateDuration)
      .ease(ease[updateEase]);

    this.applyAttrsToSelection(nextAttrs, transition);
    this.applyStyleToSelection(nextStyle, transition);
    this.tweenDerivedAttrs(this.props.datum, nextProps.datum, nextProps, transition);

    transition.on('end', () => {
      this.setState(nextAttrs);
      // TODO + derived attrs
    });
  },

  componentWillLeave(callback) {
    const { exitDatum, exitDuration, _key, datum, index, data, exitEase } = this.props;
    const computedExitDatum = exitDatum(this.props);
    const exitAttrs = this.getAttrsFromDatum(computedExitDatum);
    const exitStyle = this.getStyleFromDatum(computedExitDatum);

    const transition = this.selection
      .transition()
      .duration(exitDuration)
      .ease(ease[exitEase]);

    this.applyAttrsToSelection(exitAttrs, transition);
    this.applyStyleToSelection(exitStyle, transition);
    this.tweenDerivedAttrs(this.props.datum, computedExitDatum, this.props, transition);

    this.leaveTimeout = setTimeout(callback, exitDuration);
  },

  componentWillUnmount() {
    clearTimeout(this.leaveTimeout);
    this.selection.interrupt();
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

  getDerivedAttrSelectors() {
    return {};
  },

  applyAttrsToSelection(attrs, selection, selector) {
    console.log(attrs, selection, selector);
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
