(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-stamp', './helpers', './TransitionGroup', './AnimatedElement'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-stamp'), require('./helpers'), require('./TransitionGroup'), require('./AnimatedElement'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStamp, global.helpers, global.TransitionGroup, global.AnimatedElement);
    global.Svg = mod.exports;
  }
})(this, function (exports, _react, _reactStamp, _helpers, _TransitionGroup, _AnimatedElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactStamp2 = _interopRequireDefault(_reactStamp);

  var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

  var _AnimatedElement2 = _interopRequireDefault(_AnimatedElement);

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

  exports.default = (0, _reactStamp2.default)(_react2.default).compose(_AnimatedElement2.default, {

    displayName: 'Svg',

    render: function render() {
      return _react2.default.createElement(
        'svg',
        _extends({}, this.state, { style: this.getStyle(this.props) }, (0, _helpers.bindMouseEvents)(this.props)),
        _react2.default.createElement(
          _TransitionGroup2.default,
          null,
          this.props.children
        )
      );
    }
  });
});