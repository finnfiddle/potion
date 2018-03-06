'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.componentsType = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentsType = exports.componentsType = _propTypes2.default.shape({
  svg: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  circle: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  ellipse: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  g: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  linearGradient: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  radialGradient: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  line: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  path: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  polygon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  polyline: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  rect: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  symbol: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  text: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  use: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  defs: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  stop: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node])
});