(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'lodash.isarray', 'lodash.intersection', 'its-set', 'lodash.without', './constants'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('lodash.isarray'), require('lodash.intersection'), require('its-set'), require('lodash.without'), require('./constants'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.lodash, global.lodash, global.itsSet, global.lodash, global.constants);
    global.helpers = mod.exports;
  }
})(this, function (exports, _lodash, _lodash3, _itsSet, _lodash5, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.cap = cap;
  exports.mapObject = mapObject;
  exports.flattenHierarchy = flattenHierarchy;
  exports.radiansToDegrees = radiansToDegrees;
  exports.bindMouseEvents = bindMouseEvents;
  exports.filter = filter;

  var _lodash2 = _interopRequireDefault(_lodash);

  var _lodash4 = _interopRequireDefault(_lodash3);

  var _itsSet2 = _interopRequireDefault(_itsSet);

  var _lodash6 = _interopRequireDefault(_lodash5);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  // convert first letter of word to uppercase
  function cap(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  function mapObject(object, iterator) {
    return ((0, _lodash2.default)(object) ? object : Object.keys(object)).reduce(function (acc, key) {
      return Object.assign({}, acc, _defineProperty({}, key, iterator(object[key], key)));
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
    var setProps = (0, _lodash4.default)(Object.keys(props), _constants.MOUSE_EVENTS);
    return setProps.reduce(function (acc, key) {
      return Object.assign({}, acc, _defineProperty({}, key, function () {
        return props[key](props);
      }));
    }, {});
  }

  function filter(array) {
    var whiteList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var blackList = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    return whiteList.length ? (0, _lodash6.default)((0, _lodash4.default)(array, whiteList), blackList) : (0, _lodash6.default)(array, blackList);
  }

  exports.default = {
    cap: cap,
    mapObject: mapObject,
    flattenHierarchy: flattenHierarchy,
    radiansToDegrees: radiansToDegrees
  };
});