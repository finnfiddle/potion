'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.cap = cap;
exports.mapObject = mapObject;
exports.flattenHierarchy = flattenHierarchy;
exports.radiansToDegrees = radiansToDegrees;

var _isArray = require('lodash/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _isObject = require('lodash/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _itsSet = require('its-set');

var _itsSet2 = _interopRequireDefault(_itsSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// convert first letter of word to uppercase
function cap(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function mapObject(object, iterator) {
  return ((0, _isArray2.default)(object) ? object : (0, _keys2.default)(object)).reduce(function (acc, key) {
    return (0, _assign2.default)({}, acc, (0, _defineProperty3.default)({}, key, iterator(object[key], key)));
  }, {});
}

function flattenHierarchy(object) {
  var result = [object];
  if ((0, _itsSet2.default)(object.children)) {
    result = result.concat(object.children.reduce(function (acc, child) {
      return acc.concat(flattenHierarchy(child));
    }, []));
  }
  return result;
}

function radiansToDegrees(radians) {
  return radians * 180 / Math.PI;
}

exports.default = {
  cap: cap,
  mapObject: mapObject,
  flattenHierarchy: flattenHierarchy,
  radiansToDegrees: radiansToDegrees
};