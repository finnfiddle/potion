'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _itsSet = require('its-set');

var _itsSet2 = _interopRequireDefault(_itsSet);

var _d3Shape = require('d3-shape');

var _Element2 = require('./Element');

var _Element3 = _interopRequireDefault(_Element2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  (0, _inherits3.default)(SymbolShape, _Element);

  function SymbolShape() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SymbolShape);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SymbolShape.__proto__ || (0, _getPrototypeOf2.default)(SymbolShape)).call.apply(_ref, [this].concat(args))), _this), _this.defaultComponent = 'path', _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SymbolShape, [{
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
  type: _propTypes2.default.oneOf((0, _keys2.default)(SYMBOLS))
};
SymbolShape.defaultProps = (0, _extends3.default)({}, _Element3.default.defaultProps);
exports.default = SymbolShape;