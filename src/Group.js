import React, { cloneElement, Children } from 'react';
import PropTypes from 'prop-types';
import itsSet from 'its-set';
import get from 'utils-deep-get';

import { isFunction } from './util';
import TransitionGroup from './TransitionGroup';
import Element from './Element';

export default class Group extends Element {

  static displayName = 'Group';

  static propTypes = {
    x: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
    y: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
    rotation: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
    rotationOriginX: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
    rotationOriginY: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
  }

  static defaultProps = {
    ...Element.defaultProps,
    x: 0,
    y: 0,
    rotation: 0,
    rotationOriginX: 0,
    rotationOriginY: 0,
    component: 'g',
  }

  getDerivedAttrNames() {
    return ['transform'];
  }

  getDerivedAttrInputNames() {
    return {
      transform: ['x', 'y', 'rotation', 'rotationOriginX', 'rotationOriginY'],
    };
  }

  getAttrDefaults() {
    return {
      x: 0,
      y: 0,
      rotation: 0,
      rotationOriginX: 0,
      rotationOriginY: 0,
    };
  }

  getPrivatePropNames() {
    return ['x', 'y', 'rotation', 'rotationOriginX', 'rotationOriginY'];
  }

  getDerivationMethod(key, props) {
    switch (key) {
      case 'transform':
        return datum => {
          const attrInputNames = this.derivedAttrInputNames[key];
          const {
            x,
            y,
            rotation,
            rotationOriginX,
            rotationOriginY,
          } = this.getAttr({ ...props, datum }, attrInputNames);
          return `translate(${x}, ${y}) rotate(${rotation}, ${rotationOriginX}, ${rotationOriginY})`; // eslint-disable-line max-len
        };
      // no default
    }
  }

  renderChildren() {
    const { datum, data, index, children, enterDatum, exitDatum } = this.props;
    return Children.map(children, child => {
      if (!itsSet(child)) return null;
      const props = (child !== null && isFunction(get(child, 'type'))) ?
        Object.assign({ datum, data, index, enterDatum, exitDatum }, child.props) :
        child.props;
      return cloneElement(child, props);
    });
  }

  render() {
    return this.state.el ? cloneElement(this.state.el, {
      children: (
        <TransitionGroup component={this.props.groupComponent}>
          {this.renderChildren()}
        </TransitionGroup>
      ),
    }) : null;
  }
}
