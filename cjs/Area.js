'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Area = function (_Component) {
  _inherits(Area, _Component);

  function Area(props) {
    _classCallCheck(this, Area);

    var _this = _possibleConstructorReturn(this, (Area.__proto__ || Object.getPrototypeOf(Area)).call(this, props));

    _this.displayName = 'Area';
    return _this;
  }

  _createClass(Area, [{
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