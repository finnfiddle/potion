import React from 'react';
import PropTypes from 'prop-types';

import { TWEENABLE_SVG_PRESENTATION_ATTRS } from './constants';
import { bindMouseEvents } from './helpers';

import AnimatedElement from './mixins/AnimatedElement';

export default class Rect extends AnimatedElement {

  constructor(props) {
    super(props);
    this.displayName = 'Rect';
  }

  getAttrNames() {
    return ['x', 'y', 'height', 'width'].concat(TWEENABLE_SVG_PRESENTATION_ATTRS);
  }

  render() {
    return (
      <rect {...this.state} style={this.getStyle(this.props)} {...bindMouseEvents(this.props)} />
    );
  }

}

Rect.propTypes = {
  x: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
  y: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
};

Rect.defaultProps = Object.assign({}, AnimatedElement.defaultProps);
