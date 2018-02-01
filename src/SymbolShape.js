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
import Element from './Element';

export default class SymbolShape extends Element {

  static displayName = 'SymbolShape';

  static propTypes = {
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    type: PropTypes.oneOf(Object.keys(SYMBOLS)),
  };

  static defaultProps = {
    ...Element.defaultProps,
    component: 'path',
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

  getDerivationMethod(key, props) {
    switch (key) {
      case 'd':
        return datum => {
          const attrInputNames = this.derivedAttrInputNames[key];
          const attrValues = this.getAttr({ ...props, datum }, attrInputNames);
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
    return this.state.el;
  }

}
