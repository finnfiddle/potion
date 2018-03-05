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

var _Layout2 = require('./Layout');

var _Layout3 = _interopRequireDefault(_Layout2);

var _util = require('@potion/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Collection = function (_Layout) {
  (0, _inherits3.default)(Collection, _Layout);

  function Collection() {
    (0, _classCallCheck3.default)(this, Collection);
    return (0, _possibleConstructorReturn3.default)(this, (Collection.__proto__ || (0, _getPrototypeOf2.default)(Collection)).apply(this, arguments));
  }

  (0, _createClass3.default)(Collection, [{
    key: 'getSchema',
    value: function getSchema() {
      return {
        selectStylesToTween: function selectStylesToTween(d) {
          return (0, _keys2.default)(d).reduce(function (acc, key) {
            var result = (0, _extends3.default)({}, acc);
            if ((0, _util.isNumber)(d[key])) result[key] = d[key];
            return result;
          }, {});
        }
      };
    }
  }, {
    key: 'getData',
    value: function getData() {
      return this.props.data;
    }
  }]);
  return Collection;
}(_Layout3.default);

Collection.displayName = 'Collection';
Collection.propTypes = {
  data: _propTypes2.default.array.isRequired,
  children: _propTypes2.default.func.isRequired
};
exports.default = Collection;