(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-stamp'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-stamp'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStamp);
    global.Area = mod.exports;
  }
})(this, function (exports, _react, _reactStamp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactStamp2 = _interopRequireDefault(_reactStamp);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _reactStamp2.default)(_react2.default).compose({

    displayName: 'Area',

    propTypes: {
      x: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
      x0: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
      x1: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
      y: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
      y0: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
      y1: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
      defined: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
      curve: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
      context: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
      lineX0: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
      lineY0: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
      lineX1: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
      lineY1: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func])
    },

    render: function render() {
      return 'TODO';
    }
  });
});