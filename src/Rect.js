import React, { PropTypes } from 'react';
import stamp from 'react-stamp';

import SelectSelfMixin from './mixins/SelectSelfMixin';
import Shape from './Shape';

export default stamp(React).compose(SelectSelfMixin, Shape, {

  displayName: 'Rect',

  getAttrNames() {
    return ['x', 'y', 'height', 'width', 'fill', 'opacity'];
  },

  render() {
    return (
      <rect {...this.state} />
    );
  },

});
