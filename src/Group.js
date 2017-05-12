import React from 'react';
import stamp from 'react-stamp';
import itsSet from 'its-set';
import { symbol, symbols } from 'd3-shape';

import AnimatedElement from './AnimatedElement';

export default stamp(React).compose(AnimatedElement, {

  displayName: 'Group',

  getDerivedAttrNames() {
    return ['transform'];
  },

  getDerivedAttrInputNames() {
    return {
      transform: ['x', 'y', 'rotation'],
    };
  },

  getDerivationMethod(key, props) {
    const { datum, index, value } = props;
    switch (key) {
    case 'transform':
      return datum => {
        const attrInputNames = this.derivedAttrInputNames[key];
        const attrValues = this.getAttrs(Object.assign({}, props, { datum }), attrInputNames);
        console.log({ attrValues, attrInputNames }, this.props);
        return `translate(${attrValues.x}, ${attrValues.y}) rotate(${attrValues.rotation})`;
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

    return (
      <g {...restState}>
        {this.props.children}
      </g>
    );
  },

});
