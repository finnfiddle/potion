import React, { PropTypes } from 'react';
import stamp from 'react-stamp';
import { arc } from 'd3-shape';
import itsSet from 'its-set';
import isFunction from 'lodash/isFunction';

import Shape from './Shape';

export default stamp(React).compose(Shape, {

  displayName: 'Arc',

  getAttrNames() {
    return ['fill'];
  },

  getDerivedAttrNames() {
    return ['d'];
  },

  getDerivedAttr(key) {
    switch (key) {
    case 'd':
      return props => {
        let generator = arc();
        ['innerRadius', 'outerRadius', 'startAngle', 'endAngle'].forEach(attrName => {
          if (itsSet(props[attrName])) {
            generator = generator[attrName](this.getValue(attrName, props));
          }
        });
        return generator(props);
      };
    };
  },

  render() {
    return (
      <path {...this.state} />
    );
  },

});
