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

var _d3Hierarchy = require('d3-hierarchy');

var _util = require('@potion/util');

var _Layout2 = require('./Layout');

var _Layout3 = _interopRequireDefault(_Layout2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pack = function (_Layout) {
  (0, _inherits3.default)(Pack, _Layout);

  function Pack() {
    (0, _classCallCheck3.default)(this, Pack);
    return (0, _possibleConstructorReturn3.default)(this, (Pack.__proto__ || (0, _getPrototypeOf2.default)(Pack)).apply(this, arguments));
  }

  (0, _createClass3.default)(Pack, [{
    key: 'getSchema',
    value: function getSchema() {
      return {
        layout: _d3Hierarchy.treemap,
        layoutProps: ['tile', 'size', 'round', 'padding', 'paddingInner', 'paddingOuter', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
        selectStylesToTween: function selectStylesToTween(d) {
          return {
            x0: d.x0,
            y0: d.y0,
            x1: d.x1,
            y1: d.y1
          };
        }
      };
    }
  }, {
    key: 'getData',
    value: function getData() {
      var _props = this.props,
          data = _props.data,
          sum = _props.sum,
          includeRoot = _props.includeRoot;

      return (0, _util.flattenHierarchy)(this.getLayout()((0, _d3Hierarchy.hierarchy)(data).sum(sum))).slice(includeRoot ? 0 : 1);
    }
  }]);
  return Pack;
}(_Layout3.default);

Pack.displayName = 'Tree';
Pack.propTypes = {
  data: _propTypes2.default.object.isRequired,
  includeRoot: _propTypes2.default.bool,
  sum: _propTypes2.default.func,
  size: _propTypes2.default.arrayOf(_propTypes2.default.number),
  tile: _propTypes2.default.func,
  round: _propTypes2.default.bool,
  padding: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  paddingInner: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  paddingOuter: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  paddingTop: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  paddingRight: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  paddingBottom: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  paddingLeft: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func])
};
Pack.defaultProps = (0, _extends3.default)({}, _Layout3.default.defaultProps, {
  includeRoot: true,
  sum: function sum(d) {
    return d.value;
  }
});
exports.default = Pack;