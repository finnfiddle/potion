'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.components = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var components = exports.components = _propTypes2.default.shape({
  svg: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  circle: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  ellipse: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  g: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  linearGradient: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  radialGradient: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  line: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  path: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  polygon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  polyline: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  rect: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  symbol: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  text: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  use: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  defs: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  stop: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func])
});