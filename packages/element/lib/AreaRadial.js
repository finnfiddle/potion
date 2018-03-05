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

var AreaRadial = function (_Element) {
  (0, _inherits3.default)(AreaRadial, _Element);

  function AreaRadial() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AreaRadial);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AreaRadial.__proto__ || (0, _getPrototypeOf2.default)(AreaRadial)).call.apply(_ref, [this].concat(args))), _this), _this.defaultComponent = 'path', _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(AreaRadial, [{
    key: 'getSchema',
    value: function getSchema() {
      return {
        d: {
          get inputs() {
            return ['angle', 'startAngle', 'endAngle', 'radius', 'innerRadius', 'outerRadius', 'defined', 'curve', 'context', 'lineStartAngle', 'lineInnerRadius', 'lineEndAngle', 'lineOuterRadius'];
          },
          calculation: function calculation(props) {
            var calc = (0, _d3Shape.areaRadial)();
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
  return AreaRadial;
}(_Element3.default);

AreaRadial.displayName = 'AreaRadial';
AreaRadial.propTypes = {
  angle: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  startAngle: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  endAngle: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  radius: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  innerRadius: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  outerRadius: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  defined: _propTypes2.default.number,
  curve: _propTypes2.default.number,
  context: _propTypes2.default.number,
  lineStartAngle: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  lineInnerRadius: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  lineEndAngle: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  lineOuterRadius: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  points: _propTypes2.default.array.isRequired
};
AreaRadial.defaultProps = (0, _extends3.default)({}, _Element3.default.defaultProps);
exports.default = AreaRadial;