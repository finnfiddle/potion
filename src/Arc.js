import React, { PropTypes } from 'react';
import stamp from 'react-stamp';
import { arc } from 'd3-shape';
import itsSet from 'its-set';
import isFunction from 'lodash/isFunction';

import AnimatedElement from './AnimatedElement';

export default stamp(React).compose(AnimatedElement, {

  displayName: 'Arc',

  getAttrNames() {
    return ['fill', 'stroke', 'strokeWidth'];
  },

  getDerivedAttrNames() {
    return ['d'];
  },

  getDerivedAttrInputNames() {
    return {
      d: ['innerRadius', 'outerRadius', 'startAngle', 'endAngle'],
    };
  },

  getDerivationMethod(key, props) {
    const { datum, index, value } = props;
    switch (key) {
    case 'd':
      return datum => {
        let derivationMethod = arc();
        const attrInputNames = this.derivedAttrInputNames[key];
        const attrValues = this.getAttrs(Object.assign({}, props, { datum }), attrInputNames);
        attrInputNames.forEach(attrName => {
          if (itsSet(props[attrName])) {
            derivationMethod = derivationMethod[attrName](attrValues[attrName]);
          }
        });
        return derivationMethod();
      };
    };
  },

  render() {
    const { didEnter, ...restState } = this.state;
    return (
      <path {...restState} />
    );
  },

});
