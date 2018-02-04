import PropTypes from 'prop-types';
import { lineRadial } from 'd3-shape';
import itsSet from 'its-set';

import Element from './Element';

export default class Line extends Element {

  static displayName = 'Line';

  static propTypes = {
    angle: PropTypes.number,
    radius: PropTypes.number,
    defined: PropTypes.number,
    curve: PropTypes.number,
    context: PropTypes.number,
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
          return calc();
        },
      },
    };
  }

}
