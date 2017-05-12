import React, { PropTypes } from 'react';
import stamp from 'react-stamp';

import AnimatedElement from './AnimatedElement';

export default stamp(React).compose(AnimatedElement, {

  displayName: 'Text',

  getAttrNames() {
    return [
      'x',
      'y',
      'dx',
      'dy',
      'textAnchor',
      'stroke',
      'transform',
      'fill',
      'alignmentBaseline',
      'dominantBaseline',
    ];
  },

  render() {
    const { didEnter, ...restState } = this.state;
    return (
      <text {...restState}>
        {this.props.children}
      </text>
    );
  },

});
