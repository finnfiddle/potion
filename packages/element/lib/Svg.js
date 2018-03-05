'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _util = require('@potion/util');

var _Element2 = require('./Element');

var _Element3 = _interopRequireDefault(_Element2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Svg = function (_Element) {
  (0, _inherits3.default)(Svg, _Element);

  function Svg() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Svg);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Svg.__proto__ || (0, _getPrototypeOf2.default)(Svg)).call.apply(_ref, [this].concat(args))), _this), _this.defaultComponent = 'svg', _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Svg, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        components: (0, _extends3.default)({
          svg: 'svg',
          circle: 'circle',
          ellipse: 'ellipse',
          g: 'g',
          linearGradient: 'linearGradient',
          radialGradient: 'radialGradient',
          line: 'line',
          path: 'path',
          polygon: 'polygon',
          polyline: 'polyline',
          rect: 'rect',
          symbol: 'symbol',
          text: 'text',
          use: 'use',
          defs: 'defs',
          stop: 'stop'
        }, this.props.components),
        env: this.props.env
      };
    }
  }, {
    key: 'getPrivateProps',
    value: function getPrivateProps() {
      return ['components', 'env'];
    }
  }]);
  return Svg;
}(_Element3.default);

Svg.displayName = 'Svg';
Svg.propTypes = {
  patterns: _propTypes2.default.array,
  components: _util.types.componentsType
};
Svg.defaultProps = (0, _extends3.default)({}, _Element3.default.defaultProps, {
  components: {},
  env: 'web'
});
Svg.childContextTypes = {
  components: _util.types.componentsType,
  env: _propTypes2.default.oneOf(['web', 'react-native-svg'])
};
exports.default = Svg;