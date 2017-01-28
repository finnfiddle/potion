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

  render: function render() {
    return _react2.default.createElement('path', { d: this.getArea()() });
  },
  getArea: function getArea() {
    var _this = this;

    var area = _d3Shape2.default.area();
    ['innerRadius', 'outerRadius', 'startAngle', 'endAngle'].forEach(function (key) {
      if ((0, _itsSet2.default)(_this.props[key])) area = area[key](_this.props[key]);
    });
    return area;
  }
});