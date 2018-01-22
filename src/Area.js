import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Area extends Component {

  constructor(props) {
    super(props);
    this.displayName = 'Area';
  }

  render() {
    return 'TODO';
  }

  // getArea() {
  //   let area = d3Shape.area();
  //   ['innerRadius', 'outerRadius', 'startAngle', 'endAngle'].forEach((key) => {
  //     if (itsSet(this.props[key])) area = area[key](this.props[key]);
  //   });
  //   return area;
  // },

}

Area.propTypes = {
  x: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.func,
  ]),
  x0: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.func,
  ]),
  x1: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.func,
  ]),
  y: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.func,
  ]),
  y0: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.func,
  ]),
  y1: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.func,
  ]),
  defined: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.func,
  ]),
  curve: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.func,
  ]),
  context: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.func,
  ]),
  lineX0: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.func,
  ]),
  lineY0: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.func,
  ]),
  lineX1: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.func,
  ]),
  lineY1: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.func,
  ]),
};
