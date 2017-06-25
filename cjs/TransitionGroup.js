(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-stamp', 'react-transition-group/TransitionGroup', './helpers'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-stamp'), require('react-transition-group/TransitionGroup'), require('./helpers'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStamp, global.TransitionGroup, global.helpers);
    global.TransitionGroup = mod.exports;
  }
})(this, function (exports, _react, _reactStamp, _TransitionGroup, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactStamp2 = _interopRequireDefault(_reactStamp);

  var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

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

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

  exports.default = (0, _reactStamp2.default)(_react2.default).compose({

    displayName: 'TransitionGroup',

    propTypes: {
      component: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string])
    },

    defaultProps: {
      component: 'g'
    },

    render: function render() {
      var _props = this.props,
          children = _props.children,
          restProps = _objectWithoutProperties(_props, ['children']);

      return _react2.default.createElement(
        _TransitionGroup2.default,
        _extends({}, restProps, (0, _helpers.bindMouseEvents)(this.props)),
        children
      );
    }
  });
});