import React, { PropTypes } from 'react';
import stamp from 'react-stamp';
import { transition } from 'd3-transition';
import isFunction from 'lodash/isFunction';
import itsSet from 'its-set';

export default {

  propTypes: {
    // enter
    // leave
  },

  defaultProps: {
    enter: () => {},
    leave: () => {},
  },

  init() {
    const { enter, datum, index } = this.props;
    const enterAttrs = this.getAttrs(enter(datum, index));
    const attrs = this.getAttrs(this.props);
    this.state = Object.assign({}, attrs, enterAttrs);
  },

  getAttrs(props) {
    return this.getAttrNames().reduce((acc, key) => {
      let result = props[key];
      if (!itsSet(result)) return acc;
      if (isFunction(props[key])) {
        result = props[key](
          (props.datum || this.props.datum),
          (props.index || this.props.index)
        );
      }
      return Object.assign({}, acc, { [key]: result });
    }, {});
  },

  getAttrGenerators(props) {
    return this.getGeneratedAttrNames().reduce((acc, key) => {
      return Object.assign({}, acc, { [key]: this.getGenerator(key) });
    }, {});
  },

  componentWillAppearOrEnter(callback) {
    const { enter, _key } = this.props;
    const startAttrs = enter(this.props.datum, this.props.index);
    const endAttrs = this.getAttrs(this.props);
    const attrGenerators = this.getAttrGenerators(this.props);
    const generatedEndAttrs = Object.keys(attrGenerators).reduce((acc, key) => {
      return Object.assign({}, acc, { [key]: attrGenerators[key](this.props) })
    }, {});

    this.selection = this.selectSelf();

    this.selection.attr(startAttrs);

    const t = this.selection
      .transition(`${_key}_enter`)
      .duration(1000);

    Object.keys(endAttrs).forEach(key => {
      t.attr(key, endAttrs[key]);
    });
    console.log(Object.assign({}, endAttrs, generatedEndAttrs));
    t.on('end', () => {
      this.setState(Object.assign({}, endAttrs, generatedEndAttrs), callback);
    });
  },

  componentWillAppear(callback) {
    this.componentWillAppearOrEnter(callback);
  },

  componentWillEnter(callback) {
    this.componentWillAppearOrEnter(callback);
  },

  componentWillReceiveProps(nextProps) {
    const { _key } = this.props;
    const endAttrs = this.getAttrs(nextProps);
    const attrGenerators = this.getAttrGenerators(this.props);
    const generatedEndAttrs = Object.keys(attrGenerators).reduce((acc, key) => {
      return Object.assign({}, acc, { [key]: attrGenerators[key](this.props) })
    }, {})

    this.selection = this.selectSelf();
    const t = this.selection.transition(`${_key}_update`).duration(1000);

    Object.keys(endAttrs).forEach(key => {
      t.attr(key, endAttrs[key]);
    });

    t.on('end', () => {
      this.setState(Object.assign({}, endAttrs, generatedEndAttrs));
    });
  },

  componentWillLeave(callback) {
    const { leave, _key } = this.props;
    const attrs = leave(this.props.datum, this.props.index);

    const t = this.selectSelf()
      .transition(`${_key}_leave`)
      .duration(1000);

    Object.keys(attrs).forEach(key => {
      t.attr(key, attrs[key]);
    });

    t.on('end', () => {
      callback();
    });
  },

  componentWillUnmount() {
    this.selection.interrupt(`${this.props._key}_enter`);
    this.selection.interrupt(`${this.props._key}_update`);
    this.selection.interrupt(`${this.props._key}_leave`);
  },

  componentDidLeave() {
  },

};
