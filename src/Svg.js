import React, { PropTypes } from 'react';
import stamp from 'react-stamp';

import { bindMouseEvents } from './helpers';
import TransitionGroup from './TransitionGroup';
import AnimatedElement from './AnimatedElement';

export default stamp(React).compose(AnimatedElement, {

  displayName: 'Svg',

  render() {
    return (
      <svg {...this.props} style={this.getStyle(this.props)} {...bindMouseEvents(this.props)}>
        <TransitionGroup>
          {this.props.children}
        </TransitionGroup>
      </svg>
    );
  },

});
