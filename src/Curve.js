import React, { PropTypes } from 'react';
import stamp from 'react-stamp';
// import itsSet from 'its-set';
// import d3Shape from 'd3-shape';
//
// import { bindMouseEvents } from './helpers';

export default stamp(React).compose({

  displayName: 'Curve',

  propTypes: {
    // x,
    // y,
    // defined,
    // curve,
  },

  render() {
    return 'TODO';
  },

  // getLine() {
  //   let line = d3Shape.line();
  //   ['x', 'y', 'defined', 'curve'].forEach((key) => {
  //     if (itsSet(this.props[key])) line = line[key](this.props[key]);
  //   });
  //   return line;
  // },

});
