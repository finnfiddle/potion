'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStamp = require('react-stamp');

var _reactStamp2 = _interopRequireDefault(_reactStamp);

var _d3Shape = require('d3-shape');

var _d3Shape2 = _interopRequireDefault(_d3Shape);

var _itsSet = require('its-set');

var _itsSet2 = _interopRequireDefault(_itsSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStamp2.default)(_react2.default).compose({

  displayName: 'Stack',

  propTypes: {
    // name
    // keys
    // value
    // order
    // offset
  },

  render: function render() {
    var _props = this.props,
        children = _props.children,
        name = _props.name,
        data = _props.data;

    var stackData = this.getStack(data);

    return _react.Children.map(children, function (child) {
      return (0, _react.cloneElement)(child, (0, _defineProperty3.default)({}, name, stackData));
    });
  },
  getStack: function getStack() {
    var _this = this;

    var stack = _d3Shape2.default.stack();
    ['keys', 'value', 'order', 'offset'].forEach(function (key) {
      if ((0, _itsSet2.default)(_this.props[key])) stack = stack[key](_this.props[key]);
    });
    return stack;
  }
});