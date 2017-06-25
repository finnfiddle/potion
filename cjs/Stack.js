(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-stamp', 'd3-shape', 'its-set'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-stamp'), require('d3-shape'), require('its-set'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStamp, global.d3Shape, global.itsSet);
    global.Stack = mod.exports;
  }
})(this, function (exports, _react, _reactStamp, _d3Shape, _itsSet) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactStamp2 = _interopRequireDefault(_reactStamp);

  var _d3Shape2 = _interopRequireDefault(_d3Shape);

  var _itsSet2 = _interopRequireDefault(_itsSet);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _reactStamp2.default)(_react2.default).compose({

    displayName: 'Stack',

    propTypes: {
      // name
      // keys
      // value
      // order
      // offset
    },

    render: function render() {
      return 'TODO';
      // const { children, name, data } = this.props;
      // const stackData = this.getStack(data);
      //
      // return Children.map(children, child =>
      //   cloneElement(child, { [name]: stackData }),
      // );
    },
    getStack: function getStack() {
      var _this = this;

      var stack = _d3Shape2.default.stack();
      ['keys', 'value', 'order', 'offset'].forEach(function (key) {
        if ((0, _itsSet2.default)(_this.props[key])) stack = stack[key](_this.props[key]);
      });
      return stack;
    }
  });
});