import React, { PropTypes, Children, cloneElement } from 'react';
import stamp from 'react-stamp';
// import ReactTransitionGroup from 'react-addons-transition-group';
import TransitionGroup from 'react-transition-group/TransitionGroup';

export default stamp(React).compose({

  displayName: 'Collection',

  propTypes: {
    // data required
  },

  render() {
    return (
      <TransitionGroup component='g'>
        {this.renderChildren()}
      </TransitionGroup>
    );
  },

  renderChildren() {
    const { data, children } = this.props;
    return data.reduce((acc, datum, index) =>
      acc.concat(Children.map(children, (child, c) =>
        cloneElement(child, { datum, index, data, key: `${index}_${c}`, _key: `${index}_${c}` })
      ))
    , []);
  },

});
