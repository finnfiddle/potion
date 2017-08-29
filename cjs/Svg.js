'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _constants = require('./constants');

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
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.addPatterns(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!(0, _deepEqual2.default)(this.props.patterns, nextProps.patterns)) {
        this.addPatterns(nextProps);
      }
      _get(Svg.prototype.__proto__ || Object.getPrototypeOf(Svg.prototype), 'componentWillReceiveProps', this).call(this, nextProps);
    }
  }, {
    key: 'getAttrNames',
    value: function getAttrNames() {
      return ['width', 'height'].concat(_constants.TWEENABLE_SVG_PRESENTATION_ATTRS);
    }
  }, {
    key: 'getPrivatePropNames',
    value: function getPrivatePropNames() {
      return ['patterns'];
    }
  }, {
    key: 'addPatterns',
    value: function addPatterns(props) {
      var selection = this.selectSelf();
      props.patterns.forEach(function (pattern) {
        selection.call(pattern);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'svg',
        _extends({}, this.state, {
          style: this.getStyle(this.props)
        }, (0, _helpers.bindMouseEvents)(this.props)),
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


Svg.propTypes = {
  patterns: _react.PropTypes.array
};

Svg.defaultProps = Object.assign({
  patterns: []
}, _AnimatedElement3.default.defaultProps);