import PropTypes from 'prop-types';

import Element from './Element';

export default class Circle extends Element {

  static displayName = 'Circle';

  static propTypes = {
    cx: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.func,
    ]),
    cy: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.func,
    ]),
    r: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.func,
    ]),
  };

  static defaultProps = {
    ...Element.defaultProps,
    component: 'circle',
  };

}
