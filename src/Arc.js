import PropTypes from 'prop-types';
import { arc } from 'd3-shape';
import itsSet from 'its-set';

import Element from './Element';

export default class Arc extends Element {

  static displayName = 'Arc';

  static propTypes = {
    innerRadius: PropTypes.number,
    outerRadius: PropTypes.number,
    startAngle: PropTypes.number,
    endAngle: PropTypes.number,
  };

  static defaultProps = {
    ...Element.defaultProps,
    component: 'path',
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0,
  };

  getSchema() {
    return {
      d: {
        get inputs() {
          return ['innerRadius', 'outerRadius', 'startAngle', 'endAngle'];
        },
        calculation(props) {
          let calc = arc();
          const keys = this.inputs;
          keys.forEach(attrName => {
            if (itsSet(props[attrName])) {
              calc = calc[attrName](props[attrName]);
            }
          });
          return calc();
        },
      },
    };
  }
}
