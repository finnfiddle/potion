import { Component } from 'react';
// import itsSet from 'its-set';
// import d3Shape from 'd3-shape';

export default class RadialArea extends Component {

  constructor(props) {
    super(props);
    this.displayName = 'RadialArea';
  }

  render() {
    return 'TODO';
    // return (
    //   <path d={this.getRadialArea()()} />
    // );
  }

  // getRadialArea() {
  //   let radialArea = d3Shape.radialArea();
  //   [
  //     'angle',
  //     'startAngle',
  //     'endAngle',
  //     'radius',
  //     'innerRadius',
  //     'outerRadius',
  //     'defined',
  //     'curve',
  //     'lineStartAngle',
  //     'lineInnerRadius',
  //     'lineEndAngle',
  //     'lineOuterRadius',
  //   ].forEach((key) => {
  //     if (itsSet(this.props[key])) radialArea = radialArea[key](this.props[key]);
  //   });
  //   return radialArea;
  // },

}

RadialArea.propTypes = {
  // angle,
  // startAngle,
  // endAngle,
  // radius,
  // innerRadius,
  // outerRadius,
  // defined,
  // curve,
  // lineStartAngle,
  // lineInnerRadius,
  // lineEndAngle,
  // lineOuterRadius,
};
