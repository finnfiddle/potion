import React, { PropTypes } from 'react';
import stamp from 'react-stamp';
import { transition } from 'd3-transition';
import isFunction from 'lodash/isFunction';
import isNumber from 'lodash/isNumber';
import intersection from 'lodash/intersection';
import itsSet from 'its-set';

import { mapObject } from './helpers';

export default {

  propTypes: {
    // enter
    // leave
  },

  defaultProps: {
    enter: () => ({}),
    leave: () => ({}),
  },

  init() {
    const { enter, datum, index, data } = this.props;
    const enterAttrs = this.getAttrs(enter(datum, index, data));
    const attrs = this.getAttrs(this.props);
    this.state = Object.assign({}, attrs, enterAttrs);
  },

  getAttrs(props) {
    return this.getAttrNames().reduce((acc, key) => {
      let result = props[key];
      if (!itsSet(result)) return acc;
      if (isFunction(props[key])) result = this.getValue(key, props);
      return Object.assign({}, acc, { [key]: result });
    }, {});
  },

  getAttrGenerators() {
    return this.getGeneratedAttrNames().reduce((acc, key) => {
      return Object.assign({}, acc, { [key]: this.getGenerator(key) });
    }, {});
  },

  componentWillAppearOrEnter(callback) {
    const { enter, _key, datum, index, data } = this.props;
    const attrGenerators = this.getAttrGenerators();
    const startAttrs = enter(datum, index, data);
    const endAttrs = this.getAttrs(this.props);
    const generatedEndAttrs = mapObject(attrGenerators, (value, key) =>
      attrGenerators[key](this.props)
    );

    this.selection = this.selectSelf();

    this.selection.attr(startAttrs);

    const trans = this.selection
      .transition(`${_key}_enter`)
      .duration(1000);

    Object.keys(endAttrs).forEach(key => {
      trans.attr(key, endAttrs[key]);
    });

    const endPropsForGenerators = this.getPropsForGenerators(this.props);
    const startPropsForGenerators = Object.assign(
      {},
      this.getPropsForGenerators(startAttrs),
      endPropsForGenerators
    );

    const tweener = this.tweenProps(startPropsForGenerators, endPropsForGenerators);

    Object.keys(attrGenerators).forEach(key => {
      trans.attrTween(key, () =>
        t => attrGenerators[key](tweener(t))
      );
    });

    trans.on('end', () => {
      this.setState(Object.assign({}, endAttrs, generatedEndAttrs), callback);
    });
  },

  componentWillAppear(callback) {
    this.componentWillAppearOrEnter(callback);
  },

  componentWillEnter(callback) {
    this.componentWillAppearOrEnter(callback);
  },

  tweenProps(startProps, endProps) {
    const whitelist = intersection(Object.keys(startProps), Object.keys(endProps));
    return t =>
      whitelist.reduce((acc, key) =>
        Object.assign({}, acc, { [key]: startProps[key] + (endProps[key] - startProps[key]) * t })
      , {});
  },

  getPropsForGenerators(props) {
    const whitelist = this.getPropNamesForGenerators();
    return mapObject(whitelist, (value, key) => this.getValue(key, props));
  },

  getValue(key, props) {
    const prop = props[key];
    const { datum, index } = props;
    if (isFunction(prop)) return prop(datum || this.props.datum, index || this.props.index);
    return prop;
  },

  componentWillReceiveProps(nextProps) {
    const { _key } = this.props;
    const attrGenerators = this.getAttrGenerators();
    const endAttrs = this.getAttrs(nextProps);
    const generatedEndAttrs = mapObject(attrGenerators, (value, key) =>
      attrGenerators[key](nextProps)
    );

    this.selection = this.selectSelf();
    const trans = this.selection.transition(`${_key}_update`).duration(1000);

    Object.keys(endAttrs).forEach(key => {
      trans.attr(key, endAttrs[key]);
    });

    const tweener = this.tweenProps(
      this.getPropsForGenerators(this.props),
      this.getPropsForGenerators(nextProps)
    );

    Object.keys(attrGenerators).forEach(key => {
      trans.attrTween(key, () =>
        t => attrGenerators[key](tweener(t))
      );
    });

    trans.on('end', () => {
      this.setState(Object.assign({}, endAttrs, generatedEndAttrs));
    });
  },

  componentWillLeave(callback) {
    const { leave, _key, datum, index, data } = this.props;
    const attrs = leave(datum, index, data);

    const trans = this.selectSelf()
      .transition(`${_key}_leave`)
      .duration(1000);

    Object.keys(attrs).forEach(key => {
      trans.attr(key, attrs[key]);
    });

    trans.on('end', () => {
      callback();
    });
  },

  componentWillUnmount() {
    this.selection.interrupt(`${this.props._key}_enter`);
    this.selection.interrupt(`${this.props._key}_update`);
    this.selection.interrupt(`${this.props._key}_leave`);
  },

};
