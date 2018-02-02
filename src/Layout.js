import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TransitionMotion, spring } from 'react-motion';

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
    component: PropTypes.element,
  };

  static defaultProps = {
    animate: false,
    nodeEnter: d => d,
    nodeExit: d => d,
    component: 'g',
  };

  constructor() {
    super();
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
            {wrapIfOutdated(
              children(
                this.transformInterpolatedStyles(interpolatedStyles)
              ),
              'g'
            )}
          </this.props.component>
        )}
      </TransitionMotion>
    );
  }

  renderStatic() {
    return wrapIfOutdated(this.props.children(this.getStaticData()), 'g');
  }

  render() {
    return this.props.animate ? this.renderAnimated() : this.renderStatic();
  }
}
