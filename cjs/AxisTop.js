(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', './Axis'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('./Axis'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.Axis);
    global.AxisTop = mod.exports;
  }
})(this, function (exports, _react, _Axis) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _Axis2 = _interopRequireDefault(_Axis);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  exports.default = function (props) {
    return _react2.default.createElement(_Axis2.default, _extends({}, props, { placement: 'top' }));
  };
});