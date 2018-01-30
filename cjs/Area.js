'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Area = function (_Component) {
  (0, _inherits3.default)(Area, _Component);

  function Area(props) {
    (0, _classCallCheck3.default)(this, Area);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Area.__proto__ || (0, _getPrototypeOf2.default)(Area)).call(this, props));

    _this.displayName = 'Area';
    return _this;
  }

  (0, _createClass3.default)(Area, [{
    key: 'render',
    value: function render() {
      return 'TODO';
    }

    // getArea() {
    //   let area = d3Shape.area();
    //   ['innerRadius', 'outerRadius', 'startAngle', 'endAngle'].forEach((key) => {
    //     if (itsSet(this.props[key])) area = area[key](this.props[key]);
    //   });
    //   return area;
    // },

  }]);
  return Area;
}(_react.Component);

exports.default = Area;


Area.propTypes = {
  x: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  x0: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  x1: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  y: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  y0: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  y1: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  defined: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  curve: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  context: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  lineX0: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  lineY0: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  lineX1: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  lineY1: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func])
};