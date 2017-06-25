(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-dom', 'react-stamp', 'd3-selection'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-dom'), require('react-stamp'), require('d3-selection'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactDom, global.reactStamp, global.d3Selection);
    global.SelectSelfMixin = mod.exports;
  }
})(this, function (exports, _react, _reactDom, _reactStamp, _d3Selection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _reactStamp2 = _interopRequireDefault(_reactStamp);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _reactStamp2.default)(_react2.default).compose({
    selectSelf: function selectSelf() {
      return (0, _d3Selection.select)(_reactDom2.default.findDOMNode(this));
    }
  });
});