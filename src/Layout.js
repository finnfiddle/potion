import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TransitionMotion, spring } from 'react-motion';
import itsSet from 'its-set';

import { wrapIfOutdated, isObject } from './util';

const packHierarchyList = (unpacked) =>
  unpacked.map(d => {
    const { data, style } = d;
    return { ...data, ...style };
  });

export default class Layout extends Component {

  static displayName = 'Layout';

  static propTypes = {
    children: PropTypes.func.isRequired,
    nodeEnter: PropTypes.func,
    nodeExit: PropTypes.func,
    animate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  };

  static defaultProps = {
    animate: false,
    nodeEnter: d => d,
    nodeExit: d => d,
    component: 'g',
  };

  constructor() {
    super();
    this.schema = this.getSchema();
    this.getEnterStyle = this.getEnterStyle.bind(this);
    this.getExitStyle = this.getExitStyle.bind(this);
  }

  getEnterStyle({ style }) {
    const result = { ...style, ...this.props.nodeEnter(style) };
    return Object.keys(result).reduce((acc, key) => ({
      ...acc,
      [key]: isObject(result[key]) ? result[key].val : result[key],
    }), {});
  }

  getExitStyle({ style }) {
    const result = { ...style, ...this.props.nodeExit(style) };

    return Object.keys(result).reduce((acc, key) => ({
      ...acc,
      [key]: isObject(result[key]) ? result[key].val : result[key],
    }), {});
  }

  getLayout() {
    const { layout, layoutProps } = this.schema;
    let p = layout();
    layoutProps.forEach((key) => {
      if (itsSet(this.props[key])) p = p[key](this.props[key]);
    });
    return p;
  }

  getAnimatedData() {
    return this.getData().map(d => ({
      key: d.key || d.data.key,
      data: d,
      style: this.schema.selectStylesToTween(d),
    }));
  }

  getStaticData() {
    return this.getData();
  }

  transformDefaultStyles(data) {
    return data.map(d => ({ ...d, style: this.props.nodeEnter(d.style) }));
  }

  transformStyles(data) {
    return data.map(d => ({
      ...d,
      style: Object.keys(d.style)
        .reduce((acc, key) => ({
          ...acc,
          [key]: spring(d.style[key]),
        }), {}),
    }));
  }

  transformInterpolatedStyles(data) {
    return packHierarchyList(data);
  }

  renderAnimated() {
    const { children } = this.props;
    const data = this.getAnimatedData();
    return (
      <TransitionMotion
        defaultStyles={this.transformDefaultStyles(data)}
        styles={this.transformStyles(data)}
        willEnter={this.getEnterStyle}
        willLeave={this.getExitStyle}
      >
        {interpolatedStyles => (
          <this.props.component>
            {children(
              this.transformInterpolatedStyles(interpolatedStyles)
            )}
          </this.props.component>
        )}
      </TransitionMotion>
    );
  }

  renderStatic() {
    console.log(this.getStaticData());
    return (
      <this.props.component>
        {this.props.children(this.getStaticData())}
      </this.props.component>
    );
  }

  render() {
    return this.props.animate ? this.renderAnimated() : this.renderStatic();
  }
}
