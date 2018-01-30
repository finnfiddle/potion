import PropTypes from 'prop-types';

import { TWEENABLE_SVG_PRESENTATION_ATTRS } from './constants';
import Element from './Element';

export default class Rect extends Element {

  static displayName = 'Rect';

  static propTypes = {
    x: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
    y: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
    width: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
  }

  static defaultProps = {
    ...Element.defaultProps,
    component: 'rect',
  }

  getAttrNames() {
    return ['x', 'y', 'height', 'width'].concat(TWEENABLE_SVG_PRESENTATION_ATTRS);
  }

  render() {
    return this.state.el;
  }

}
