'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStamp = require('react-stamp');

var _reactStamp2 = _interopRequireDefault(_reactStamp);

var _constants = require('./constants');

var _helpers = require('./helpers');

var _AnimatedElement = require('./AnimatedElement');

var _AnimatedElement2 = _interopRequireDefault(_AnimatedElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStamp2.default)(_react2.default).compose(_AnimatedElement2.default, {

  displayName: 'Rect',

  propTypes: {
    x: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.number]),
    y: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.number]),
    height: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.number]),
    width: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.number])
  },

  getAttrNames: function getAttrNames() {
    return ['x', 'y', 'height', 'width'].concat(_constants.TWEENABLE_SVG_PRESENTATION_ATTRS);
  },
  render: function render() {
    return _react2.default.createElement('rect', (0, _extends3.default)({}, this.state, { style: this.getStyle(this.props) }, (0, _helpers.bindMouseEvents)(this.props)));
  }
});