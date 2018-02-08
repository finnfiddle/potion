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

var _itsSet = require('its-set');

var _itsSet2 = _interopRequireDefault(_itsSet);

var _Element2 = require('./Element');

var _Element3 = _interopRequireDefault(_Element2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Area = function (_Element) {
  (0, _inherits3.default)(Area, _Element);

  function Area() {
    (0, _classCallCheck3.default)(this, Area);
    return (0, _possibleConstructorReturn3.default)(this, (Area.__proto__ || (0, _getPrototypeOf2.default)(Area)).apply(this, arguments));
  }

  (0, _createClass3.default)(Area, [{
    key: 'getSchema',
    value: function getSchema() {
      return {
        d: {
          get inputs() {
            return ['x', 'x0', 'x1', 'y', 'y0', 'y1', 'defined', 'curve', 'context', 'lineX0', 'lineY0', 'lineX1', 'lineY1'];
          },
          calculation: function calculation(props) {
            var calc = (0, _d3Shape.area)();
            var keys = this.inputs;
            keys.forEach(function (attrName) {
              if ((0, _itsSet2.default)(props[attrName])) {
                calc = calc[attrName](props[attrName]);
              }
            });
            return calc(props.points);
          }
        }
      };
    }
  }]);
  return Area;
}(_Element3.default);

Area.displayName = 'Area';
Area.propTypes = {
  x: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  x0: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  x1: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  y: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  y0: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  y1: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  defined: _propTypes2.default.number,
  curve: _propTypes2.default.number,
  context: _propTypes2.default.number,
  lineX0: _propTypes2.default.number,
  lineY0: _propTypes2.default.number,
  lineX1: _propTypes2.default.number,
  lineY1: _propTypes2.default.number,
  points: _propTypes2.default.array.isRequired
};
Area.defaultProps = (0, _extends3.default)({}, _Element3.default.defaultProps, {
  component: 'path'
});
exports.default = Area;