(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', './helpers', './TransitionGroup', './mixins/AnimatedElement'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('./helpers'), require('./TransitionGroup'), require('./mixins/AnimatedElement'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.helpers, global.TransitionGroup, global.AnimatedElement);
    global.Svg = mod.exports;
  }
})(this, function (exports, _react, _helpers, _TransitionGroup, _AnimatedElement2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

  var _AnimatedElement3 = _interopRequireDefault(_AnimatedElement2);

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

  var Svg = function (_AnimatedElement) {
    _inherits(Svg, _AnimatedElement);

    function Svg(props) {
      _classCallCheck(this, Svg);

      var _this = _possibleConstructorReturn(this, (Svg.__proto__ || Object.getPrototypeOf(Svg)).call(this, props));

      _this.displayName = 'Svg';
      return _this;
    }

    _createClass(Svg, [{
      key: 'render',
      value: function render() {
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
    }]);

    return Svg;
  }(_AnimatedElement3.default);

  exports.default = Svg;


  Svg.defaultProps = Object.assign({}, _AnimatedElement3.default.defaultProps);
});