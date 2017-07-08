import React, { cloneElement, Children, PropTypes } from 'react';
import itsSet from 'its-set';
import get from 'utils-deep-get';

import { bindMouseEvents, isFunction } from './helpers';
import TransitionGroup from './TransitionGroup';
import AnimatedElement from './mixins/AnimatedElement';

export default class Group extends AnimatedElement {

  constructor(props) {
    super(props);
    this.displayName = 'Group';
  }

  getDerivedAttrNames() {
    return ['transform'];
  }

  getDerivedAttrInputNames() {
    return {
      transform: ['x', 'y', 'rotation', 'rotationOriginX', 'rotationOriginY'],
    };
  }

  getAttrDefaults() {
    return {
      x: 0,
      y: 0,
      rotation: 0,
      rotationOriginX: 0,
      rotationOriginY: 0,
    };
  }

  getDerivationMethod(key, props, shouldGetDatum) {
    switch (key) {
      case 'transform':
        return datum => {
          const attrInputNames = this.derivedAttrInputNames[key];
          const {
            x,
            y,
            rotation,
            rotationOriginX,
            rotationOriginY,
          } = this.getAttrs(Object.assign({}, props, { datum }), attrInputNames, shouldGetDatum);
          return `translate(${x}, ${y}) rotate(${rotation}, ${rotationOriginX}, ${rotationOriginY})`; // eslint-disable-line max-len
        };
      // no default
    }
  }

  renderChildren() {
    const { datum, data, index, children, enterDatum, exitDatum } = this.props;
    return Children.map(children, child => {
      if (!itsSet(child)) return null;
      const props = (child !== null && isFunction(get(child, 'type'))) ?
        Object.assign({ datum, data, index, enterDatum, exitDatum }, child.props) :
        child.props;
      return cloneElement(child, props);
    });
  }

  render() {
    const style = this.getStyle(this.props);
    return (
      <TransitionGroup style={style} {...bindMouseEvents(this.props)}>
        {this.renderChildren()}
      </TransitionGroup>
    );
  }
}

Group.propTypes = {
  x: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
  y: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
  rotation: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
  rotationOriginX: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
  rotationOriginY: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
};

Group.defaultProps = Object.assign({}, AnimatedElement.defaultProps, {
  x: 0,
  y: 0,
  rotation: 0,
  rotationOriginX: 0,
  rotationOriginY: 0,
});
