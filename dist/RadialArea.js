'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStamp = require('react-stamp');

var _reactStamp2 = _interopRequireDefault(_reactStamp);

var _itsSet = require('its-set');

var _itsSet2 = _interopRequireDefault(_itsSet);

var _d3Shape = require('d3-shape');

var _d3Shape2 = _interopRequireDefault(_d3Shape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStamp2.default)(_react2.default).compose({

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

  render: function render() {
    return 'TODO';
    // return (
    //   <path d={this.getRadialArea()()} />
    // );
  },
  getRadialArea: function getRadialArea() {
    var _this = this;

    var radialArea = _d3Shape2.default.radialArea();
    ['angle', 'startAngle', 'endAngle', 'radius', 'innerRadius', 'outerRadius', 'defined', 'curve', 'lineStartAngle', 'lineInnerRadius', 'lineEndAngle', 'lineOuterRadius'].forEach(function (key) {
      if ((0, _itsSet2.default)(_this.props[key])) radialArea = radialArea[key](_this.props[key]);
    });
    return radialArea;
  }
});