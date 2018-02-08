'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

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

var _d3Shape = require('d3-shape');

var _Layout2 = require('./Layout');

var _Layout3 = _interopRequireDefault(_Layout2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Stack = function (_Layout) {
  (0, _inherits3.default)(Stack, _Layout);

  function Stack() {
    (0, _classCallCheck3.default)(this, Stack);
    return (0, _possibleConstructorReturn3.default)(this, (Stack.__proto__ || (0, _getPrototypeOf2.default)(Stack)).apply(this, arguments));
  }

  (0, _createClass3.default)(Stack, [{
    key: 'getSchema',
    value: function getSchema() {
      return {
        layout: _d3Shape.stack,
        layoutProps: ['keys', 'value', 'order', 'offset'],
        selectStylesToTween: function selectStylesToTween(d) {
          return d.reduce(function (acc, child, index) {
            var _extends2;

            return (0, _extends4.default)({}, acc, (_extends2 = {}, (0, _defineProperty3.default)(_extends2, index + '_0', child[0]), (0, _defineProperty3.default)(_extends2, index + '_1', child[1]), _extends2));
          }, {});
        }
      };
    }
  }, {
    key: 'transformInterpolatedStyles',
    value: function transformInterpolatedStyles(data) {
      return data.map(function (d) {
        var data = d.data,
            style = d.style;

        var result = [].concat((0, _toConsumableArray3.default)(data));
        (0, _keys2.default)(style).forEach(function (key) {
          var _key$split = key.split('_'),
              _key$split2 = (0, _slicedToArray3.default)(_key$split, 2),
              row = _key$split2[0],
              col = _key$split2[1];

          result[row][col] = style[key];
        });
        return result;
      });
    }
  }, {
    key: 'getData',
    value: function getData() {
      return this.getLayout()(this.props.data);
    }
  }]);
  return Stack;
}(_Layout3.default);

Stack.displayName = 'Stack';
Stack.propTypes = {
  data: _propTypes2.default.array.isRequired,
  keys: _propTypes2.default.array,
  value: _propTypes2.default.func,
  order: _propTypes2.default.array,
  offset: _propTypes2.default.func
};
Stack.defaultProps = (0, _extends4.default)({}, _Layout3.default.defaultProps);
exports.default = Stack;