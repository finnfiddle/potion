'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pattern = exports.LinearGradient = undefined;

var _reactSvgTextures = require('react-svg-textures');

var Pattern = _interopRequireWildcard(_reactSvgTextures);

var _LinearGradient = require('./LinearGradient');

var _LinearGradient2 = _interopRequireDefault(_LinearGradient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.LinearGradient = _LinearGradient2.default;
exports.Pattern = Pattern;

// import Axis from './Axis';
// import AxisBottom from './AxisBottom';
// import AxisLeft from './AxisLeft';
// import AxisRight from './AxisRight';
// import AxisTop from './AxisTop';