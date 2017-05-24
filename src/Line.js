import React, { PropTypes } from 'react';
import stamp from 'react-stamp';

import AnimatedElement from './AnimatedElement';

export default stamp(React).compose(AnimatedElement, {

  displayName: 'Line',

  getAttrNames() {
    return ['x1', 'x2', 'y1', 'y2', 'stroke', 'strokeWidth'];
  },

  render() {
    const { didEnter, ...restState } = this.state;
    const { className } = this.props;
    return (
      <line {...restState} className={className} />
    );
  },

});
