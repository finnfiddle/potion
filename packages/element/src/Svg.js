import PropTypes from 'prop-types';
import { types } from '@potion/util';

import Element from './Element';

export default class Svg extends Element {

  static displayName = 'Svg';

  static propTypes = {
    patterns: PropTypes.array,
    components: types.componentsType,
  };

  static defaultProps = {
    ...Element.defaultProps,
    components: {},
    env: 'web',
  };

  static childContextTypes = {
    components: types.componentsType,
    env: PropTypes.oneOf(['web', 'react-native-svg']),
  }

  defaultComponent='svg'

  getChildContext() {
    return {
      components: {
        svg: 'svg',
        circle: 'circle',
        ellipse: 'ellipse',
        g: 'g',
        linearGradient: 'linearGradient',
        radialGradient: 'radialGradient',
        line: 'line',
        path: 'path',
        polygon: 'polygon',
        polyline: 'polyline',
        rect: 'rect',
        symbol: 'symbol',
        text: 'text',
        use: 'use',
        defs: 'defs',
        stop: 'stop',
        ...this.props.components,
      },
      env: this.props.env,
    };
  }

  getPrivateProps() {
    return ['components', 'env'];
  }
}
