(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-stamp', 'its-set', 'd3-shape'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-stamp'), require('its-set'), require('d3-shape'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStamp, global.itsSet, global.d3Shape);
    global.RadialArea = mod.exports;
  }
})(this, function (exports, _react, _reactStamp, _itsSet, _d3Shape) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactStamp2 = _interopRequireDefault(_reactStamp);

  var _itsSet2 = _interopRequireDefault(_itsSet);

  var _d3Shape2 = _interopRequireDefault(_d3Shape);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

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
});