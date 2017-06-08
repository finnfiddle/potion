import React, { PropTypes } from 'react';
import stamp from 'react-stamp';

import { TWEENABLE_SVG_PRESENTATION_ATTRS } from './constants';
import { bindMouseEvents } from './helpers';
import AnimatedElement from './AnimatedElement';

export default stamp(React).compose(AnimatedElement, {

  displayName: 'Line',

  propTypes: {
    x1: PropTypes.oneOfType([PropTypes.func, PropTypes.number]).isRequired,
    x2: PropTypes.oneOfType([PropTypes.func, PropTypes.number]).isRequired,
    y1: PropTypes.oneOfType([PropTypes.func, PropTypes.number]).isRequired,
    y2: PropTypes.oneOfType([PropTypes.func, PropTypes.number]).isRequired,
  },

  getAttrNames() {
    return ['x1', 'x2', 'y1', 'y2'].concat(TWEENABLE_SVG_PRESENTATION_ATTRS);
  },

  render() {
    const { className } = this.props;
    return (
      <line
        {...this.state}
        className={className}
        style={this.getStyle(this.props)}
        {...bindMouseEvents(this.props)}
      />
    );
  },

});
