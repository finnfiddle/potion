import React, { PropTypes } from 'react';
import stamp from 'react-stamp';
import itsSet from 'its-set';
import isFunction from 'lodash/isFunction';
import pick from 'lodash/pick';
import 'd3-transition';

import SelectSelfMixin from './mixins/SelectSelfMixin';

export default stamp(React).compose(SelectSelfMixin, {

  displayName: 'Shape',

  init() {
    this.attrNames = this.getAttrNames();
    this.derivedAttrNames = this.getDerivedAttrNames();
    this.state = this.attrs = this.getAttrs(this.props);
    this.style = this.getStyle(this.props);
  },

  componentWillAppearOrEnter(callback) {
    const { _key, enterDuration, datum, data, index, enterDatum } = this.props;
    const calculatedEnterDatum = enterDatum(datum, index, data);
    const enterAttrs = this.getAttrsFromDatum(calculatedEnterDatum);
    const enterStyle = this.getStyleFromDatum(calculatedEnterDatum);

    this.selection = this.selectSelf();

    this.applyAttrsToSelection(enterAttrs, this.selection);
    this.applyStyleToSelection(enterStyle, this.selection);

    const transition = this.selection
      .transition(`${_key}_enter`)
      .duration(enterDuration);

    this.applyAttrsToSelection(this.attrs, transition);
    this.applyStyleToSelection(this.style, transition);

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
    const { _key, updateDuration } = nextProps;
    const nextAttrs = this.getAttrs(nextProps);
    const nextStyle = this.getStyle(nextProps);

    this.selection = this.selectSelf();

    const transition = this.selection
      .transition(`${_key}_update`)
      .duration(updateDuration);

    this.applyAttrsToSelection(nextAttrs, transition);
    this.applyStyleToSelection(nextStyle, transition);

    transition.on('end', () => {
      this.setState(nextAttrs);
    });
  },

  componentWillLeave(callback) {
    const { exitDatum, exitDuration, _key, datum, index, data } = this.props;
    this.selection.interrupt(`${_key}_enter`);
    this.selection.interrupt(`${_key}_update`);
    const computedExitDatum = exitDatum(datum, index, data);
    const exitAttrs = this.getAttrsFromDatum(computedExitDatum);
    const exitStyle = this.getStyleFromDatum(computedExitDatum);

    const transition = this.selectSelf()
      .transition(`${_key}_leave`)
      .duration(exitDuration);

    this.applyAttrsToSelection(exitAttrs, transition);
    this.applyStyleToSelection(exitStyle, transition);

    transition.on('end', () => {
      callback();
    });
  },

  componentWillUnmount() {
    const { _key } = this.props;
    this.selection.interrupt(`${_key}_enter`);
    this.selection.interrupt(`${_key}_update`);
    this.selection.interrupt(`${_key}_leave`);
  },

  getAttrNames() {
    return [];
  },

  getDerivedAttrNames() {
    return [];
  },

  applyAttrsToSelection(attrs, selection) {
    this.attrNames.forEach(name => {
      selection.attr(name, attrs[name]);
    });
  },

  applyStyleToSelection(style, selection) {
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

  getAttrs(props) {
    const { datum, data, index } = props;

    const attrs = pick(
      this.attrNames.reduce((acc, key) => {
        let prop = props[key];
        if (!itsSet(prop)) return acc;
        if (isFunction(prop)) prop = prop(datum, index, data);
        return Object.assign({}, acc, { [key]: prop });
      }, {}),
      this.attrNames
    );

    const derivedAttrs = this.derivedAttrNames.reduce((acc, key) => {
      return Object.assign({}, acc, { [key]: this.getDerivedAttr(key) });
    }, {});

    return Object.assign({}, attrs, derivedAttrs);
  },

  getStyle(props) {
    const { style, datum, data, index } = props;
    if (isFunction(style)) return style(datum, index, data);
    return style;
  },

  render() {
    return (
      <g />
    );
  },

});
