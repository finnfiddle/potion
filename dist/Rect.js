'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStamp = require('react-stamp');

var _reactStamp2 = _interopRequireDefault(_reactStamp);

var _AnimatedElement = require('./AnimatedElement');

var _AnimatedElement2 = _interopRequireDefault(_AnimatedElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStamp2.default)(_react2.default).compose(_AnimatedElement2.default, {

  displayName: 'Rect',

  getAttrNames: function getAttrNames() {
    return ['x', 'y', 'height', 'width', 'fill', 'opacity', 'stroke', 'strokeWidth'];
  },
  render: function render() {
    var _state = this.state,
        didEnter = _state.didEnter,
        restState = (0, _objectWithoutProperties3.default)(_state, ['didEnter']);

    return _react2.default.createElement('rect', (0, _extends3.default)({}, restState, { style: this.getStyle(this.props) }));
  }
});