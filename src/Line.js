import PropTypes from 'prop-types';

import { TWEENABLE_SVG_PRESENTATION_ATTRS } from './constants';
import Element from './Element';

export default class Line extends Element {

  static displayName = 'Line';

  static propTypes = {
    x1: PropTypes.oneOfType([PropTypes.func, PropTypes.number]).isRequired,
    x2: PropTypes.oneOfType([PropTypes.func, PropTypes.number]).isRequired,
    y1: PropTypes.oneOfType([PropTypes.func, PropTypes.number]).isRequired,
    y2: PropTypes.oneOfType([PropTypes.func, PropTypes.number]).isRequired,
  }

  static defaultProps = {
    ...Element.defaultProps,
    component: 'line',
  };

  getAttrNames() {
    return ['x1', 'x2', 'y1', 'y2'].concat(TWEENABLE_SVG_PRESENTATION_ATTRS);
  }

  render() {
    return this.state.el;
  }
}
