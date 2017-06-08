import React, { PropTypes } from 'react';
import stamp from 'react-stamp';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import { bindMouseEvents } from './helpers';

export default stamp(React).compose({

  displayName: 'TransitionGroup',

  propTypes: {
    // component
  },

  defaultProps: {
    component: 'g',
  },

  render() {
    const { children, ...restProps } = this.props;
    return (
      <TransitionGroup {...restProps} {...bindMouseEvents(this.props)}>
        {children}
      </TransitionGroup>
    );
  },

});
