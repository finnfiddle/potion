(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'd3-shape', 'its-set', './constants', './helpers', './mixins/AnimatedElement'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('d3-shape'), require('its-set'), require('./constants'), require('./helpers'), require('./mixins/AnimatedElement'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.d3Shape, global.itsSet, global.constants, global.helpers, global.AnimatedElement);
    global.Arc = mod.exports;
  }
})(this, function (exports, _react, _d3Shape, _itsSet, _constants, _helpers, _AnimatedElement2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _itsSet2 = _interopRequireDefault(_itsSet);

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

  var Arc = function (_AnimatedElement) {
    _inherits(Arc, _AnimatedElement);

    function Arc(props) {
      _classCallCheck(this, Arc);

      var _this = _possibleConstructorReturn(this, (Arc.__proto__ || Object.getPrototypeOf(Arc)).call(this, props));

      _this.displayName = 'Arc';
      return _this;
    }

    _createClass(Arc, [{
      key: 'getAttrNames',
      value: function getAttrNames() {
        return _constants.TWEENABLE_SVG_PRESENTATION_ATTRS;
      }
    }, {
      key: 'getPrivatePropNames',
      value: function getPrivatePropNames() {
        return ['innerRadius', 'outerRadius', 'startAngle', 'endAngle'];
      }
    }, {
      key: 'getDerivedAttrNames',
      value: function getDerivedAttrNames() {
        return ['d'];
      }
    }, {
      key: 'getDerivedAttrInputNames',
      value: function getDerivedAttrInputNames() {
        return {
          d: ['innerRadius', 'outerRadius', 'startAngle', 'endAngle']
        };
      }
    }, {
      key: 'getDerivationMethod',
      value: function getDerivationMethod(key, props, shouldGetDatum) {
        var _this2 = this;

        switch (key) {
          case 'd':
            return function (datum) {
              var derivationMethod = (0, _d3Shape.arc)();
              var attrInputNames = _this2.derivedAttrInputNames[key];
              var attrValues = _this2.getAttrs(Object.assign({}, props, { datum: datum }), attrInputNames, shouldGetDatum);
              attrInputNames.forEach(function (attrName) {
                if ((0, _itsSet2.default)(props[attrName])) {
                  derivationMethod = derivationMethod[attrName](attrValues[attrName]);
                }
              });
              return derivationMethod();
            };
          // no default
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement('path', _extends({}, this.state, { style: this.getStyle(this.props) }, (0, _helpers.bindMouseEvents)(this.props)));
      }
    }]);

    return Arc;
  }(_AnimatedElement3.default);

  exports.default = Arc;


  Arc.propTypes = {
    innerRadius: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
    outerRadius: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
    startAngle: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
    endAngle: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func])
  };

  Arc.defaultProps = Object.assign({}, _AnimatedElement3.default.defaultProps, {
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0
  });
});