import React from 'react';
import stamp from 'react-stamp';
import itsSet from 'its-set';
import d3Shape from 'd3-shape';

export default stamp(React).compose({

  displayName: 'Area',

  propTypes: {
    // x,
    // x0,
    // x1,
    // y,
    // y0,
    // y1,
    // defined,
    // curve,
    // context,
    // lineX0,
    // lineY0,
    // lineX1,
    // lineY1,
  },

  render() {
    return (
      <path d={this.getArea()()} />
    );
  },

  getArea() {
    let area = d3Shape.area();
    ['innerRadius', 'outerRadius', 'startAngle', 'endAngle'].forEach((key) => {
      if (itsSet(this.props[key])) area = area[key](this.props[key]);
    });
    return area;
  },

});
