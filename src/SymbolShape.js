import React from 'react';
import stamp from 'react-stamp';
import itsSet from 'its-set';
import {
  symbol,
  symbolCircle,
  symbolCross,
  symbolDiamond,
  symbolSquare,
  symbolStar,
  symbolTriangle,
  symbolWye,
} from 'd3-shape';

const SYMBOLS = {
  symbolCircle,
  symbolCross,
  symbolDiamond,
  symbolSquare,
  symbolStar,
  symbolTriangle,
  symbolWye,
};

import AnimatedElement from './AnimatedElement';

export default stamp(React).compose(AnimatedElement, {

  displayName: 'Symbol',

  getAttrNames() {
    return ['fill', 'stroke', 'strokeWidth'];
  },

  getDerivedAttrNames() {
    return ['d'];
  },

  getDerivedAttrInputNames() {
    return {
      d: ['size', 'type'],
    };
  },

  getDerivationMethod(key, props) {
    const { datum, index, value } = props;
    switch (key) {
    case 'd':
      return datum => {
        const attrInputNames = this.derivedAttrInputNames[key];
        const attrValues = this.getAttrs(Object.assign({}, props, { datum }), attrInputNames);
        let symbolInstance = symbol();
        const { size, type } = attrValues;
        if (itsSet(size)) symbolInstance = symbolInstance.size(size);
        if (itsSet(type)) symbolInstance = symbolInstance.type(SYMBOLS[type]);
        return symbolInstance();
      };
    };
  },

  render() {
    return (
      <path {...this.state} />
    );
  },

});
