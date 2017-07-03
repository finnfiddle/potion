(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', './constants', './helpers', './mixins/AnimatedElement'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('./constants'), require('./helpers'), require('./mixins/AnimatedElement'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.constants, global.helpers, global.AnimatedElement);
    global.Text = mod.exports;
  }
})(this, function (exports, _react, _constants, _helpers, _AnimatedElement2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

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

  var Text = function (_AnimatedElement) {
    _inherits(Text, _AnimatedElement);

    function Text(props) {
      _classCallCheck(this, Text);

      var _this = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, props));

      _this.displayName = 'Text';
      return _this;
    }

    _createClass(Text, [{
      key: 'getAttrNames',
      value: function getAttrNames() {
        return ['dx', 'dy'].concat(_constants.TWEENABLE_SVG_PRESENTATION_ATTRS);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'text',
          _extends({}, this.state, { style: this.getStyle(this.props) }, (0, _helpers.bindMouseEvents)(this.props)),
          this.props.children
        );
      }
    }]);

    return Text;
  }(_AnimatedElement3.default);

  exports.default = Text;


  Text.propTypes = {
    dx: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
    dy: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func])
  };
});