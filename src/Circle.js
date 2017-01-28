import React, { PropTypes } from 'react';
import stamp from 'react-stamp';

import SelectSelfMixin from './mixins/SelectSelfMixin';
import Shape from './Shape';

export default stamp(React).compose(SelectSelfMixin, Shape, {

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
