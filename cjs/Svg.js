'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('./helpers');

var _TransitionGroup = require('./TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _AnimatedElement2 = require('./mixins/AnimatedElement');

var _AnimatedElement3 = _interopRequireDefault(_AnimatedElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Svg = function (_AnimatedElement) {
  _inherits(Svg, _AnimatedElement);

  function Svg(props) {
    _classCallCheck(this, Svg);

    var _this = _possibleConstructorReturn(this, (Svg.__proto__ || Object.getPrototypeOf(Svg)).call(this, props));

    _this.displayName = 'Svg';
    return _this;
  }

  _createClass(Svg, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'svg',
        _extends({}, this.state, { style: this.getStyle(this.props) }, (0, _helpers.bindMouseEvents)(this.props)),
        _react2.default.createElement(
          _TransitionGroup2.default,
          null,
          this.props.children
        )
      );
    }
  }]);

  return Svg;
}(_AnimatedElement3.default);

exports.default = Svg;


Svg.defaultProps = Object.assign({}, _AnimatedElement3.default.defaultProps);