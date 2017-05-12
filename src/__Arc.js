import React, { PropTypes } from 'react';
import stamp from 'react-stamp';
import { arc } from 'd3-shape';
import itsSet from 'its-set';
import isFunction from 'lodash/isFunction';

import SelectSelfMixin from './mixins/SelectSelfMixin';
import AnimatedElement from './AnimatedElement';

export default stamp(React).compose(SelectSelfMixin, AnimatedElement, {

  displayName: 'Arc',

  getAttrNames() {
    return ['fill', 'opacity'];
  },

  getGeneratedAttrNames() {
    return ['d'];
  },

  getPropNamesForGenerators() {
    return ['innerRadius', 'outerRadius', 'startAngle', 'endAngle'];
  },

  render() {
    return (
      <path {...this.state} />
    );
  },

  getGenerator(attrName) {
    let generator = () => {};
    switch (attrName) {
    case 'd':
      return props => {
        generator = arc();
        this.getPropNamesForGenerators().forEach(attrName => {
          if (itsSet(props[attrName])) {
            generator = generator[attrName](this.getValue(attrName, props));
          }
        });
        return generator(props);
      };
    }
  },

});
