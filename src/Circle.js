import React, { PropTypes } from 'react';

import { TWEENABLE_SVG_PRESENTATION_ATTRS } from './constants';
import { bindMouseEvents } from './helpers';
import AnimatedElement from './mixins/AnimatedElement';

export default class Circle extends AnimatedElement {

  constructor(props) {
    super(props);
    this.displayName = 'Circle';
  }

  getAttrNames() {
    return ['cx', 'cy', 'r'].concat(TWEENABLE_SVG_PRESENTATION_ATTRS);
  }

  render() {
    const { className } = this.props;
    return (
      <circle
        {...this.state}
        className={className}
        style={this.getStyle(this.props)}
        {...bindMouseEvents(this.props)}
      />
    );
  }

}

Circle.propTypes = {
  cx: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.func,
  ]),
  cy: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.func,
  ]),
  r: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.func,
  ]),
};

Circle.defaultProps = Object.assign({}, AnimatedElement.defaultProps);
