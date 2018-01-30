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
//
// import { bindMouseEvents } from './util';

var Curve = function (_Component) {
  (0, _inherits3.default)(Curve, _Component);

  function Curve(props) {
    (0, _classCallCheck3.default)(this, Curve);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Curve.__proto__ || (0, _getPrototypeOf2.default)(Curve)).call(this, props));

    _this.displayName = 'Curve';
    return _this;
  }

  (0, _createClass3.default)(Curve, [{
    key: 'render',
    value: function render() {
      return 'TODO';
    }

    // getLine() {
    //   let line = d3Shape.line();
    //   ['x', 'y', 'defined', 'curve'].forEach((key) => {
    //     if (itsSet(this.props[key])) line = line[key](this.props[key]);
    //   });
    //   return line;
    // },

  }]);
  return Curve;
}(_react.Component);

exports.default = Curve;


Curve.propTypes = {
  // x,
  // y,
  // defined,
  // curve,
};