import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTransitionGroup from 'react-transition-group/TransitionGroup';

import { bindMouseEvents } from './util';

export default class TransitionGroup extends Component {

  static displayName = 'TransitionGroup';

  static propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    children: PropTypes.node,
  }

  static defaultProps = {
    component: 'g',
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
