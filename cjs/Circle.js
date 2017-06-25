(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-stamp', './constants', './helpers', './AnimatedElement'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-stamp'), require('./constants'), require('./helpers'), require('./AnimatedElement'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStamp, global.constants, global.helpers, global.AnimatedElement);
    global.Circle = mod.exports;
  }
})(this, function (exports, _react, _reactStamp, _constants, _helpers, _AnimatedElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactStamp2 = _interopRequireDefault(_reactStamp);

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

    displayName: 'Circle',

    propTypes: {
      cx: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
      cy: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
      r: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func])
    },

    getAttrNames: function getAttrNames() {
      return ['cx', 'cy', 'r'].concat(_constants.TWEENABLE_SVG_PRESENTATION_ATTRS);
    },
    render: function render() {
      var className = this.props.className;

      return _react2.default.createElement('circle', _extends({}, this.state, {
        className: className,
        style: this.getStyle(this.props)
      }, (0, _helpers.bindMouseEvents)(this.props)));
    }
  });
});