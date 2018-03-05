import PropTypes from 'prop-types';

import Element from './Element';

export default class Svg extends Element {

  static displayName = 'Svg';

  static propTypes = {
    patterns: PropTypes.array,
  };

  static defaultProps = {
    ...Element.defaultProps,
    component: 'svg',
  };
}
