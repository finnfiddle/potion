import React, { PropTypes } from 'react';
import stamp from 'react-stamp';

import AnimatedElement from './AnimatedElement';

export default stamp(React).compose(AnimatedElement, {

  displayName: 'Rect',

  getAttrNames() {
    return ['x', 'y', 'height', 'width', 'fill', 'opacity', 'stroke', 'strokeWidth'];
  },

  render() {
    const { didEnter, ...restState } = this.state;
    return (
      <rect {...restState} />
    );
  },

});
