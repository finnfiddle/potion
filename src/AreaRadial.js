import PropTypes from 'prop-types';
import { areaRadial } from 'd3-shape';
import itsSet from 'its-set';

import Element from './Element';

export default class Line extends Element {

  static displayName = 'Line';

  static propTypes = {
    angle: PropTypes.number,
    startAngle: PropTypes.number,
    endAngle: PropTypes.number,
    radius: PropTypes.number,
    innerRadius: PropTypes.number,
    outerRadius: PropTypes.number,
    defined: PropTypes.number,
    curve: PropTypes.number,
    context: PropTypes.number,
    lineStartAngle: PropTypes.number,
    lineInnerRadius: PropTypes.number,
    lineEndAngle: PropTypes.number,
    lineOuterRadius: PropTypes.number,
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
            'angle',
            'startAngle',
            'endAngle',
            'radius',
            'innerRadius',
            'outerRadius',
            'defined',
            'curve',
            'context',
            'lineStartAngle',
            'lineInnerRadius',
            'lineEndAngle',
            'lineOuterRadius',
          ];
        },
        calculation(props) {
          let calc = areaRadial();
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
