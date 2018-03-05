'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapIfOutdated = exports.getRNSvgTransformations = exports.getRNSvgTransformationsFromObject = exports.getRNSvgTransformationsFromArray = exports.getTransformations = exports.getTransformationsFromObject = exports.getTransformationsFromArray = exports.omit = exports.pick = exports.isObject = exports.isFunction = exports.isNumber = exports.isString = exports.isArray = exports.types = exports.constants = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _itsSet = require('its-set');

var _itsSet2 = _interopRequireDefault(_itsSet);

var _intersect = require('intersect');

var _intersect2 = _interopRequireDefault(_intersect);

var _constants = require('./constants');

var _types = require('./types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var constants = exports.constants = { MOUSE_EVENTS: _constants.MOUSE_EVENTS };

var types = exports.types = { componentsType: _types.componentsType };

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

// export function mapHierarchy(object, mapper, isRoot = true) {
//   const result = isRoot ? { ...object } : {
//     ...object,
//     ...mapper(object),
//   };
//   if (object.children) {
//     result.children = object.children.map(child => mapHierarchy(child, mapper, false));
//   }
//   return result;
// }

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

var isNumber = exports.isNumber = function isNumber(val) {
  return typeof val === 'number';
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

var getTranformation = function getTranformation(meta) {
  return {
    matrix: function matrix(_ref) {
      var _ref2 = (0, _slicedToArray3.default)(_ref, 6),
          a = _ref2[0],
          b = _ref2[1],
          c = _ref2[2],
          d = _ref2[3],
          e = _ref2[4],
          f = _ref2[5];

      return 'matrix(' + a + ', ' + b + ', ' + c + ', ' + d + ', ' + e + ', ' + f + ')';
    },
    translate: function translate(_ref3) {
      var _ref4 = (0, _slicedToArray3.default)(_ref3, 2),
          x = _ref4[0],
          y = _ref4[1];

      return 'translate(' + x + (y ? ', ' + y : '') + ')';
    },
    scale: function scale(_ref5) {
      var _ref6 = (0, _slicedToArray3.default)(_ref5, 2),
          x = _ref6[0],
          y = _ref6[1];

      return 'scale(' + x + (y ? ', ' + y : '') + ')';
    },
    rotate: function rotate(_ref7) {
      var _ref8 = (0, _slicedToArray3.default)(_ref7, 3),
          a = _ref8[0],
          x = _ref8[1],
          y = _ref8[2];

      return 'rotate(' + a + (x ? ', ' + x : '') + (y ? ', ' + y : '') + ')';
    },
    skewX: function skewX(_ref9) {
      var _ref10 = (0, _slicedToArray3.default)(_ref9, 1),
          a = _ref10[0];

      return 'skewX(' + a + ')';
    },
    skewY: function skewY(_ref11) {
      var _ref12 = (0, _slicedToArray3.default)(_ref11, 1),
          a = _ref12[0];

      return 'skewY(' + a + ')';
    }
  }[meta.type](meta.value);
};

var getTransformationsFromArray = exports.getTransformationsFromArray = function getTransformationsFromArray(arr) {
  return arr.reduce(function (acc, meta) {
    return acc + ' ' + getTranformation(meta);
  }, '');
};

var getTransformationsFromObject = exports.getTransformationsFromObject = function getTransformationsFromObject(obj) {
  return (0, _keys2.default)(obj).reduce(function (acc, type) {
    return acc + ' ' + getTranformation({ type: type, value: obj[type] });
  }, '');
};

var getTransformations = exports.getTransformations = function getTransformations(transform) {
  return isArray(transform) ? getTransformationsFromArray(transform) : getTransformationsFromObject(transform);
};

var getRNSvgTranformation = function getRNSvgTranformation(meta) {
  return {
    translate: function translate(_ref13) {
      var _ref14 = (0, _slicedToArray3.default)(_ref13, 2),
          x = _ref14[0],
          y = _ref14[1];

      return { x: x, y: y };
    },
    scale: function scale(_ref15) {
      var _ref16 = (0, _slicedToArray3.default)(_ref15, 2),
          x = _ref16[0],
          y = _ref16[1];

      return y ? { scaleX: x, scaleY: y } : { scale: x };
    },
    rotate: function rotate(_ref17) {
      var _ref18 = (0, _slicedToArray3.default)(_ref17, 3),
          a = _ref18[0],
          x = _ref18[1],
          y = _ref18[2];

      return { rotation: a, originX: x, originY: y };
    }
  }[meta.type](meta.value);
};

var getRNSvgTransformationsFromArray = exports.getRNSvgTransformationsFromArray = function getRNSvgTransformationsFromArray(arr) {
  return arr.reduce(function (acc, meta) {
    return (0, _extends3.default)({}, acc, getRNSvgTranformation(meta));
  }, {});
};

var getRNSvgTransformationsFromObject = exports.getRNSvgTransformationsFromObject = function getRNSvgTransformationsFromObject(obj) {
  return (0, _keys2.default)(obj).reduce(function (acc, type) {
    return (0, _extends3.default)({}, acc, getRNSvgTranformation({ type: type, value: obj[type] }));
  }, {});
};

var getRNSvgTransformations = exports.getRNSvgTransformations = function getRNSvgTransformations(transform) {
  return isArray(transform) ? getRNSvgTransformationsFromArray(transform) : getRNSvgTransformationsFromObject(transform);
};

var wrapIfOutdated = exports.wrapIfOutdated = function wrapIfOutdated(inner, outer) {
  var the = { outer: outer };
  return _react.version < 16 ? _react2.default.createElement(the.outer, { children: inner }) : inner;
};

exports.default = {
  cap: cap,
  mapObject: mapObject,
  flattenHierarchy: flattenHierarchy,
  radiansToDegrees: radiansToDegrees
};