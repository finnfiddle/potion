(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-stamp', 'its-set', 'd3-shape', './constants', './helpers', './AnimatedElement'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-stamp'), require('its-set'), require('d3-shape'), require('./constants'), require('./helpers'), require('./AnimatedElement'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStamp, global.itsSet, global.d3Shape, global.constants, global.helpers, global.AnimatedElement);
    global.SymbolShape = mod.exports;
  }
})(this, function (exports, _react, _reactStamp, _itsSet, _d3Shape, _constants, _helpers, _AnimatedElement) {
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

  var SYMBOLS = {
    symbolCircle: _d3Shape.symbolCircle,
    symbolCross: _d3Shape.symbolCross,
    symbolDiamond: _d3Shape.symbolDiamond,
    symbolSquare: _d3Shape.symbolSquare,
    symbolStar: _d3Shape.symbolStar,
    symbolTriangle: _d3Shape.symbolTriangle,
    symbolWye: _d3Shape.symbolWye
  };

  exports.default = (0, _reactStamp2.default)(_react2.default).compose(_AnimatedElement2.default, {

    displayName: 'Symbol',

    propTypes: {
      size: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
      type: _react.PropTypes.oneOf(Object.keys(SYMBOLS))
    },

    getAttrNames: function getAttrNames() {
      return _constants.TWEENABLE_SVG_PRESENTATION_ATTRS;
    },
    getDerivedAttrNames: function getDerivedAttrNames() {
      return ['d'];
    },
    getDerivedAttrInputNames: function getDerivedAttrInputNames() {
      return {
        d: ['size', 'type']
      };
    },
    getDerivationMethod: function getDerivationMethod(key, props) {
      var _this = this;

      switch (key) {
        case 'd':
          return function (datum) {
            var attrInputNames = _this.derivedAttrInputNames[key];
            var attrValues = _this.getAttrs(Object.assign({}, props, { datum: datum }), attrInputNames);
            var symbolInstance = (0, _d3Shape.symbol)();
            var size = attrValues.size,
                type = attrValues.type;

            if ((0, _itsSet2.default)(size)) symbolInstance = symbolInstance.size(size);
            if ((0, _itsSet2.default)(type)) symbolInstance = symbolInstance.type(SYMBOLS[type]);
            return symbolInstance();
          };
        // no default
      }
    },
    render: function render() {
      return _react2.default.createElement('path', _extends({}, this.state, { style: this.getStyle(this.props) }, (0, _helpers.bindMouseEvents)(this.props)));
    }
  });
});