(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define("LegoExtra", ["React"], factory);
	else if(typeof exports === 'object')
		exports["LegoExtra"] = factory(require("React"));
	else
		root["LegoExtra"] = factory(root["React"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(11)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,r){ true?module.exports=r():"function"==typeof define&&define.amd?define(r):t.textures=r()}(this,function(){"use strict";var t=function(){return(Math.random().toString(36)+"00000000000000000").replace(/[^a-z]+/g,"").slice(0,5)};return{circles:function(){var r=20,n="",e=2,a=!1,u="#343434",i="#343434",c=0,l=t(),o=function(t){var o=t.append("defs").append("pattern").attr("id",l).attr("patternUnits","userSpaceOnUse").attr("width",r).attr("height",r);n&&o.append("rect").attr("width",r).attr("height",r).attr("fill",n),o.append("circle").attr("cx",r/2).attr("cy",r/2).attr("r",e).attr("fill",u).attr("stroke",i).attr("stroke-width",c),a&&[[0,0],[0,r],[r,0],[r,r]].forEach(function(t){o.append("circle").attr("cx",t[0]).attr("cy",t[1]).attr("r",e).attr("fill",u).attr("stroke",i).attr("stroke-width",c)})};return o.heavier=function(t){return 0===arguments.length?e*=2:e*=2*t,o},o.lighter=function(t){return 0===arguments.length?e/=2:e/=2*t,o},o.thinner=function(t){return 0===arguments.length?r*=2:r*=2*t,o},o.thicker=function(t){return 0===arguments.length?r/=2:r/=2*t,o},o.background=function(t){return n=t,o},o.size=function(t){return r=t,o},o.complement=function(t){return a=0===arguments.length||t,o},o.radius=function(t){return e=t,o},o.fill=function(t){return u=t,o},o.stroke=function(t){return i=t,o},o.strokeWidth=function(t){return c=t,o},o.id=function(t){return 0===arguments.length?l:(l=t,o)},o.url=function(){return"url(#"+l+")"},o},lines:function(){var r=20,n="#343434",e=2,a="",u=t(),i=["diagonal"],c="auto",l=function(t){var n=r;switch(t){case"0/8":case"vertical":return"M "+n/2+", 0 l 0, "+n;case"1/8":return"M "+n/4+",0 l "+n/2+","+n+" M "+-n/4+",0 l "+n/2+","+n+" M "+3*n/4+",0 l "+n/2+","+n;case"2/8":case"diagonal":return"M 0,"+n+" l "+n+","+-n+" M "+-n/4+","+n/4+" l "+n/2+","+-n/2+" M "+.75*n+","+5/4*n+" l "+n/2+","+-n/2;case"3/8":return"M 0,"+.75*n+" l "+n+","+-n/2+" M 0,"+n/4+" l "+n+","+-n/2+" M 0,"+5*n/4+" l "+n+","+-n/2;case"4/8":case"horizontal":return"M 0,"+n/2+" l "+n+",0";case"5/8":return"M 0,"+-n/4+" l "+n+","+n/2+"M 0,"+n/4+" l "+n+","+n/2+" M 0,"+3*n/4+" l "+n+","+n/2;case"6/8":return"M 0,0 l "+n+","+n+" M "+-n/4+","+.75*n+" l "+n/2+","+n/2+" M "+3*n/4+","+-n/4+" l "+n/2+","+n/2;case"7/8":return"M "+-n/4+",0 l "+n/2+","+n+" M "+n/4+",0 l "+n/2+","+n+" M "+3*n/4+",0 l "+n/2+","+n;default:return"M "+n/2+", 0 l 0, "+n}},o=function(t){var o=t.append("defs").append("pattern").attr("id",u).attr("patternUnits","userSpaceOnUse").attr("width",r).attr("height",r);a&&o.append("rect").attr("width",r).attr("height",r).attr("fill",a),i.forEach(function(t){o.append("path").attr("d",l(t)).attr("stroke-width",e).attr("shape-rendering",c).attr("stroke",n).attr("stroke-linecap","square")})};return o.heavier=function(t){return 0===arguments.length?e*=2:e*=2*t,o},o.lighter=function(t){return 0===arguments.length?e/=2:e/=2*t,o},o.thinner=function(t){return 0===arguments.length?r*=2:r*=2*t,o},o.thicker=function(t){return 0===arguments.length?r/=2:r/=2*t,o},o.background=function(t){return a=t,o},o.size=function(t){return r=t,o},o.orientation=function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return 0===arguments.length?o:(i=r,o)},o.shapeRendering=function(t){return c=t,o},o.stroke=function(t){return n=t,o},o.strokeWidth=function(t){return e=t,o},o.id=function(t){return 0===arguments.length?u:(u=t,o)},o.url=function(){return"url(#"+u+")"},o},paths:function(){var r=1,n=1,e=20,a="#343434",u=2,i="",c=function(t){return"M "+t/4+","+3*t/4+"l"+t/4+","+-t/2+"l"+t/4+","+t/2},l=t(),o="transparent",s="auto",f=function(t){var a=e;switch(t){case"squares":return"M "+a/4+" "+a/4+" l "+a/2+" 0 l 0 "+a/2+" l "+-a/2+" 0 Z";case"nylon":return"M 0 "+a/4+" l "+a/4+" 0 l 0 "+-a/4+" M "+3*a/4+" "+a+" l 0 "+-a/4+" l "+a/4+" 0 M "+a/4+" "+a/2+" l 0 "+a/4+" l "+a/4+" 0 M "+a/2+" "+a/4+" l "+a/4+" 0 l 0 "+a/4;case"waves":return"M 0 "+a/2+" c "+a/8+" "+-a/4+" , "+3*a/8+" "+-a/4+" , "+a/2+" 0 c "+a/8+" "+a/4+" , "+3*a/8+" "+a/4+" , "+a/2+" 0 M "+-a/2+" "+a/2+" c "+a/8+" "+a/4+" , "+3*a/8+" "+a/4+" , "+a/2+" 0 M "+a+" "+a/2+" c "+a/8+" "+-a/4+" , "+3*a/8+" "+-a/4+" , "+a/2+" 0";case"woven":return"M "+a/4+","+a/4+"l"+a/2+","+a/2+"M"+3*a/4+","+a/4+"l"+a/2+","+-a/2+" M"+a/4+","+3*a/4+"l"+-a/2+","+a/2+"M"+3*a/4+","+5*a/4+"l"+a/2+","+-a/2+" M"+-a/4+","+a/4+"l"+a/2+","+-a/2;case"crosses":return"M "+a/4+","+a/4+"l"+a/2+","+a/2+"M"+a/4+","+3*a/4+"l"+a/2+","+-a/2;case"caps":return"M "+a/4+","+3*a/4+"l"+a/4+","+-a/2+"l"+a/4+","+a/2;case"hexagons":return r=3,n=Math.sqrt(3),"M "+a+",0 l "+a+",0 l "+a/2+","+a*Math.sqrt(3)/2+" l "+-a/2+","+a*Math.sqrt(3)/2+" l "+-a+",0 l "+-a/2+","+-a*Math.sqrt(3)/2+" Z M 0,"+a*Math.sqrt(3)/2+" l "+a/2+",0 M "+3*a+","+a*Math.sqrt(3)/2+" l "+-a/2+",0";default:return t(a)}},h=function(t){var h=f(c),d=t.append("defs").append("pattern").attr("id",l).attr("patternUnits","userSpaceOnUse").attr("width",e*r).attr("height",e*n);i&&d.append("rect").attr("width",e*r).attr("height",e*n).attr("fill",i),d.append("path").attr("d",h).attr("fill",o).attr("stroke",a).attr("stroke-width",u).attr("stroke-linecap","square").attr("shape-rendering",s)};return h.heavier=function(t){return 0===arguments.length?u*=2:u*=2*t,h},h.lighter=function(t){return 0===arguments.length?u/=2:u/=2*t,h},h.thinner=function(t){return 0===arguments.length?e*=2:e*=2*t,h},h.thicker=function(t){return 0===arguments.length?e/=2:e/=2*t,h},h.background=function(t){return i=t,h},h.shapeRendering=function(t){return s=t,h},h.size=function(t){return e=t,h},h.d=function(t){return c=t,h},h.fill=function(t){return o=t,h},h.stroke=function(t){return a=t,h},h.strokeWidth=function(t){return u=t,h},h.id=function(t){return 0===arguments.length?l:(l=t,h)},h.url=function(){return"url(#"+l+")"},h}}});


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(14);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var rand = function rand() {
  return (Math.random().toString(36) + '00000000000000000').replace(/[^a-z]+/g, '').slice(0, 5);
};

var Selection = function () {
  function Selection(tagName) {
    _classCallCheck(this, Selection);

    this.children = [];
    this.attrs = {};

    this.tagName = tagName;
    return this;
  }

  Selection.prototype.append = function append(tagName) {
    var child = new Selection(tagName);
    this.children.push(child);
    return child;
  };

  Selection.prototype.attr = function attr(key, value) {
    this.attrs[(0, _lodash2.default)(key)] = value;
    return this;
  };

  Selection.prototype.toReact = function toReact(components) {
    var children = this.children.map(function (child) {
      return child.toReact(components);
    });
    var the = { component: components[this.tagName] };
    return this.tagName ? _react2.default.createElement(
      the.component,
      _extends({}, this.attrs, { key: this.attrs.id || rand() }),
      children
    ) : children[0];
  };

  return Selection;
}();

exports.default = Selection;
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(4);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pattern = exports.LinearGradient = undefined;

var _reactSvgTextures = __webpack_require__(9);

var _reactSvgTextures2 = _interopRequireDefault(_reactSvgTextures);

var _LinearGradient = __webpack_require__(18);

var _LinearGradient2 = _interopRequireDefault(_LinearGradient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.LinearGradient = _LinearGradient2.default;
exports.Pattern = _reactSvgTextures2.default;

// import Axis from './Axis';
// import AxisBottom from './AxisBottom';
// import AxisLeft from './AxisLeft';
// import AxisRight from './AxisRight';
// import AxisTop from './AxisTop';

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Circles = __webpack_require__(10);

var _Circles2 = _interopRequireDefault(_Circles);

var _Lines = __webpack_require__(16);

var _Lines2 = _interopRequireDefault(_Lines);

var _Paths = __webpack_require__(17);

var _Paths2 = _interopRequireDefault(_Paths);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Circles: _Circles2.default,
  Lines: _Lines2.default,
  Paths: _Paths2.default
};
module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = __webpack_require__(0);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _textures = __webpack_require__(2);

var _textures2 = _interopRequireDefault(_textures);

var _selection = __webpack_require__(3);

var _selection2 = _interopRequireDefault(_selection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Circles = (_temp = _class = function (_Component) {
  _inherits(Circles, _Component);

  function Circles() {
    _classCallCheck(this, Circles);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Circles.prototype.render = function render() {
    var _this2 = this;

    var t = _textures2.default.circles();
    ['size', 'strokeWidth', 'stroke', 'fill', 'background', 'id', 'complement', 'radius'].forEach(function (key) {
      if (_this2.props[key]) t[key](_this2.props[key]);
    });
    var selection = new _selection2.default();
    t(selection);

    return selection.toReact(this.props.components);
  };

  return Circles;
}(_react.Component), _class.displayName = 'Circles', _class.defaultProps = {
  components: {
    defs: 'defs',
    g: 'g',
    circle: 'circle',
    rect: 'rect',
    pattern: 'pattern',
    path: 'path'
  }
}, _temp);
exports.default = Circles;
Circles.propTypes =  true ? {
  size: _propTypes2.default.number,
  strokeWidth: _propTypes2.default.number,
  stroke: _propTypes2.default.string,
  fill: _propTypes2.default.string,
  background: _propTypes2.default.string,
  id: _propTypes2.default.string,
  complement: _propTypes2.default.bool,
  radius: _propTypes2.default.number,
  components: _propTypes2.default.shape({
    defs: _propTypes2.default.node,
    g: _propTypes2.default.node,
    circle: _propTypes2.default.node,
    rect: _propTypes2.default.node,
    pattern: _propTypes2.default.node,
    path: _propTypes2.default.node
  })
} : {};
module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(4);
var invariant = __webpack_require__(5);
var warning = __webpack_require__(6);
var assign = __webpack_require__(12);

var ReactPropTypesSecret = __webpack_require__(7);
var checkPropTypes = __webpack_require__(13);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  var invariant = __webpack_require__(5);
  var warning = __webpack_require__(6);
  var ReactPropTypesSecret = __webpack_require__(7);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
    rsComboSymbolsRange = '\\u20d0-\\u20f0',
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsAstral = '[' + rsAstralRange + ']',
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsLowerMisc = '(?:' + rsLower + '|' + rsMisc + ')',
    rsUpperMisc = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptLowerContr = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptUpperContr = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptLowerContr + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsUpperMisc + '+' + rsOptUpperContr + '(?=' + [rsBreak, rsUpper + rsLowerMisc, '$'].join('|') + ')',
  rsUpper + '?' + rsLowerMisc + '+' + rsOptLowerContr,
  rsUpper + '+' + rsOptUpperContr,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 'ss'
};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * _.camelCase('Foo Bar');
 * // => 'fooBar'
 *
 * _.camelCase('--foo-bar--');
 * // => 'fooBar'
 *
 * _.camelCase('__FOO_BAR__');
 * // => 'fooBar'
 */
var camelCase = createCompounder(function(result, word, index) {
  word = word.toLowerCase();
  return result + (index ? capitalize(word) : word);
});

/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('FRED');
 * // => 'Fred'
 */
function capitalize(string) {
  return upperFirst(toString(string).toLowerCase());
}

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

module.exports = camelCase;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = __webpack_require__(0);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _textures = __webpack_require__(2);

var _textures2 = _interopRequireDefault(_textures);

var _selection = __webpack_require__(3);

var _selection2 = _interopRequireDefault(_selection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lines = (_temp = _class = function (_Component) {
  _inherits(Lines, _Component);

  function Lines() {
    _classCallCheck(this, Lines);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Lines.prototype.render = function render() {
    var _this2 = this;

    var t = _textures2.default.lines();
    ['size', 'strokeWidth', 'orientation', 'shapeRendering', 'stroke', 'background', 'id'].forEach(function (key) {
      if (_this2.props[key]) t[key](_this2.props[key]);
    });
    var selection = new _selection2.default();
    t(selection);

    return selection.toReact(this.props.components);
  };

  return Lines;
}(_react.Component), _class.displayName = 'Lines', _class.defaultProps = {
  components: {
    defs: 'defs',
    g: 'g',
    circle: 'circle',
    rect: 'rect',
    pattern: 'pattern',
    path: 'path'
  }
}, _temp);
exports.default = Lines;
Lines.propTypes =  true ? {
  size: _propTypes2.default.number,
  strokeWidth: _propTypes2.default.number,
  orientation: _propTypes2.default.string,
  shapeRendering: _propTypes2.default.string,
  stroke: _propTypes2.default.string,
  background: _propTypes2.default.string,
  id: _propTypes2.default.string,
  components: _propTypes2.default.shape({
    defs: _propTypes2.default.node,
    g: _propTypes2.default.node,
    circle: _propTypes2.default.node,
    rect: _propTypes2.default.node,
    pattern: _propTypes2.default.node,
    path: _propTypes2.default.node
  })
} : {};
module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = __webpack_require__(0);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _textures = __webpack_require__(2);

var _textures2 = _interopRequireDefault(_textures);

var _selection = __webpack_require__(3);

var _selection2 = _interopRequireDefault(_selection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Paths = (_temp = _class = function (_Component) {
  _inherits(Paths, _Component);

  function Paths() {
    _classCallCheck(this, Paths);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Paths.prototype.render = function render() {
    var _this2 = this;

    var t = _textures2.default.paths();
    ['size', 'strokeWidth', 'shapeRendering', 'stroke', 'background', 'id', 'd'].forEach(function (key) {
      if (_this2.props[key]) t[key](_this2.props[key]);
    });
    var selection = new _selection2.default();
    t(selection);
    return selection.toReact(this.props.components);
  };

  return Paths;
}(_react.Component), _class.displayName = 'Paths', _class.defaultProps = {
  components: {
    defs: 'defs',
    g: 'g',
    circle: 'circle',
    rect: 'rect',
    pattern: 'pattern',
    path: 'path'
  }
}, _temp);
exports.default = Paths;
Paths.propTypes =  true ? {
  size: _propTypes2.default.number,
  strokeWidth: _propTypes2.default.number,
  d: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['squares', 'nylon', 'waves', 'woven', 'caps', 'crosses', 'hexagons']), _propTypes2.default.func]),
  shapeRendering: _propTypes2.default.string,
  stroke: _propTypes2.default.string,
  background: _propTypes2.default.string,
  id: _propTypes2.default.string,
  components: _propTypes2.default.shape({
    defs: _propTypes2.default.node,
    g: _propTypes2.default.node,
    circle: _propTypes2.default.node,
    rect: _propTypes2.default.node,
    pattern: _propTypes2.default.node,
    path: _propTypes2.default.node
  })
} : {};
module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var gradients = [{
  name: 'Berimbolo',
  colors: ['#02111D', '#037BB5', '#02111D']
}, {
  name: 'Mango',
  colors: ['#ffe259', '#ffa751']
}, {
  name: 'Windy',
  colors: ['#acb6e5', '#86fde8']
}, {
  name: 'Royal Blue',
  colors: ['#536976', '#292E49']
}, {
  name: 'Royal Blue + Petrol',
  colors: ['#BBD2C5', '#536976', '#292E49']
}, {
  name: 'Copper',
  colors: ['#B79891', '#94716B']
}, {
  name: 'Petrol',
  colors: ['#BBD2C5', '#536976']
}, {
  name: 'Sky',
  colors: ['#076585', '#fff']
}, {
  name: 'Sel',
  colors: ['#00467F', '#A5CC82']
}, {
  name: 'Skyline',
  colors: ['#1488CC', '#2B32B2']
}, {
  name: 'DIMIGO',
  colors: ['#ec008c', '#fc6767']
}, {
  name: 'Purple Love',
  colors: ['#cc2b5e', '#753a88']
}, {
  name: 'Sexy Blue',
  colors: ['#2193b0', '#6dd5ed']
}, {
  name: 'Blooker20',
  colors: ['#e65c00', '#F9D423']
}, {
  name: 'Sea Blue',
  colors: ['#2b5876', '#4e4376']
}, {
  name: 'Nimvelo',
  colors: ['#314755', '#26a0da']
}, {
  name: 'Hazel',
  colors: ['#77A1D3', '#79CBCA', '#E684AE']
}, {
  name: 'Noon to Dusk',
  colors: ['#ff6e7f', '#bfe9ff']
}, {
  name: 'YouTube',
  colors: ['#e52d27', '#b31217']
}, {
  name: 'Cool Brown',
  colors: ['#603813', '#b29f94']
}, {
  name: 'Harmonic Energy',
  colors: ['#16A085', '#F4D03F']
}, {
  name: 'Playing with Reds',
  colors: ['#D31027', '#EA384D']
}, {
  name: 'Sunny Days',
  colors: ['#EDE574', '#E1F5C4']
}, {
  name: 'Green Beach',
  colors: ['#02AAB0', '#00CDAC']
}, {
  name: 'Intuitive Purple',
  colors: ['#DA22FF', '#9733EE']
}, {
  name: 'Emerald Water',
  colors: ['#348F50', '#56B4D3']
}, {
  name: 'Lemon Twist',
  colors: ['#3CA55C', '#B5AC49']
}, {
  name: 'Monte Carlo',
  colors: ['#CC95C0', '#DBD4B4', '#7AA1D2']
}, {
  name: 'Horizon',
  colors: ['#003973', '#E5E5BE']
}, {
  name: 'Rose Water',
  colors: ['#E55D87', '#5FC3E4']
}, {
  name: 'Frozen',
  colors: ['#403B4A', '#E7E9BB']
}, {
  name: 'Mango Pulp',
  colors: ['#F09819', '#EDDE5D']
}, {
  name: 'Bloody Mary',
  colors: ['#FF512F', '#DD2476']
}, {
  name: 'Aubergine',
  colors: ['#AA076B', '#61045F']
}, {
  name: 'Aqua Marine',
  colors: ['#1A2980', '#26D0CE']
}, {
  name: 'Sunrise',
  colors: ['#FF512F', '#F09819']
}, {
  name: 'Purple Paradise',
  colors: ['#1D2B64', '#F8CDDA']
}, {
  name: 'Stripe',
  colors: ['#1FA2FF', '#12D8FA', '#A6FFCB']
}, {
  name: 'Sea Weed',
  colors: ['#4CB8C4', '#3CD3AD']
}, {
  name: 'Pinky',
  colors: ['#DD5E89', '#F7BB97']
}, {
  name: 'Cherry',
  colors: ['#EB3349', '#F45C43']
}, {
  name: 'Mojito',
  colors: ['#1D976C', '#93F9B9']
}, {
  name: 'Juicy Orange',
  colors: ['#FF8008', '#FFC837']
}, {
  name: 'Mirage',
  colors: ['#16222A', '#3A6073']
}, {
  name: 'Steel Gray',
  colors: ['#1F1C2C', '#928DAB']
}, {
  name: 'Kashmir',
  colors: ['#614385', '#516395']
}, {
  name: 'Electric Violet',
  colors: ['#4776E6', '#8E54E9']
}, {
  name: 'Venice Blue',
  colors: ['#085078', '#85D8CE']
}, {
  name: 'Bora Bora',
  colors: ['#2BC0E4', '#EAECC6']
}, {
  name: 'Moss',
  colors: ['#134E5E', '#71B280']
}, {
  name: 'Shroom Haze',
  colors: ['#5C258D', '#4389A2']
}, {
  name: 'Mystic',
  colors: ['#757F9A', '#D7DDE8']
}, {
  name: 'Midnight City',
  colors: ['#232526', '#414345']
}, {
  name: 'Sea Blizz',
  colors: ['#1CD8D2', '#93EDC7']
}, {
  name: 'Opa',
  colors: ['#3D7EAA', '#FFE47A']
}, {
  name: 'Titanium',
  colors: ['#283048', '#859398']
}, {
  name: 'Mantle',
  colors: ['#24C6DC', '#514A9D']
}, {
  name: 'Dracula',
  colors: ['#DC2424', '#4A569D']
}, {
  name: 'Peach',
  colors: ['#ED4264', '#FFEDBC']
}, {
  name: 'Moonrise',
  colors: ['#DAE2F8', '#D6A4A4']
}, {
  name: 'Clouds',
  colors: ['#ECE9E6', '#FFFFFF']
}, {
  name: 'Stellar',
  colors: ['#7474BF', '#348AC7']
}, {
  name: 'Bourbon',
  colors: ['#EC6F66', '#F3A183']
}, {
  name: 'Calm Darya',
  colors: ['#5f2c82', '#49a09d']
}, {
  name: 'Influenza',
  colors: ['#C04848', '#480048']
}, {
  name: 'Shrimpy',
  colors: ['#e43a15', '#e65245']
}, {
  name: 'Army',
  colors: ['#414d0b', '#727a17']
}, {
  name: 'Miaka',
  colors: ['#FC354C', '#0ABFBC']
}, {
  name: 'Pinot Noir',
  colors: ['#4b6cb7', '#182848']
}, {
  name: 'Day Tripper',
  colors: ['#f857a6', '#ff5858']
}, {
  name: 'Namn',
  colors: ['#a73737', '#7a2828']
}, {
  name: 'Blurry Beach',
  colors: ['#d53369', '#cbad6d']
}, {
  name: 'Vasily',
  colors: ['#e9d362', '#333333']
}, {
  name: 'A Lost Memory',
  colors: ['#DE6262', '#FFB88C']
}, {
  name: 'Petrichor',
  colors: ['#666600', '#999966']
}, {
  name: 'Jonquil',
  colors: ['#FFEEEE', '#DDEFBB']
}, {
  name: 'Sirius Tamed',
  colors: ['#EFEFBB', '#D4D3DD']
}, {
  name: 'Kyoto',
  colors: ['#c21500', '#ffc500']
}, {
  name: 'Misty Meadow',
  colors: ['#215f00', '#e4e4d9']
}, {
  name: 'Aqualicious',
  colors: ['#50C9C3', '#96DEDA']
}, {
  name: 'Moor',
  colors: ['#616161', '#9bc5c3']
}, {
  name: 'Almost',
  colors: ['#ddd6f3', '#faaca8']
}, {
  name: 'Forever Lost',
  colors: ['#5D4157', '#A8CABA']
}, {
  name: 'Winter',
  colors: ['#E6DADA', '#274046']
}, {
  name: 'Autumn',
  colors: ['#DAD299', '#B0DAB9']
}, {
  name: 'Candy',
  colors: ['#D3959B', '#BFE6BA']
}, {
  name: 'Reef',
  colors: ['#00d2ff', '#3a7bd5']
}, {
  name: 'The Strain',
  colors: ['#870000', '#190A05']
}, {
  name: 'Dirty Fog',
  colors: ['#B993D6', '#8CA6DB']
}, {
  name: 'Earthly',
  colors: ['#649173', '#DBD5A4']
}, {
  name: 'Virgin',
  colors: ['#C9FFBF', '#FFAFBD']
}, {
  name: 'Ash',
  colors: ['#606c88', '#3f4c6b']
}, {
  name: 'Shadow Night',
  colors: ['#000000', '#53346D']
}, {
  name: 'Cherryblossoms',
  colors: ['#FBD3E9', '#BB377D']
}, {
  name: 'Parklife',
  colors: ['#ADD100', '#7B920A']
}, {
  name: 'Dance To Forget',
  colors: ['#FF4E50', '#F9D423']
}, {
  name: 'Starfall',
  colors: ['#F0C27B', '#4B1248']
}, {
  name: 'Red Mist',
  colors: ['#000000', '#e74c3c']
}, {
  name: 'Teal Love',
  colors: ['#AAFFA9', '#11FFBD']
}, {
  name: 'Neon Life',
  colors: ['#B3FFAB', '#12FFF7']
}, {
  name: 'Man of Steel',
  colors: ['#780206', '#061161']
}, {
  name: 'Amethyst',
  colors: ['#9D50BB', '#6E48AA']
}, {
  name: 'Cheer Up Emo Kid',
  colors: ['#556270', '#FF6B6B']
}, {
  name: 'Shore',
  colors: ['#70e1f5', '#ffd194']
}, {
  name: 'Facebook Messenger',
  colors: ['#00c6ff', '#0072ff']
}, {
  name: 'SoundCloud',
  colors: ['#fe8c00', '#f83600']
}, {
  name: 'Behongo',
  colors: ['#52c234', '#061700']
}, {
  name: 'ServQuick',
  colors: ['#485563', '#29323c']
}, {
  name: 'Friday',
  colors: ['#83a4d4', '#b6fbff']
}, {
  name: 'Martini',
  colors: ['#FDFC47', '#24FE41']
}, {
  name: 'Metallic Toad',
  colors: ['#abbaab', '#ffffff']
}, {
  name: 'Between The Clouds',
  colors: ['#73C8A9', '#373B44']
}, {
  name: 'Crazy Orange I',
  colors: ['#D38312', '#A83279']
}, {
  name: 'Hersheys',
  colors: ['#1e130c', '#9a8478']
}, {
  name: 'Talking To Mice Elf',
  colors: ['#948E99', '#2E1437']
}, {
  name: 'Purple Bliss',
  colors: ['#360033', '#0b8793']
}, {
  name: 'Predawn',
  colors: ['#FFA17F', '#00223E']
}, {
  name: 'Endless River',
  colors: ['#43cea2', '#185a9d']
}, {
  name: 'Pastel Orange at the Sun',
  colors: ['#ffb347', '#ffcc33']
}, {
  name: 'Twitch',
  colors: ['#6441A5', '#2a0845']
}, {
  name: 'Atlas',
  colors: ['#FEAC5E', '#C779D0', '#4BC0C8']
}, {
  name: 'Instagram',
  colors: ['#833ab4', '#fd1d1d', '#fcb045']
}, {
  name: 'Flickr',
  colors: ['#ff0084', '#33001b']
}, {
  name: 'Vine',
  colors: ['#00bf8f', '#001510']
}, {
  name: 'Turquoise flow',
  colors: ['#136a8a', '#267871']
}, {
  name: 'Portrait',
  colors: ['#8e9eab', '#eef2f3']
}, {
  name: 'Virgin America',
  colors: ['#7b4397', '#dc2430']
}, {
  name: 'Koko Caramel',
  colors: ['#D1913C', '#FFD194']
}, {
  name: 'Fresh Turboscent',
  colors: ['#F1F2B5', '#135058']
}, {
  name: 'Green to dark',
  colors: ['#6A9113', '#141517']
}, {
  name: 'Ukraine',
  colors: ['#004FF9', '#FFF94C']
}, {
  name: 'Curiosity blue',
  colors: ['#525252', '#3d72b4']
}, {
  name: 'Dark Knight',
  colors: ['#BA8B02', '#181818']
}, {
  name: 'Piglet',
  colors: ['#ee9ca7', '#ffdde1']
}, {
  name: 'Lizard',
  colors: ['#304352', '#d7d2cc']
}, {
  name: 'Sage Persuasion',
  colors: ['#CCCCB2', '#757519']
}, {
  name: 'Between Night and Day',
  colors: ['#2c3e50', '#3498db']
}, {
  name: 'Timber',
  colors: ['#fc00ff', '#00dbde']
}, {
  name: 'Passion',
  colors: ['#e53935', '#e35d5b']
}, {
  name: 'Clear Sky',
  colors: ['#005C97', '#363795']
}, {
  name: 'Master Card',
  colors: ['#f46b45', '#eea849']
}, {
  name: 'Back To Earth',
  colors: ['#00C9FF', '#92FE9D']
}, {
  name: 'Deep Purple',
  colors: ['#673AB7', '#512DA8']
}, {
  name: 'Little Leaf',
  colors: ['#76b852', '#8DC26F']
}, {
  name: 'Netflix',
  colors: ['#8E0E00', '#1F1C18']
}, {
  name: 'Light Orange',
  colors: ['#FFB75E', '#ED8F03']
}, {
  name: 'Green and Blue',
  colors: ['#c2e59c', '#64b3f4']
}, {
  name: 'Poncho',
  colors: ['#403A3E', '#BE5869']
}, {
  name: 'Back to the Future',
  colors: ['#C02425', '#F0CB35']
}, {
  name: 'Blush',
  colors: ['#B24592', '#F15F79']
}, {
  name: 'Inbox',
  colors: ['#457fca', '#5691c8']
}, {
  name: 'Purplin',
  colors: ['#6a3093', '#a044ff']
}, {
  name: 'Pale Wood',
  colors: ['#eacda3', '#d6ae7b']
}, {
  name: 'Haikus',
  colors: ['#fd746c', '#ff9068']
}, {
  name: 'Pizelex',
  colors: ['#114357', '#F29492']
}, {
  name: 'Joomla',
  colors: ['#1e3c72', '#2a5298']
}, {
  name: 'Christmas',
  colors: ['#2F7336', '#AA3A38']
}, {
  name: 'Minnesota Vikings',
  colors: ['#5614B0', '#DBD65C']
}, {
  name: 'Miami Dolphins',
  colors: ['#4DA0B0', '#D39D38']
}, {
  name: 'Forest',
  colors: ['#5A3F37', '#2C7744']
}, {
  name: 'Nighthawk',
  colors: ['#2980b9', '#2c3e50']
}, {
  name: 'Superman',
  colors: ['#0099F7', '#F11712']
}, {
  name: 'Suzy',
  colors: ['#834d9b', '#d04ed6']
}, {
  name: 'Dark Skies',
  colors: ['#4B79A1', '#283E51']
}, {
  name: 'Deep Space',
  colors: ['#000000', '#434343']
}, {
  name: 'Decent',
  colors: ['#4CA1AF', '#C4E0E5']
}, {
  name: 'Colors Of Sky',
  colors: ['#E0EAFC', '#CFDEF3']
}, {
  name: 'Purple White',
  colors: ['#BA5370', '#F4E2D8']
}, {
  name: 'Ali',
  colors: ['#ff4b1f', '#1fddff']
}, {
  name: 'Alihossein',
  colors: ['#f7ff00', '#db36a4']
}, {
  name: 'Shahabi',
  colors: ['#a80077', '#66ff00']
}, {
  name: 'Red Ocean',
  colors: ['#1D4350', '#A43931']
}, {
  name: 'Tranquil',
  colors: ['#EECDA3', '#EF629F']
}, {
  name: 'Transfile',
  colors: ['#16BFFD', '#CB3066']
}, {
  name: 'Sylvia',
  colors: ['#ff4b1f', '#ff9068']
}, {
  name: 'Sweet Morning',
  colors: ['#FF5F6D', '#FFC371']
}, {
  name: 'Politics',
  colors: ['#2196f3', '#f44336']
}, {
  name: 'Bright Vault',
  colors: ['#00d2ff', '#928DAB']
}, {
  name: 'Solid Vault',
  colors: ['#3a7bd5', '#3a6073']
}, {
  name: 'Sunset',
  colors: ['#0B486B', '#F56217']
}, {
  name: 'Grapefruit Sunset',
  colors: ['#e96443', '#904e95']
}, {
  name: 'Deep Sea Space',
  colors: ['#2C3E50', '#4CA1AF']
}, {
  name: 'Dusk',
  colors: ['#2C3E50', '#FD746C']
}, {
  name: 'Minimal Red',
  colors: ['#F00000', '#DC281E']
}, {
  name: 'Royal',
  colors: ['#141E30', '#243B55']
}, {
  name: 'Mauve',
  colors: ['#42275a', '#734b6d']
}, {
  name: 'Frost',
  colors: ['#000428', '#004e92']
}, {
  name: 'Lush',
  colors: ['#56ab2f', '#a8e063']
}, {
  name: 'Firewatch',
  colors: ['#cb2d3e', '#ef473a']
}, {
  name: 'Sherbert',
  colors: ['#f79d00', '#64f38c']
}, {
  name: 'Blood Red',
  colors: ['#f85032', '#e73827']
}, {
  name: 'Sun on the Horizon',
  colors: ['#fceabb', '#f8b500']
}, {
  name: 'IIIT Delhi',
  colors: ['#808080', '#3fada8']
}, {
  name: 'Dusk',
  colors: ['#ffd89b', '#19547b']
}, {
  name: '50 Shades of Grey',
  colors: ['#bdc3c7', '#2c3e50']
}, {
  name: 'Dania',
  colors: ['#BE93C5', '#7BC6CC']
}, {
  name: 'Limeade',
  colors: ['#A1FFCE', '#FAFFD1']
}, {
  name: 'Disco',
  colors: ['#4ECDC4', '#556270']
}, {
  name: 'Love Couple',
  colors: ['#3a6186', '#89253e']
}, {
  name: 'Azure Pop',
  colors: ['#ef32d9', '#89fffd']
}, {
  name: 'Nepal',
  colors: ['#de6161', '#2657eb']
}, {
  name: 'Cosmic Fusion',
  colors: ['#ff00cc', '#333399']
}, {
  name: 'Snapchat',
  colors: ['#fffc00', '#ffffff']
}, {
  name: 'Ed\'s Sunset Gradient',
  colors: ['#ff7e5f', '#feb47b']
}, {
  name: 'Brady Brady Fun Fun',
  colors: ['#00c3ff', '#ffff1c']
}, {
  name: 'Black Ros\xE9',
  colors: ['#f4c4f3', '#fc67fa']
}, {
  name: '80\'s Purple',
  colors: ['#41295a', '#2F0743']
}, {
  name: 'Radar',
  colors: ['#A770EF', '#CF8BF3', '#FDB99B']
}, {
  name: 'Ibiza Sunset',
  colors: ['#ee0979', '#ff6a00']
}, {
  name: 'Dawn',
  colors: ['#F3904F', '#3B4371']
}, {
  name: 'Mild',
  colors: ['#67B26F', '#4ca2cd']
}, {
  name: 'Vice City',
  colors: ['#3494E6', '#EC6EAD']
}, {
  name: 'Jaipur',
  colors: ['#DBE6F6', '#C5796D']
}, {
  name: 'Jodhpur',
  colors: ['#9CECFB', '#65C7F7', '#0052D4']
}, {
  name: 'Cocoaa Ice',
  colors: ['#c0c0aa', '#1cefff']
}, {
  name: 'EasyMed',
  colors: ['#DCE35B', '#45B649']
}, {
  name: 'Rose Colored Lenses',
  colors: ['#E8CBC0', '#636FA4']
}, {
  name: 'What lies Beyond',
  colors: ['#F0F2F0', '#000C40']
}, {
  name: 'Roseanna',
  colors: ['#FFAFBD', '#ffc3a0']
}, {
  name: 'Honey Dew',
  colors: ['#43C6AC', '#F8FFAE']
}, {
  name: 'Under the Lake',
  colors: ['#093028', '#237A57']
}, {
  name: 'The Blue Lagoon',
  colors: ['#43C6AC', '#191654']
}, {
  name: 'Can You Feel The Love Tonight',
  colors: ['#4568DC', '#B06AB3']
}, {
  name: 'Very Blue',
  colors: ['#0575E6', '#021B79']
}, {
  name: 'Love and Liberty',
  colors: ['#200122', '#6f0000']
}, {
  name: 'Orca',
  colors: ['#44A08D', '#093637']
}, {
  name: 'Venice',
  colors: ['#6190E8', '#A7BFE8']
}, {
  name: 'Pacific Dream',
  colors: ['#34e89e', '#0f3443']
}, {
  name: 'Learning and Leading',
  colors: ['#F7971E', '#FFD200']
}, {
  name: 'Celestial',
  colors: ['#C33764', '#1D2671']
}, {
  name: 'Purplepine',
  colors: ['#20002c', '#cbb4d4']
}, {
  name: 'Sha la la',
  colors: ['#D66D75', '#E29587']
}, {
  name: 'Mini',
  colors: ['#30E8BF', '#FF8235']
}, {
  name: 'Maldives',
  colors: ['#B2FEFA', '#0ED2F7']
}, {
  name: 'Cinnamint',
  colors: ['#4AC29A', '#BDFFF3']
}, {
  name: 'Html',
  colors: ['#E44D26', '#F16529']
}, {
  name: 'Coal',
  colors: ['#EB5757', '#000000']
}, {
  name: 'Sunkist',
  colors: ['#F2994A', '#F2C94C']
}, {
  name: 'Blue Skies',
  colors: ['#56CCF2', '#2F80ED']
}, {
  name: 'Chitty Chitty Bang Bang',
  colors: ['#007991', '#78ffd6']
}, {
  name: 'Visions of Grandeur',
  colors: ['#000046', '#1CB5E0']
}, {
  name: 'Crystal Clear',
  colors: ['#159957', '#155799']
}, {
  name: 'Mello',
  colors: ['#c0392b', '#8e44ad']
}, {
  name: 'Compare Now',
  colors: ['#EF3B36', '#FFFFFF']
}, {
  name: 'Meridian',
  colors: ['#283c86', '#45a247']
}, {
  name: 'Relay',
  colors: ['#3A1C71', '#D76D77', '#FFAF7B']
}, {
  name: 'Alive',
  colors: ['#CB356B', '#BD3F32']
}, {
  name: 'Scooter',
  colors: ['#36D1DC', '#5B86E5']
}, {
  name: 'Terminal',
  colors: ['#000000', '#0f9b0f']
}, {
  name: 'Telegram',
  colors: ['#1c92d2', '#f2fcfe']
}, {
  name: 'Crimson Tide',
  colors: ['#642B73', '#C6426E']
}, {
  name: 'Socialive',
  colors: ['#06beb6', '#48b1bf']
}, {
  name: 'Subu',
  colors: ['#0cebeb', '#20e3b2', '#29ffc6']
}, {
  name: 'Shift',
  colors: ['#000000', '#E5008D', '#FF070B']
}, {
  name: 'Clot',
  colors: ['#070000', '#4C0001', '#070000']
}, {
  name: 'Broken Hearts',
  colors: ['#d9a7c7', '#fffcdc']
}, {
  name: 'Kimoby Is The New Blue',
  colors: ['#396afc', '#2948ff']
}, {
  name: 'Dull',
  colors: ['#C9D6FF', '#E2E2E2']
}, {
  name: 'Purpink',
  colors: ['#7F00FF', '#E100FF']
}, {
  name: 'Orange Coral',
  colors: ['#ff9966', '#ff5e62']
}, {
  name: 'Summer',
  colors: ['#22c1c3', '#fdbb2d']
}, {
  name: 'King Yna',
  colors: ['#1a2a6c', '#b21f1f', '#fdbb2d']
}, {
  name: 'Velvet Sun',
  colors: ['#e1eec3', '#f05053']
}, {
  name: 'Zinc',
  colors: ['#ADA996', '#F2F2F2', '#DBDBDB', '#EAEAEA']
}, {
  name: 'Hydrogen',
  colors: ['#667db6', '#0082c8', '#0082c8', '#667db6']
}, {
  name: 'Argon',
  colors: ['#03001e', '#7303c0', '#ec38bc', '#fdeff9']
}, {
  name: 'Lithium',
  colors: ['#6D6027', '#D3CBB8']
}, {
  name: 'Digital Water',
  colors: ['#74ebd5', '#ACB6E5']
}, {
  name: 'Velvet Sun',
  colors: ['#e1eec3', '#f05053']
}, {
  name: 'Orange Fun',
  colors: ['#fc4a1a', '#f7b733']
}, {
  name: 'Rainbow Blue',
  colors: ['#00F260', '#0575E6']
}, {
  name: 'Pink Flavour',
  colors: ['#800080', '#ffc0cb']
}, {
  name: 'Sulphur',
  colors: ['#CAC531', '#F3F9A7']
}, {
  name: 'Selenium',
  colors: ['#3C3B3F', '#605C3C']
}, {
  name: 'Delicate',
  colors: ['#D3CCE3', '#E9E4F0']
}, {
  name: 'Ohhappiness',
  colors: ['#00b09b', '#96c93d']
}, {
  name: 'Lawrencium',
  colors: ['#0f0c29', '#302b63', '#24243e']
}, {
  name: 'Relaxing red',
  colors: ['#fffbd5', '#b20a2c']
}, {
  name: 'Taran Tado',
  colors: ['#23074d', '#cc5333']
}, {
  name: 'Bighead',
  colors: ['#c94b4b', '#4b134f']
}, {
  name: 'Sublime Vivid',
  colors: ['#FC466B', '#3F5EFB']
}, {
  name: 'Sublime Light',
  colors: ['#FC5C7D', '#6A82FB']
}, {
  name: 'Pun Yeta',
  colors: ['#108dc7', '#ef8e38']
}, {
  name: 'Quepal',
  colors: ['#11998e', '#38ef7d']
}, {
  name: 'Sand to Blue',
  colors: ['#3E5151', '#DECBA4']
}, {
  name: 'Wedding Day Blues',
  colors: ['#40E0D0', '#FF8C00', '#FF0080']
}, {
  name: 'Shifter',
  colors: ['#bc4e9c', '#f80759']
}, {
  name: 'Red Sunset',
  colors: ['#355C7D', '#6C5B7B', '#C06C84']
}, {
  name: 'Moon Purple',
  colors: ['#4e54c8', '#8f94fb']
}, {
  name: 'Pure Lust',
  colors: ['#333333', '#dd1818']
}, {
  name: 'Slight Ocean View',
  colors: ['#a8c0ff', '#3f2b96']
}, {
  name: 'eXpresso',
  colors: ['#ad5389', '#3c1053']
}, {
  name: 'Shifty',
  colors: ['#636363', '#a2ab58']
}, {
  name: 'Vanusa',
  colors: ['#DA4453', '#89216B']
}, {
  name: 'Evening Night',
  colors: ['#005AA7', '#FFFDE4']
}];


var GRADIENTS_HASH = gradients.reduce(function (acc, g) {
  return _extends({}, acc, _defineProperty({}, g.name.toLowerCase(), g.colors));
}, {});

var GRADIENT_NAMES = Object.keys(GRADIENTS_HASH);

var randomGradientName = function randomGradientName() {
  var index = Math.floor(Math.random() * GRADIENT_NAMES.length);
  return GRADIENT_NAMES[index];
};

var LinearGradient = function (_Component) {
  _inherits(LinearGradient, _Component);

  function LinearGradient() {
    _classCallCheck(this, LinearGradient);

    return _possibleConstructorReturn(this, (LinearGradient.__proto__ || Object.getPrototypeOf(LinearGradient)).apply(this, arguments));
  }

  _createClass(LinearGradient, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          colors = _props.colors,
          components = _props.components,
          offsets = _props.offsets,
          rest = _objectWithoutProperties(_props, ['name', 'colors', 'components', 'offsets']);

      var finalColors = colors || GRADIENTS_HASH[name || randomGradientName()];
      var numColors = finalColors.length;

      return _react2.default.createElement(
        components.linearGradient,
        rest,
        finalColors.map(function (color, i) {
          return _react2.default.createElement(components.stop, {
            key: color,
            stopColor: color
            // offset={offsets[i]}
            , offset: offsets[i] || 100 / numColors * i + '%'
          });
        })
      );
    }
  }]);

  return LinearGradient;
}(_react.Component);

LinearGradient.propTypes = {
  components: _propTypes2.default.shape({
    linearGradient: _propTypes2.default.node,
    stop: _propTypes2.default.node
  }),
  name: _propTypes2.default.oneOf(GRADIENT_NAMES),
  colors: _propTypes2.default.array,
  offsets: _propTypes2.default.arrayOf(_propTypes2.default.string)
};
LinearGradient.defaultProps = {
  components: {
    linearGradient: 'linearGradient',
    stop: 'stop'
  },
  offsets: []
};
exports.default = LinearGradient;

/***/ })
/******/ ]);
});
//# sourceMappingURL=potion-extra.js.map