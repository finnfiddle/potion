import React, { PropTypes } from 'react';
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

import { TWEENABLE_SVG_PRESENTATION_ATTRS } from './constants';
import { bindMouseEvents } from './helpers';
import AnimatedElement from './AnimatedElement';

export default stamp(React).compose(AnimatedElement, {

  displayName: 'Symbol',

  propTypes: {
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    type: PropTypes.oneOf(Object.keys(SYMBOLS)),
  },

  getAttrNames() {
    return TWEENABLE_SVG_PRESENTATION_ATTRS;
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
      // no default
    }
  },

  render() {
    return (
      <path {...this.state} style={this.getStyle(this.props)} {...bindMouseEvents(this.props)} />
    );
  },

});
