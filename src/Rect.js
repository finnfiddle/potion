import React, { PropTypes } from 'react';
import stamp from 'react-stamp';

import { TWEENABLE_SVG_PRESENTATION_ATTRS } from './constants';
import { bindMouseEvents } from './helpers';

import AnimatedElement from './AnimatedElement';

export default stamp(React).compose(AnimatedElement, {

  displayName: 'Rect',

  propTypes: {
    x: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
    y: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
    width: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
  },

  getAttrNames() {
    return ['x', 'y', 'height', 'width'].concat(TWEENABLE_SVG_PRESENTATION_ATTRS);
  },

  render() {
    return (
      <rect {...this.state} style={this.getStyle(this.props)} {...bindMouseEvents(this.props)} />
    );
  },

});
