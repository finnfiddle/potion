import React, { cloneElement, Children } from 'react';
import stamp from 'react-stamp';
import itsSet from 'its-set';
import { symbol, symbols } from 'd3-shape';

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

  getDerivationMethod(key, props) {
    const { datum, index, value } = props;
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
        return `translate(${x}, ${y}) rotate(${rotation}, ${rotationOriginX}, ${rotationOriginY})`;
      };
    };
  },

  render() {
    const {
      enterDatum,
      enterDuration,
      updateDuration,
      x,
      y,
      ...restState,
    } = this.state;

    const { datum, data, index } = this.props;

    return (
      <TransitionGroup {...restState}>
        {this.renderChildren()}
      </TransitionGroup>
    );
  },

  renderChildren() {
    const { datum, data, index, children } = this.props;
    return Children.map(children, child => cloneElement(child, { datum, data, index }));
  },

});
