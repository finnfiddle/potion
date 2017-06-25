(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-stamp', 'd3-shape', 'its-set', './constants', './helpers', './AnimatedElement'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-stamp'), require('d3-shape'), require('its-set'), require('./constants'), require('./helpers'), require('./AnimatedElement'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStamp, global.d3Shape, global.itsSet, global.constants, global.helpers, global.AnimatedElement);
    global.Arc = mod.exports;
  }
})(this, function (exports, _react, _reactStamp, _d3Shape, _itsSet, _constants, _helpers, _AnimatedElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactStamp2 = _interopRequireDefault(_reactStamp);

  var _itsSet2 = _interopRequireDefault(_itsSet);

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

    displayName: 'Arc',

    propTypes: {
      innerRadius: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
      outerRadius: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
      startAngle: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
      endAngle: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func])
    },

    defaultProps: {
      innerRadius: 0,
      outerRadius: 0,
      startAngle: 0,
      endAngle: 0
    },

    getAttrNames: function getAttrNames() {
      return _constants.TWEENABLE_SVG_PRESENTATION_ATTRS;
    },
    getPrivatePropNames: function getPrivatePropNames() {
      return ['innerRadius', 'outerRadius', 'startAngle', 'endAngle'];
    },
    getDerivedAttrNames: function getDerivedAttrNames() {
      return ['d'];
    },
    getDerivedAttrInputNames: function getDerivedAttrInputNames() {
      return {
        d: ['innerRadius', 'outerRadius', 'startAngle', 'endAngle']
      };
    },
    getDerivationMethod: function getDerivationMethod(key, props) {
      var _this = this;

      switch (key) {
        case 'd':
          return function (datum) {
            var derivationMethod = (0, _d3Shape.arc)();
            var attrInputNames = _this.derivedAttrInputNames[key];
            var attrValues = _this.getAttrs(Object.assign({}, props, { datum: datum }), attrInputNames);
            attrInputNames.forEach(function (attrName) {
              if ((0, _itsSet2.default)(props[attrName])) {
                derivationMethod = derivationMethod[attrName](attrValues[attrName]);
              }
            });
            return derivationMethod();
          };
        // no default
      }
    },
    render: function render() {
      return _react2.default.createElement('path', _extends({}, this.state, { style: this.getStyle(this.props) }, (0, _helpers.bindMouseEvents)(this.props)));
    }
  });
});