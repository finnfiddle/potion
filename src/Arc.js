import React, { PropTypes } from 'react';
import { arc } from 'd3-shape';
import itsSet from 'its-set';

import { TWEENABLE_SVG_PRESENTATION_ATTRS } from './constants';
import { bindMouseEvents } from './helpers';
import AnimatedElement from './mixins/AnimatedElement';

export default class Arc extends AnimatedElement {

  constructor(props) {
    super(props);
    this.displayName = 'Arc';
  }

  getAttrNames() {
    return TWEENABLE_SVG_PRESENTATION_ATTRS;
  }

  getPrivatePropNames() {
    return ['innerRadius', 'outerRadius', 'startAngle', 'endAngle'];
  }

  getDerivedAttrNames() {
    return ['d'];
  }

  getDerivedAttrInputNames() {
    return {
      d: ['innerRadius', 'outerRadius', 'startAngle', 'endAngle'],
    };
  }

  getDerivationMethod(key, props, shouldGetDatum) {
    switch (key) {
      case 'd':
        return datum => {
          let derivationMethod = arc();
          const attrInputNames = this.derivedAttrInputNames[key];
          const attrValues = this.getAttrs(
            Object.assign({}, props, { datum }),
            attrInputNames,
            shouldGetDatum
          );
          attrInputNames.forEach(attrName => {
            if (itsSet(props[attrName])) {
              derivationMethod = derivationMethod[attrName](attrValues[attrName]);
            }
          });
          return derivationMethod();
        };
      // no default
    }
  }

  render() {
    return (
      <path {...this.state} style={this.getStyle(this.props)} {...bindMouseEvents(this.props)} />
    );
  }

}

Arc.propTypes = {
  innerRadius: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.func,
  ]),
  outerRadius: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.func,
  ]),
  startAngle: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.func,
  ]),
  endAngle: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.func,
  ]),
};

Arc.defaultProps = Object.assign({}, AnimatedElement.defaultProps, {
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
});
