import React from 'react';
import PropTypes from 'prop-types';
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
import AnimatedElement from './mixins/AnimatedElement';

export default class SymbolShape extends AnimatedElement {

  constructor(props) {
    super(props);
    this.displayName = 'SymbolShape';
  }

  getAttrNames() {
    return TWEENABLE_SVG_PRESENTATION_ATTRS;
  }

  getPrivatePropNames() {
    return ['size', 'type'];
  }

  getDerivedAttrNames() {
    return ['d'];
  }

  getDerivedAttrInputNames() {
    return {
      d: ['size', 'type'],
    };
  }

  getDerivationMethod(key, props, shouldGetDatum) {
    switch (key) {
      case 'd':
        return datum => {
          const attrInputNames = this.derivedAttrInputNames[key];
          const attrValues = this.getAttrs(
            Object.assign({}, props, { datum }),
            attrInputNames,
            shouldGetDatum
          );
          let symbolInstance = symbol();
          const { size, type } = attrValues;
          if (itsSet(size)) symbolInstance = symbolInstance.size(size);
          if (itsSet(type)) symbolInstance = symbolInstance.type(SYMBOLS[type]);
          return symbolInstance();
        };
      // no default
    }
  }

  render() {
    return (
      <path {...this.state} style={this.getStyle(this.props)} {...bindMouseEvents(this.props)} />
    );
  }

}

SymbolShape.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  type: PropTypes.oneOf(Object.keys(SYMBOLS)),
};

SymbolShape.defaultProps = Object.assign({}, AnimatedElement.defaultProps);
