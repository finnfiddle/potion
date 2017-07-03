(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.Area = mod.exports;
  }
})(this, function (exports, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

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

  var Area = function (_Component) {
    _inherits(Area, _Component);

    function Area(props) {
      _classCallCheck(this, Area);

      var _this = _possibleConstructorReturn(this, (Area.__proto__ || Object.getPrototypeOf(Area)).call(this, props));

      _this.displayName = 'Area';
      return _this;
    }

    _createClass(Area, [{
      key: 'render',
      value: function render() {
        return 'TODO';
      }
    }]);

    return Area;
  }(_react.Component);

  exports.default = Area;


  Area.propTypes = {
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
  };
});