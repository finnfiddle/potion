import PropTypes from 'prop-types';
import { types, defaultProps } from '@potion/util';

import Element from './Element';

export default class Svg extends Element {

  static displayName = 'Svg';

  static propTypes = {
    patterns: PropTypes.array,
    components: types.components,
  };

  static defaultProps = {
    ...Element.defaultProps,
    components: {},
    env: 'web',
  };

  static childContextTypes = {
    components: types.components,
    env: PropTypes.oneOf(['web', 'react-native-svg']),
  }

  defaultComponent='svg'

  getChildContext() {
    return {
      components: {
        ...defaultProps.components,
        ...this.props.components,
      },
      env: this.props.env,
    };
  }

  getPrivateProps() {
    return ['components', 'env'];
  }
}
