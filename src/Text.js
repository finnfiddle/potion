import PropTypes from 'prop-types';

import Element from './Element';

export default class Text extends Element {

  static displayName = 'Text';

  static propTypes = {
    dx: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    dy: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  };

  static defaultProps = {
    ...Element.defaultProps,
    component: 'text',
  }
}
