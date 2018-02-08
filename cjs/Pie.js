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

var _d3Shape = require('d3-shape');

var _Layout2 = require('./Layout');

var _Layout3 = _interopRequireDefault(_Layout2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pie = function (_Layout) {
  (0, _inherits3.default)(Pie, _Layout);

  function Pie() {
    (0, _classCallCheck3.default)(this, Pie);
    return (0, _possibleConstructorReturn3.default)(this, (Pie.__proto__ || (0, _getPrototypeOf2.default)(Pie)).apply(this, arguments));
  }

  (0, _createClass3.default)(Pie, [{
    key: 'getSchema',
    value: function getSchema() {
      return {
        layout: _d3Shape.pie,
        layoutProps: ['value', 'sort', 'sortValues', 'startAngle', 'endAngle', 'padAngle'],
        selectStylesToTween: function selectStylesToTween(d) {
          return {
            startAngle: d.startAngle,
            endAngle: d.endAngle
          };
        }
      };
    }
  }, {
    key: 'getData',
    value: function getData() {
      return this.getLayout()(this.props.data);
    }
  }]);
  return Pie;
}(_Layout3.default);

Pie.displayName = 'Pie';
Pie.propTypes = (0, _extends3.default)({}, _Layout3.default.propTypes, {
  value: _propTypes2.default.func,
  sort: _propTypes2.default.func,
  sortValues: _propTypes2.default.func,
  startAngle: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  endAngle: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  padAngle: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  data: _propTypes2.default.array.isRequired,
  id: _propTypes2.default.func
});
exports.default = Pie;