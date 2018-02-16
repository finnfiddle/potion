import PropTypes from 'prop-types';
import { lineRadial } from 'd3-shape';
import itsSet from 'its-set';

import Element from './Element';

export default class Line extends Element {

  static displayName = 'LineRadial';

  static propTypes = {
    angle: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    radius: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    defined: PropTypes.number,
    curve: PropTypes.number,
    context: PropTypes.number,
    points: PropTypes.array.isRequired,
  };

  static defaultProps = {
    ...Element.defaultProps,
    component: 'path',
    angle: d => d[0],
    radius: d => d[1],
  };

  getPrivateProps() {
    return ['points'];
  }

  getSchema() {
    return {
      d: {
        get inputs() {
          return [
            'angle',
            'radius',
            'defined',
            'curve',
            'context',
          ];
        },
        calculation(props) {
          let calc = lineRadial();
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
