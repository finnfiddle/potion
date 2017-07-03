import React, { PropTypes, Children, cloneElement, Component } from 'react';

import TransitionGroup from './TransitionGroup';

export default class Collection extends Component {

  constructor(props) {
    super(props);
    this.displayName = 'Collection';
  }

  renderChildren() {
    const { data, children } = this.props;
    return data.reduce((acc, datum, index) =>
      acc.concat(Children.map(children, (child, c) =>
        cloneElement(child, { datum, index, data, key: `${index}_${c}`, _key: `${index}_${c}` })
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
  data: PropTypes.array.isRequired,
  children: PropTypes.node,
};
