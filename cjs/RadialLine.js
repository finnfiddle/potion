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
    global.RadialLine = mod.exports;
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

    displayName: 'RadialLine',

    propTypes: {
      // angle,
      // radius,
      // defined,
      // curve,
    },

    render: function render() {
      return 'TODO';
    }
  });
});