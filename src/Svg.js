import React from 'react';
import stamp from 'react-stamp';

import TransitionGroup from './TransitionGroup';

export default stamp(React).compose({

  displayName: 'Svg',

  render() {
    return (
      <svg {...this.props}>
        <TransitionGroup>
          {this.props.children}
        </TransitionGroup>
      </svg>
    );
  },

});
