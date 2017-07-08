import React from 'react';

import { bindMouseEvents } from './helpers';
import TransitionGroup from './TransitionGroup';
import AnimatedElement from './mixins/AnimatedElement';

export default class Svg extends AnimatedElement {

  constructor(props) {
    super(props);
    this.displayName = 'Svg';
  }

  render() {
    return (
      <svg {...this.state} style={this.getStyle(this.props)} {...bindMouseEvents(this.props)}>
        <TransitionGroup>
          {this.props.children}
        </TransitionGroup>
      </svg>
    );
  }

}

Svg.defaultProps = Object.assign({}, AnimatedElement.defaultProps);
