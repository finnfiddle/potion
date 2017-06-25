'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
    return 'TODO';
    // const { children, name, data } = this.props;
    // const stackData = this.getStack(data);
    //
    // return Children.map(children, child =>
    //   cloneElement(child, { [name]: stackData }),
    // );
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
// import React, { Children, cloneElement, PropTypes } from 'react';