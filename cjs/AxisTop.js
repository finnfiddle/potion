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

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var AxisBottom = function (_Component) {
    _inherits(AxisBottom, _Component);

    function AxisBottom() {
      _classCallCheck(this, AxisBottom);

      return _possibleConstructorReturn(this, (AxisBottom.__proto__ || Object.getPrototypeOf(AxisBottom)).apply(this, arguments));
    }

    _createClass(AxisBottom, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(_Axis2.default, _extends({}, this.props, { placement: 'top' }));
      }
    }]);

    return AxisBottom;
  }(_react.Component);

  exports.default = AxisBottom;
});