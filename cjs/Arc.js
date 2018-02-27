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

var Arc = function (_Element) {
  (0, _inherits3.default)(Arc, _Element);

  function Arc() {
    (0, _classCallCheck3.default)(this, Arc);
    return (0, _possibleConstructorReturn3.default)(this, (Arc.__proto__ || (0, _getPrototypeOf2.default)(Arc)).apply(this, arguments));
  }

  (0, _createClass3.default)(Arc, [{
    key: 'getSchema',
    value: function getSchema() {
      return {
        d: {
          get inputs() {
            return ['innerRadius', 'outerRadius', 'startAngle', 'endAngle'];
          },
          calculation: function calculation(props) {
            var calc = (0, _d3Shape.arc)();
            var keys = this.inputs;
            keys.forEach(function (attrName) {
              if ((0, _itsSet2.default)(props[attrName])) {
                calc = calc[attrName](props[attrName]);
              }
            });
            return calc();
          }
        }
      };
    }
  }]);
  return Arc;
}(_Element3.default);

Arc.displayName = 'Arc';
Arc.propTypes = {
  innerRadius: _propTypes2.default.number,
  outerRadius: _propTypes2.default.number,
  startAngle: _propTypes2.default.number,
  endAngle: _propTypes2.default.number
};
Arc.defaultProps = (0, _extends3.default)({}, _Element3.default.defaultProps, {
  component: 'path',
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0
});
exports.default = Arc;