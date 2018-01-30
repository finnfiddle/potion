'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _constants = require('./constants');

var _util = require('./util');

var _TransitionGroup = require('./TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _AnimatedElement2 = require('./mixins/AnimatedElement');

var _AnimatedElement3 = _interopRequireDefault(_AnimatedElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Svg = function (_AnimatedElement) {
  (0, _inherits3.default)(Svg, _AnimatedElement);

  function Svg(props) {
    (0, _classCallCheck3.default)(this, Svg);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Svg.__proto__ || (0, _getPrototypeOf2.default)(Svg)).call(this, props));

    _this.displayName = 'Svg';
    return _this;
  }

  (0, _createClass3.default)(Svg, [{
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
      (0, _get3.default)(Svg.prototype.__proto__ || (0, _getPrototypeOf2.default)(Svg.prototype), 'componentWillReceiveProps', this).call(this, nextProps);
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
      // const selection = this.selectSelf();
      // props.patterns.forEach(pattern => {
      //   selection.call(pattern);
      // });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        this.props.component,
        (0, _extends3.default)({}, this.state, {
          style: this.getStyle(this.props)
        }, (0, _util.bindMouseEvents)(this.props)),
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
  patterns: _propTypes2.default.array
};

Svg.defaultProps = (0, _assign2.default)({
  patterns: [],
  component: 'svg'
}, _AnimatedElement3.default.defaultProps);