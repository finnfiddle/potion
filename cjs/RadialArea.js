'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import itsSet from 'its-set';
// import d3Shape from 'd3-shape';

var RadialArea = function (_Component) {
  _inherits(RadialArea, _Component);

  function RadialArea(props) {
    _classCallCheck(this, RadialArea);

    var _this = _possibleConstructorReturn(this, (RadialArea.__proto__ || Object.getPrototypeOf(RadialArea)).call(this, props));

    _this.displayName = 'RadialArea';
    return _this;
  }

  _createClass(RadialArea, [{
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