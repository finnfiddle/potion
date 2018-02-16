import PropTypes from 'prop-types';
import { areaRadial } from 'd3-shape';
import itsSet from 'its-set';

import Element from './Element';

export default class AreaRadial extends Element {

  static displayName = 'AreaRadial';

  static propTypes = {
    angle: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    startAngle: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    endAngle: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    radius: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    innerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    outerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    defined: PropTypes.number,
    curve: PropTypes.number,
    context: PropTypes.number,
    lineStartAngle: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    lineInnerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    lineEndAngle: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    lineOuterRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
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
          return calc(props.points);
        },
      },
    };
  }

}
