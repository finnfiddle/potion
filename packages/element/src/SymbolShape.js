import PropTypes from 'prop-types';
import itsSet from 'its-set';
import {
  symbol as d3Symbol,
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
  };

  getSchema() {
    return {
      d: {
        inputs: ['size', 'type'],
        calculation: (props) => {
          let symbol = d3Symbol();
          const { size, type } = props;
          if (itsSet(size)) symbol = symbol.size(size);
          if (itsSet(type)) symbol = symbol.type(SYMBOLS[type]);
          return symbol();
        },
      },
    };
  }
}
