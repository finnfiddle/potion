import PropTypes from 'prop-types';
import { arc } from 'd3-shape';
import itsSet from 'its-set';

import { TWEENABLE_SVG_PRESENTATION_ATTRS } from './constants';
import Element from './Element';

export default class Arc extends Element {

  static defaultProps = {
    ...Element.defaultProps,
    component: 'path',
    displayName: 'Arc',
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0,
  }

  static propTypes = {
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

  getDerivationMethod(key, props) {
    switch (key) {
      case 'd':
        return datum => {
          let derivationMethod = arc();
          const attrInputNames = this.derivedAttrInputNames[key];
          const attrValues = this.getAttr({ ...props, datum }, attrInputNames);
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
    return this.state.el;
  }

}
