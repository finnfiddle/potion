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

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Element2 = require('./Element');

var _Element3 = _interopRequireDefault(_Element2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Circle = function (_Element) {
  (0, _inherits3.default)(Circle, _Element);

  function Circle() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Circle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Circle.__proto__ || (0, _getPrototypeOf2.default)(Circle)).call.apply(_ref, [this].concat(args))), _this), _this.defaultComponent = 'circle', _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  return Circle;
}(_Element3.default);

Circle.displayName = 'Circle';
Circle.propTypes = {
  cx: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  cy: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  r: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func])
};
Circle.defaultProps = (0, _extends3.default)({}, _Element3.default.defaultProps);
exports.default = Circle;