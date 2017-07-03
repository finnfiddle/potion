(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'its-set', 'intersect', './constants'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('its-set'), require('intersect'), require('./constants'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.itsSet, global.intersect, global.constants);
    global.helpers = mod.exports;
  }
})(this, function (exports, _itsSet, _intersect, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.omit = exports.pick = exports.isObject = exports.isFunction = exports.isString = exports.isArray = undefined;
  exports.cap = cap;
  exports.mapObject = mapObject;
  exports.flattenHierarchy = flattenHierarchy;
  exports.radiansToDegrees = radiansToDegrees;
  exports.bindMouseEvents = bindMouseEvents;

  var _itsSet2 = _interopRequireDefault(_itsSet);

  var _intersect2 = _interopRequireDefault(_intersect);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

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

  var isArray = exports.isArray = function isArray(val) {
    return Array.isArray(val);
  };

  function mapObject(object, iterator) {
    return (isArray(object) ? object : Object.keys(object)).reduce(function (acc, key) {
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
    var setProps = (0, _intersect2.default)(Object.keys(props), _constants.MOUSE_EVENTS);
    return setProps.reduce(function (acc, key) {
      return Object.assign({}, acc, _defineProperty({}, key, function () {
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
    return (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && val !== null;
  };

  var pick = exports.pick = function pick(obj, keys) {
    var result = {};
    keys.forEach(function (k) {
      result[k] = obj[k];
    });
    return result;
  };

  var omit = exports.omit = function omit(obj, keys) {
    var result = Object.assign({}, obj);
    keys.forEach(function (key) {
      return delete result[key];
    });
    return result;
  };

  exports.default = {
    cap: cap,
    mapObject: mapObject,
    flattenHierarchy: flattenHierarchy,
    radiansToDegrees: radiansToDegrees
  };
});