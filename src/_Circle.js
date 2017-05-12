import React, { PropTypes } from 'react';
import stamp from 'react-stamp';

import SelectSelfMixin from './mixins/SelectSelfMixin';
import AnimatedElement from './AnimatedElement';

export default stamp(React).compose(SelectSelfMixin, AnimatedElement, {

  displayName: 'Circle',

  getAttrNames() {
    return ['cx', 'cy', 'fill', 'opacity', 'r'];
  },

  render() {
    return (
      <circle {...this.state} />
    );
  },

});
