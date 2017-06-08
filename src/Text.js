import React, { PropTypes } from 'react';
import stamp from 'react-stamp';

import { TWEENABLE_SVG_PRESENTATION_ATTRS } from './constants';
import { bindMouseEvents } from './helpers';
import AnimatedElement from './AnimatedElement';

export default stamp(React).compose(AnimatedElement, {

  displayName: 'Text',

  propTypes: {
    dx: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    dy: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  },

  getAttrNames() {
    return ['dx', 'dy'].concat(TWEENABLE_SVG_PRESENTATION_ATTRS);
  },

  render() {
    return (
      <text {...this.state} style={this.getStyle(this.props)} {...bindMouseEvents(this.props)}>
        {this.props.children}
      </text>
    );
  },

});
