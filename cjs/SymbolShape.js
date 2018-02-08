'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _itsSet = require('its-set');

var _itsSet2 = _interopRequireDefault(_itsSet);

var _d3Shape = require('d3-shape');

var _Element2 = require('./Element');

var _Element3 = _interopRequireDefault(_Element2);

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

var SymbolShape = function (_Element) {
  _inherits(SymbolShape, _Element);

  function SymbolShape() {
    _classCallCheck(this, SymbolShape);

    return _possibleConstructorReturn(this, (SymbolShape.__proto__ || Object.getPrototypeOf(SymbolShape)).apply(this, arguments));
  }

  _createClass(SymbolShape, [{
    key: 'getSchema',
    value: function getSchema() {
      return {
        d: {
          inputs: ['size', 'type'],
          calculation: function calculation(props) {
            var symbol = (0, _d3Shape.symbol)();
            var size = props.size,
                type = props.type;

            if ((0, _itsSet2.default)(size)) symbol = symbol.size(size);
            if ((0, _itsSet2.default)(type)) symbol = symbol.type(SYMBOLS[type]);
            return symbol();
          }
        }
      };
    }
  }]);

  return SymbolShape;
}(_Element3.default);

SymbolShape.displayName = 'SymbolShape';
SymbolShape.propTypes = {
  size: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  type: _propTypes2.default.oneOf(Object.keys(SYMBOLS))
};
SymbolShape.defaultProps = _extends({}, _Element3.default.defaultProps, {
  component: 'path'
});
exports.default = SymbolShape;