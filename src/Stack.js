import React, { Children, cloneElement, PropTypes } from 'react';
import stamp from 'react-stamp';
import d3Shape from 'd3-shape';
import itsSet from 'its-set';

export default stamp(React).compose({

  displayName: 'Stack',

  propTypes: {
    // name
    // keys
    // value
    // order
    // offset
  },

  render() {
    return 'TODO';
    // const { children, name, data } = this.props;
    // const stackData = this.getStack(data);
    //
    // return Children.map(children, child =>
    //   cloneElement(child, { [name]: stackData }),
    // );
  },

  getStack() {
    let stack = d3Shape.stack();
    [
      'keys',
      'value',
      'order',
      'offset',
    ].forEach((key) => {
      if (itsSet(this.props[key])) stack = stack[key](this.props[key]);
    });
    return stack;
  },

});
