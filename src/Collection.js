import React, { Children, cloneElement, Component } from 'react';
import PropTypes from 'prop-types';

import { isFunction } from './util';
import TransitionGroup from './TransitionGroup';

export default class Collection extends Component {

  static displayName = 'Collection';

  static propTypes = {
    data: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.func,
    ]),
    children: PropTypes.node,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  }

  renderChildren() {
    const { data, children } = this.props;
    const resolvedData = isFunction(data) ? data(this.props) : data;
    return resolvedData.reduce((acc, datum, index) =>
      acc.concat(Children.map(children, (child, c) =>
        cloneElement(child, {
          datum,
          index,
          data: resolvedData,
          key: `${index}_${c}`,
          _key: `${index}_${c}`,
        })
      ))
    , []);
  }

  render() {
    return (
      <TransitionGroup component={this.props.component}>
        {this.renderChildren()}
      </TransitionGroup>
    );
  }

}
