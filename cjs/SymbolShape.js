'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _itsSet = require('its-set');

var _itsSet2 = _interopRequireDefault(_itsSet);

var _d3Shape = require('d3-shape');

var _constants = require('./constants');

var _helpers = require('./helpers');

var _AnimatedElement2 = require('./mixins/AnimatedElement');

var _AnimatedElement3 = _interopRequireDefault(_AnimatedElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SYMBOLS = {
  symbolCircle: _d3Shape.symbolCircle,
  symbolCross: _d3Shape.symbolCross,
  symbolDiamond: _d3Shape.symbolDiamond,
  symbolSquare: _d3Shape.symbolSquare,
  symbolStar: _d3Shape.symbolStar,
  symbolTriangle: _d3Shape.symbolTriangle,
  symbolWye: _d3Shape.symbolWye
};

var SymbolShape = function (_AnimatedElement) {
  _inherits(SymbolShape, _AnimatedElement);

  function SymbolShape(props) {
    _classCallCheck(this, SymbolShape);

    var _this = _possibleConstructorReturn(this, (SymbolShape.__proto__ || Object.getPrototypeOf(SymbolShape)).call(this, props));

    _this.displayName = 'SymbolShape';
    return _this;
  }

  _createClass(SymbolShape, [{
    key: 'getAttrNames',
    value: function getAttrNames() {
      return _constants.TWEENABLE_SVG_PRESENTATION_ATTRS;
    }
  }, {
    key: 'getPrivatePropNames',
    value: function getPrivatePropNames() {
      return ['size', 'type'];
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
        d: ['size', 'type']
      };
    }
  }, {
    key: 'getDerivationMethod',
    value: function getDerivationMethod(key, props, shouldGetDatum) {
      var _this2 = this;

      switch (key) {
        case 'd':
          return function (datum) {
            var attrInputNames = _this2.derivedAttrInputNames[key];
            var attrValues = _this2.getAttrs(Object.assign({}, props, { datum: datum }), attrInputNames, shouldGetDatum);
            var symbolInstance = (0, _d3Shape.symbol)();
            var size = attrValues.size,
                type = attrValues.type;

            if ((0, _itsSet2.default)(size)) symbolInstance = symbolInstance.size(size);
            if ((0, _itsSet2.default)(type)) symbolInstance = symbolInstance.type(SYMBOLS[type]);
            return symbolInstance();
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

  return SymbolShape;
}(_AnimatedElement3.default);

exports.default = SymbolShape;


SymbolShape.propTypes = {
  size: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  type: _propTypes2.default.oneOf(Object.keys(SYMBOLS))
};

SymbolShape.defaultProps = Object.assign({}, _AnimatedElement3.default.defaultProps);