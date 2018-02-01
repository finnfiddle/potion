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

var _TransitionGroup = require('./TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _Element2 = require('./Element');

var _Element3 = _interopRequireDefault(_Element2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Svg = function (_Element) {
  (0, _inherits3.default)(Svg, _Element);

  function Svg() {
    (0, _classCallCheck3.default)(this, Svg);
    return (0, _possibleConstructorReturn3.default)(this, (Svg.__proto__ || (0, _getPrototypeOf2.default)(Svg)).apply(this, arguments));
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
      console.log('add patterns', props.patterns);
      // const selection = this.selectSelf();
      // props.patterns.forEach(pattern => {
      //   selection.call(pattern);
      // });
    }
  }, {
    key: 'render',
    value: function render() {
      return this.state.el ? (0, _react.cloneElement)(this.state.el, {
        children: _react2.default.createElement(
          _TransitionGroup2.default,
          { component: this.props.groupComponent },
          this.props.children
        )
      }) : null;
    }
  }]);
  return Svg;
}(_Element3.default);

Svg.displayName = 'Svg';
Svg.defaultProps = (0, _extends3.default)({}, _Element3.default.defaultProps, {
  patterns: [],
  component: 'svg',
  groupComponent: 'g'
});
Svg.propTypes = {
  patterns: _propTypes2.default.array
};
exports.default = Svg;