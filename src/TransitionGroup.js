import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTransitionGroup from 'react-transition-group/TransitionGroup';

import { bindMouseEvents } from './helpers';

export default class TransitionGroup extends Component {

  constructor(props) {
    super(props);
    this.displayName = 'TransitionGroup';
  }

  render() {
    const { children, ...restProps } = this.props;
    return (
      <ReactTransitionGroup {...restProps} {...bindMouseEvents(this.props)}>
        {children}
      </ReactTransitionGroup>
    );
  }

}

TransitionGroup.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  children: PropTypes.node,
};

TransitionGroup.defaultProps = {
  component: 'g',
};
