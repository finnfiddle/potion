import React, { PropTypes } from 'react';
import stamp from 'react-stamp';

import SelectSelfMixin from './mixins/SelectSelfMixin';
import AnimatedElement from './AnimatedElement';

export default stamp(React).compose(SelectSelfMixin, AnimatedElement, {

  displayName: 'Rect',

  getAttrNames() {
    return ['x', 'y', 'height', 'width', 'fill', 'opacity'];
  },

  render() {
    const { didEnter, ...restState } = this.state;
    return (
      <rect {...restState} />
    );
  },

});
