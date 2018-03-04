import PropTypes from 'prop-types';
import { ribbon } from 'd3-chord';
import itsSet from 'its-set';

import Element from './Element';

export default class Ribbon extends Element {

  static displayName = 'Ribbon';

  static propTypes = {
    source: PropTypes.object.isRequired,
    target: PropTypes.object.isRequired,
    radius: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    startAngle: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    endAngle: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  };

  static defaultProps = {
    ...Element.defaultProps,
    component: 'path',
  };

  getPrivateProps() {
    return ['source', 'target'];
  }

  getSchema() {
    return {
      d: {
        get inputs() {
          return [
            'radius',
            'startAngle',
            'endAngle',
          ];
        },
        calculation(props) {
          let calc = ribbon();
          const keys = this.inputs;
          keys.forEach(attrName => {
            if (itsSet(props[attrName])) {
              calc = calc[attrName](props[attrName]);
            }
          });
          return calc({ source: props.source, target: props.target });
        },
      },
    };
  }
}
