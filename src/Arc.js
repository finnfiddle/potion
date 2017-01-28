import React, { PropTypes } from 'react';
import stamp from 'react-stamp';
import { arc } from 'd3-shape';
import itsSet from 'its-set';
import isFunction from 'lodash/isFunction';

import SelectSelfMixin from './mixins/SelectSelfMixin';
import Shape from './Shape';

export default stamp(React).compose(SelectSelfMixin, Shape, {

  displayName: 'Arc',

  getAttrNames() {
    return ['fill', 'opacity'];
  },

  getGeneratedAttrNames() {
    return ['d'];
  },

  render() {
    return (
      <path {...this.state} />
    );
  },

  getGenerator(attrName) {
    switch (attrName) {
    case 'd':
      let generator = arc();
      ['innerRadius', 'outerRadius', 'startAngle', 'endAngle'].forEach((attrName) => {
        if (itsSet(this.props[attrName])) {
          generator = generator[attrName](this.getValue(this.props[attrName]));
        }
      });
      return props => generator(props);
    }
  },

  getValue(value) {
    const { datum, index } = this.props;
    if (isFunction(value)) return value(datum, index);
    return value;
  },

});
