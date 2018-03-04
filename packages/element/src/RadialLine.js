import { Component } from 'react';
// import itsSet from 'its-set';
// import d3Shape from 'd3-shape';
//
// import { bindMouseEvents } from '@potion/util';

export default class RadialLine extends Component {

  constructor(props) {
    super(props);
    this.displayName = 'RadialLine';
  }

  render() {
    return 'TODO';
  }

  // getLine() {
  //   let line = d3Shape.radialLine();
  //   ['angle', 'radius', 'defined', 'curve'].forEach((key) => {
  //     if (itsSet(this.props[key])) line = line[key](this.props[key]);
  //   });
  //   return line;
  // },

}

RadialLine.propTypes = {
  // angle,
  // radius,
  // defined,
  // curve,
};
