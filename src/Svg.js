import React from 'react';
import PropTypes from 'prop-types';
import deepEqual from 'deep-equal';

import { TWEENABLE_SVG_PRESENTATION_ATTRS } from './constants';
import { bindMouseEvents } from './util';
import TransitionGroup from './TransitionGroup';
import AnimatedElement from './mixins/AnimatedElement';

export default class Svg extends AnimatedElement {

  constructor(props) {
    super(props);
    this.displayName = 'Svg';
  }

  componentDidMount() {
    this.addPatterns(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (!deepEqual(this.props.patterns, nextProps.patterns)) {
      this.addPatterns(nextProps);
    }
    super.componentWillReceiveProps(nextProps);
  }

  getAttrNames() {
    return ['width', 'height'].concat(TWEENABLE_SVG_PRESENTATION_ATTRS);
  }

  getPrivatePropNames() {
    return ['patterns'];
  }

  addPatterns(props) {
    // const selection = this.selectSelf();
    // props.patterns.forEach(pattern => {
    //   selection.call(pattern);
    // });
  }

  render() {
    return (
      <this.props.component
        {...this.state}
        style={this.getStyle(this.props)}
        {...bindMouseEvents(this.props)}
      >
        <TransitionGroup>
          {this.props.children}
        </TransitionGroup>
      </this.props.component>
    );
  }

}

Svg.propTypes = {
  patterns: PropTypes.array,
};

Svg.defaultProps = Object.assign({
  patterns: [],
  component: 'svg',
}, AnimatedElement.defaultProps);
