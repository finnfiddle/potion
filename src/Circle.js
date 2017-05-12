import React, { PropTypes } from 'react';
import stamp from 'react-stamp';

import AnimatedElement from './AnimatedElement';

export default stamp(React).compose(AnimatedElement, {

  displayName: 'Circle',

  getAttrNames() {
    return ['cx', 'cy', 'fill', 'stroke', 'r'];
  },

  render() {
    const { didEnter, ...restState } = this.state;
    return (
      <circle {...restState} />
    );
  },

});
