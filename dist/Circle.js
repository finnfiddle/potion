'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStamp = require('react-stamp');

var _reactStamp2 = _interopRequireDefault(_reactStamp);

var _SelectSelfMixin = require('./mixins/SelectSelfMixin');

var _SelectSelfMixin2 = _interopRequireDefault(_SelectSelfMixin);

var _Shape = require('./Shape');

var _Shape2 = _interopRequireDefault(_Shape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStamp2.default)(_react2.default).compose(_SelectSelfMixin2.default, _Shape2.default, {

  displayName: 'Circle',

  getAttrNames: function getAttrNames() {
    return ['cx', 'cy', 'fill', 'opacity', 'r'];
  },
  render: function render() {
    return _react2.default.createElement('circle', this.state);
  }
});