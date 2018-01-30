import PropTypes from 'prop-types';

import { TWEENABLE_SVG_PRESENTATION_ATTRS } from './constants';
import Element from './Element';

export default class Circle extends Element {

  static displayName = 'Circle';

  static defaultProps = {
    ...Element.defaultProps,
    component: 'circle',
  }

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
  }

  getAttrNames() {
    return ['cx', 'cy', 'r'].concat(TWEENABLE_SVG_PRESENTATION_ATTRS);
  }

  render() {
    return this.state.el;
  }

}
