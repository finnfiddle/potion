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
exports.bindMouseEvents = bindMouseEvents;
exports.filter = filter;

var _isArray = require('lodash/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _intersection = require('lodash/intersection');

var _intersection2 = _interopRequireDefault(_intersection);

var _itsSet = require('its-set');

var _itsSet2 = _interopRequireDefault(_itsSet);

var _without = require('lodash/without');

var _without2 = _interopRequireDefault(_without);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// convert first letter of word to uppercase

// import isObject from 'lodash/isObject';
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

function bindMouseEvents(props) {
  var setProps = (0, _intersection2.default)((0, _keys2.default)(props), _constants.MOUSE_EVENTS);
  return setProps.reduce(function (acc, key) {
    return (0, _assign2.default)({}, acc, (0, _defineProperty3.default)({}, key, function () {
      return props[key](props);
    }));
  }, {});
}

function filter(array) {
  var whiteList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var blackList = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  return whiteList.length ? (0, _without2.default)((0, _intersection2.default)(array, whiteList), blackList) : (0, _without2.default)(array, blackList);
}

exports.default = {
  cap: cap,
  mapObject: mapObject,
  flattenHierarchy: flattenHierarchy,
  radiansToDegrees: radiansToDegrees
};