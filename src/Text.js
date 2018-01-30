import React from 'react';
import PropTypes from 'prop-types';

import { TWEENABLE_SVG_PRESENTATION_ATTRS } from './constants';
import { bindMouseEvents } from './util';
import AnimatedElement from './mixins/AnimatedElement';

export default class Text extends AnimatedElement {

  constructor(props) {
    super(props);
    this.displayName = 'Text';
  }

  getAttrNames() {
    return ['dx', 'dy'].concat(TWEENABLE_SVG_PRESENTATION_ATTRS);
  }

  render() {
    return (
      <text {...this.state} style={this.getStyle(this.props)} {...bindMouseEvents(this.props)}>
        {this.props.children}
      </text>
    );
  }

}

Text.propTypes = {
  dx: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  dy: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
};

Text.defaultProps = Object.assign({}, AnimatedElement.defaultProps);
