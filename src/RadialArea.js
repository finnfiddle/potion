import React, { PropTypes } from 'react';
import stamp from 'react-stamp';
import itsSet from 'its-set';
import d3Shape from 'd3-shape';

export default stamp(React).compose({

  displayName: 'RadialArea',

  propTypes: {
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
  },

  render() {
    return (
      <path d={this.getRadialArea()()} />
    );
  },

  getRadialArea() {
    let radialArea = d3Shape.radialArea();
    [
      'angle',
      'startAngle',
      'endAngle',
      'radius',
      'innerRadius',
      'outerRadius',
      'defined',
      'curve',
      'lineStartAngle',
      'lineInnerRadius',
      'lineEndAngle',
      'lineOuterRadius',
    ].forEach((key) => {
      if (itsSet(this.props[key])) radialArea = radialArea[key](this.props[key]);
    });
    return radialArea;
  },

});
