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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import itsSet from 'its-set';
// import d3Shape from 'd3-shape';

var RadialArea = function (_Component) {
  (0, _inherits3.default)(RadialArea, _Component);

  function RadialArea(props) {
    (0, _classCallCheck3.default)(this, RadialArea);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RadialArea.__proto__ || (0, _getPrototypeOf2.default)(RadialArea)).call(this, props));

    _this.displayName = 'RadialArea';
    return _this;
  }

  (0, _createClass3.default)(RadialArea, [{
    key: 'render',
    value: function render() {
      return 'TODO';
      // return (
      //   <path d={this.getRadialArea()()} />
      // );
    }

    // getRadialArea() {
    //   let radialArea = d3Shape.radialArea();
    //   [
    //     'angle',
    //     'startAngle',
    //     'endAngle',
    //     'radius',
    //     'innerRadius',
    //     'outerRadius',
    //     'defined',
    //     'curve',
    //     'lineStartAngle',
    //     'lineInnerRadius',
    //     'lineEndAngle',
    //     'lineOuterRadius',
    //   ].forEach((key) => {
    //     if (itsSet(this.props[key])) radialArea = radialArea[key](this.props[key]);
    //   });
    //   return radialArea;
    // },

  }]);
  return RadialArea;
}(_react.Component);

exports.default = RadialArea;


RadialArea.propTypes = {
  // angle,
  // startAngle,
  // endAngle,
  // radius,
  // innerRadius,
  // outerRadius,
  // defined,
  // curve,
  // lineStartAngle,
  // lineInnerRadius,
  // lineEndAngle,
  // lineOuterRadius,
};