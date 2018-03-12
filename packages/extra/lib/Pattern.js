'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSvgTextures = require('react-svg-textures');

var _reactSvgTextures2 = _interopRequireDefault(_reactSvgTextures);

var _util = require('@potion/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Provider = function Provider(WrappedComponent) {
  var Wrapper = function Wrapper(props, context) {
    return _react2.default.createElement(WrappedComponent, _extends({}, props, {
      components: _extends({}, _util.defaultProps.components, context.components || {})
    }));
  };
  Wrapper.contextTypes = {
    components: _util.types.components
  };
  return Wrapper;
};

exports.default = {
  Circles: Provider(_reactSvgTextures2.default.Circles),
  Lines: Provider(_reactSvgTextures2.default.Lines),
  Paths: Provider(_reactSvgTextures2.default.Paths)
};