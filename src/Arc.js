import PropTypes from 'prop-types';
import { arc } from 'd3-shape';
import itsSet from 'its-set';

import { TWEENABLE_SVG_PRESENTATION_ATTRS } from './constants';
import Element from './Element';

export default class Arc extends Element {

  static displayName = 'Arc';

  static propTypes = {
    innerRadius: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.func,
    ]),
    outerRadius: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.func,
    ]),
    startAngle: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.func,
    ]),
    endAngle: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.func,
    ]),
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
        calculation() {
          let calc = arc();
          const keys = this.inputs;
          keys.forEach(attrName => {
            if (itsSet(this.props[attrName])) {
              calc = calc[attrName](this.props[attrName]);
            }
          });
          return calc();
        },
      },
    };
  }
}
