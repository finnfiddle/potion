import React, { cloneElement, Children } from 'react';
import stamp from 'react-stamp';
import isString from 'lodash/isString';
import get from 'lodash/get';

import TransitionGroup from './TransitionGroup';
import AnimatedElement from './AnimatedElement';

export default stamp(React).compose(AnimatedElement, {

  displayName: 'Group',

  defaultProps: {
    x: 0,
    y: 0,
    rotation: 0,
    rotationOriginX: 0,
    rotationOriginY: 0,
  },

  getDerivedAttrNames() {
    return ['transform'];
  },

  getDerivedAttrInputNames() {
    return {
      transform: ['x', 'y', 'rotation', 'rotationOriginX', 'rotationOriginY'],
    };
  },

  getAttrDefaults() {
    return {
      x: 0,
      y: 0,
      rotation: 0,
      rotationOriginX: 0,
      rotationOriginY: 0,
    };
  },

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
          } = this.getAttrs(Object.assign({}, props, { datum }), attrInputNames);
          return `translate(${x}, ${y}) rotate(${rotation}, ${rotationOriginX}, ${rotationOriginY})`; // eslint-disable-line max-len
        };
      // no default
    }
  },

  render() {
    const style = this.getStyle(this.props);
    return (
      <TransitionGroup style={style}>
        {this.renderChildren()}
      </TransitionGroup>
    );
  },

  renderChildren() {
    const { datum, data, index, children } = this.props;
    return Children.map(children, child => {
      if (isString(child.type)) return child;
      return [
        'Arc',
        'Area',
        'Axis',
        'AxisBottom',
        'AxisLeft',
        'AxisRight',
        'AxisTop',
        'Circle',
        'Collection',
        'Curve',
        'ForceSimulation',
        'Grid',
        'Group',
        'Line',
        'Pack',
        'Pie',
        'RadialArea',
        'RadialLine',
        'Rect',
        'Stack',
        'SymbolShape',
        'Text',
        'TransitionGroup',
      ].includes(get(child, 'type.displayName')) ?
        cloneElement(child, { datum, data, index }) :
        child;
    });
  },

});
