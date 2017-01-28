import React, { PropTypes, Children, cloneElement } from 'react';
import stamp from 'react-stamp';
import ReactTransitionGroup from 'react-addons-transition-group';

export default stamp(React).compose({

  displayName: 'Collection',

  propTypes: {
    // data required
  },

  render() {
    return (
      <ReactTransitionGroup component='g'>
        {this.renderChildren()}
      </ReactTransitionGroup>
    );
  },

  renderChildren() {
    const { data, children } = this.props;
    return data.reduce((acc, datum, index) =>
      acc.concat(Children.map(children, (child, c) =>
        cloneElement(child, { datum, index, key: `${index}_${c}`, _key: `${index}_${c}` })
      ))
    , []);
  },

});
