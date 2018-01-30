import { Component } from 'react';
// import itsSet from 'its-set';
// import d3Shape from 'd3-shape';
//
// import { bindMouseEvents } from './util';

export default class Curve extends Component {

  constructor(props) {
    super(props);
    this.displayName = 'Curve';
  }

  render() {
    return 'TODO';
  }

  // getLine() {
  //   let line = d3Shape.line();
  //   ['x', 'y', 'defined', 'curve'].forEach((key) => {
  //     if (itsSet(this.props[key])) line = line[key](this.props[key]);
  //   });
  //   return line;
  // },

}

Curve.propTypes = {
  // x,
  // y,
  // defined,
  // curve,
};
