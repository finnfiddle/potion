import PropTypes from 'prop-types';
import { area } from 'd3-shape';
import itsSet from 'its-set';

import Element from './Element';

export default class Area extends Element {

  static displayName = 'Area';

  static propTypes = {
    x: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    x0: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    x1: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    y: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    y0: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    y1: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    defined: PropTypes.func,
    curve: PropTypes.func,
    // context: PropTypes.number,
    lineX0: PropTypes.func,
    lineY0: PropTypes.func,
    lineX1: PropTypes.func,
    lineY1: PropTypes.func,
    points: PropTypes.array.isRequired,
  };

  static defaultProps = {
    ...Element.defaultProps,
    component: 'path',
  };

  getSchema() {
    return {
      d: {
        get inputs() {
          return [
            'x',
            'x0',
            'x1',
            'y',
            'y0',
            'y1',
            'defined',
            'curve',
            'context',
            'lineX0',
            'lineY0',
            'lineX1',
            'lineY1',
          ];
        },
        calculation(props) {
          let calc = area();
          const keys = this.inputs;
          keys.forEach(attrName => {
            if (itsSet(props[attrName])) {
              calc = calc[attrName](props[attrName]);
            }
          });
          return calc(props.points);
        },
      },
    };
  }

}
