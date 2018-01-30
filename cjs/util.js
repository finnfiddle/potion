'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.diff = exports.omit = exports.pick = exports.isObject = exports.isFunction = exports.isString = exports.isArray = undefined;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

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

var _itsSet = require('its-set');

var _itsSet2 = _interopRequireDefault(_itsSet);

var _intersect = require('intersect');

var _intersect2 = _interopRequireDefault(_intersect);

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// convert first letter of word to uppercase
function cap(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

var isArray = exports.isArray = function isArray(val) {
  return Array.isArray(val);
};

function mapObject(object, iterator) {
  return (isArray(object) ? object : (0, _keys2.default)(object)).reduce(function (acc, key) {
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
  var setProps = (0, _intersect2.default)((0, _keys2.default)(props), _constants.MOUSE_EVENTS);
  return setProps.reduce(function (acc, key) {
    return (0, _assign2.default)({}, acc, (0, _defineProperty3.default)({}, key, function () {
      return props[key](props);
    }));
  }, {});
}

var isString = exports.isString = function isString(val) {
  return typeof val === 'string';
};

var isFunction = exports.isFunction = function isFunction(val) {
  return typeof val === 'function';
};

var isObject = exports.isObject = function isObject(val) {
  return (typeof val === 'undefined' ? 'undefined' : (0, _typeof3.default)(val)) === 'object' && val !== null;
};

var pick = exports.pick = function pick(obj, keys) {
  var result = {};
  keys.forEach(function (k) {
    result[k] = obj[k];
  });
  return result;
};

var omit = exports.omit = function omit(obj, keys) {
  var result = (0, _assign2.default)({}, obj);
  keys.forEach(function (key) {
    return delete result[key];
  });
  return result;
};

var changes = function changes(object, base) {
  return (0, _keys2.default)(object).reduce(function (result, key) {
    var value = object[key];
    if (!(0, _deepEqual2.default)(value, base[key])) {
      result[key] = isObject(value) && isObject(base[key]) ? changes(value, base[key]) : value;
    }
    return result;
  }, {});
};

var diff = exports.diff = function diff(object, base) {
  return changes(object, base);
};

exports.default = {
  cap: cap,
  mapObject: mapObject,
  flattenHierarchy: flattenHierarchy,
  radiansToDegrees: radiansToDegrees
};