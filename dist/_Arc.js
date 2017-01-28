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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStamp2.default)(_react2.default).compose({

  displayName: 'Arc',

  propTypes: {
    // innerRadius
    // outerRadius
    // startAngle
    // endAngle
  },

  componentWillReceiveProps: function componentWillReceiveProps() {
    // if new whitelisted props
    // take control from react
    // get the differences
    // set up an interpolator for each
    // do a transition with attrTween that uses the interploator to generate arcs
    // remember to cancel transition if componentWillUnmount
  },
  render: function render() {
    return _react2.default.createElement('path', { d: this.getArc()() });
  },
  getArc: function getArc() {
    var _this = this;

    var a = (0, _d3Shape.arc)();
    ['innerRadius', 'outerRadius', 'startAngle', 'endAngle'].forEach(function (key) {
      if ((0, _itsSet2.default)(_this.props[key])) a = a[key](_this.props[key]);
    });
    return a;
  }
});