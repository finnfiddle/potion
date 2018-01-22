import React, { Children, cloneElement, Component } from 'react';
import PropTypes from 'prop-types';

import { isFunction } from './helpers';
import TransitionGroup from './TransitionGroup';

export default class Collection extends Component {

  constructor(props) {
    super(props);
    this.displayName = 'Collection';
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
      <TransitionGroup>
        {this.renderChildren()}
      </TransitionGroup>
    );
  }

}

Collection.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.func,
  ]),
  children: PropTypes.node,
};
