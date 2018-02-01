import { cloneElement } from 'react';
import PropTypes from 'prop-types';

import { TWEENABLE_SVG_PRESENTATION_ATTRS } from './constants';
import Element from './Element';
import { isFunction } from './util';

export default class Text extends Element {

  static displayName = 'Text';

  static propTypes = {
    dx: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    dy: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  }

  static defaultProps = {
    ...Element.defaultProps,
    component: 'text',
  };

  getAttrNames() {
    return ['dx', 'dy'].concat(TWEENABLE_SVG_PRESENTATION_ATTRS);
  }

  render() {
    const { children } = this.props;
    return this.state.el ? cloneElement(this.state.el, {
      children: isFunction(children) ? children(this.props) : children,
    }) : null;
  }

}
