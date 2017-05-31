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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStamp = require('react-stamp');

var _reactStamp2 = _interopRequireDefault(_reactStamp);

var _itsSet = require('its-set');

var _itsSet2 = _interopRequireDefault(_itsSet);

var _isFunction = require('lodash/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _uniq = require('lodash/uniq');

var _uniq2 = _interopRequireDefault(_uniq);

var _d3Interpolate = require('d3-interpolate');

var _d3Ease = require('d3-ease');

var ease = _interopRequireWildcard(_d3Ease);

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

require('d3-transition');

var _SelectSelfMixin = require('./mixins/SelectSelfMixin');

var _SelectSelfMixin2 = _interopRequireDefault(_SelectSelfMixin);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStamp2.default)(_react2.default).compose(_SelectSelfMixin2.default, {

  displayName: 'AnimatedElement',

  state: {
    didEnter: false
  },

  defaultProps: {
    datum: {},
    enterDatum: function enterDatum(_ref) {
      var datum = _ref.datum;
      return datum;
    },
    exitDatum: function exitDatum(_ref2) {
      var datum = _ref2.datum;
      return datum;
    },
    enterEase: 'easeLinear',
    updateEase: 'easeLinear',
    exitEase: 'easeLinear',
    enterDuration: 0,
    updateDuration: 0,
    exitDuration: 0,
    propsToCheckForChanges: []
  },

  init: function init() {
    var _this = this;

    this.attrNames = this.getAttrNames();
    this.derivedAttrNames = this.getDerivedAttrNames();
    this.derivedAttrDefaults = this.getDerivedAttrDefaults();
    this.derivedAttrInputNames = this.getDerivedAttrInputNames();
    this.derivedAttrSelectors = this.getDerivedAttrSelectors();
    this.allAttrInputNames = this.attrNames.concat((0, _keys2.default)(this.derivedAttrInputNames).reduce(function (acc, key) {
      return acc.concat(_this.derivedAttrInputNames[key]);
    }, []));
    this.allDerivedAttrInputNames = (0, _uniq2.default)((0, _keys2.default)(this.derivedAttrInputNames).reduce(function (acc, key) {
      return acc.concat(_this.derivedAttrInputNames[key]);
    }, []));
    this.state = this.attrs = this.getAttrs(this.props);
  },
  componentWillAppearOrEnter: function componentWillAppearOrEnter(callback) {
    var _this2 = this;

    var _props = this.props,
        enterDuration = _props.enterDuration,
        enterDatum = _props.enterDatum,
        enterEase = _props.enterEase;

    var calculatedEnterDatum = this.assignAbsolutePropsToDatum(enterDatum(this.props), this.props);
    var enterAttrs = this.getAttrsFromDatum(calculatedEnterDatum);
    var enterStyle = this.getStyleFromDatum(calculatedEnterDatum);

    this.selection = this.selectSelf();

    this.applyAttrsToSelection(enterAttrs, this.selection);
    this.applyStyleToSelection(enterStyle, this.selection);
    this.applyDerivedAttrsToSelection(this.props, calculatedEnterDatum, this.selection);

    var transition = this.selection.transition().duration(enterDuration).ease(ease[enterEase]);

    this.tweenDerivedAttrs(calculatedEnterDatum, this.assignAbsolutePropsToDatum(this.getDatum(this.props), this.props), this.props, transition);
    this.applyAttrsToSelection(this.attrs, transition);
    this.applyStyleToSelection(this.getStyle(this.props), transition);

    transition.on('interrupt', callback);
    transition.on('end', function () {
      _this2.setState(_this2.attrs, callback);
    });
  },
  componentWillAppear: function componentWillAppear(callback) {
    this.componentWillAppearOrEnter(callback);
  },
  componentWillEnter: function componentWillEnter(callback) {
    this.componentWillAppearOrEnter(callback);
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var _this3 = this;

    var propsToCheckForChanges = this.attrNames.concat(this.allDerivedAttrInputNames).concat(nextProps.propsToCheckForChanges);

    if ((0, _deepEqual2.default)(this.getAttrs(this.props, propsToCheckForChanges), this.getAttrs(nextProps, propsToCheckForChanges))) return;

    var updateDuration = nextProps.updateDuration,
        updateEase = nextProps.updateEase;

    var nextAttrs = this.getAttrs(nextProps);
    var nextStyle = this.getStyle(nextProps);

    this.selection = this.selectSelf();

    var transition = this.selection.transition().duration(updateDuration).ease(ease[updateEase]);

    this.applyAttrsToSelection(nextAttrs, transition);
    this.applyStyleToSelection(nextStyle, transition);
    this.tweenDerivedAttrs(this.assignAbsolutePropsToDatum(this.getDatum(this.props), this.props), this.assignAbsolutePropsToDatum(this.getDatum(nextProps), nextProps), nextProps, transition);

    transition.on('end', function () {
      _this3.setState(nextAttrs);
      // TODO + derived attrs
    });
  },
  componentWillLeave: function componentWillLeave(callback) {
    var _props2 = this.props,
        exitDatum = _props2.exitDatum,
        exitDuration = _props2.exitDuration,
        exitEase = _props2.exitEase;

    var computedExitDatum = this.assignAbsolutePropsToDatum(exitDatum(this.props), this.props);
    var exitAttrs = this.getAttrsFromDatum(computedExitDatum);
    var exitStyle = this.getStyleFromDatum(computedExitDatum);

    var transition = this.selection.transition().duration(exitDuration).ease(ease[exitEase]);

    this.applyAttrsToSelection(exitAttrs, transition);
    this.applyStyleToSelection(exitStyle, transition);
    this.tweenDerivedAttrs(this.assignAbsolutePropsToDatum(this.getDatum(this.props), this.props), computedExitDatum, this.props, transition);

    this.leaveTimeout = setTimeout(callback, exitDuration);
    this.leaveCallback = callback;
  },
  componentWillUnmount: function componentWillUnmount() {
    this.selection.interrupt();
    clearTimeout(this.leaveTimeout);
    // if (isFunction(this.leaveCallback)) this.leaveCallback();
    // delete this.leaveCallback;
  },
  getAttrNames: function getAttrNames() {
    return [];
  },
  getDerivedAttrNames: function getDerivedAttrNames() {
    return [];
  },
  getDerivedAttrDefaults: function getDerivedAttrDefaults() {
    return {};
  },
  getDerivedAttrInputNames: function getDerivedAttrInputNames() {
    return [];
  },
  getDerivedAttrSelectors: function getDerivedAttrSelectors() {
    return {};
  },
  getDatum: function getDatum(props) {
    var datum = props.datum;

    return (0, _isFunction2.default)(datum) ? datum(props) : datum;
  },
  assignAbsolutePropsToDatum: function assignAbsolutePropsToDatum(datum, props) {
    return this.allAttrInputNames.filter(function (name) {
      return !(0, _isFunction2.default)(props[name]);
    }).reduce(function (acc, name) {
      return (0, _assign2.default)({}, acc, (0, _defineProperty3.default)({}, name, props[name]));
    }, (0, _assign2.default)({}, datum));
  },
  applyAttrsToSelection: function applyAttrsToSelection(attrs, selection, selector) {
    if (!(0, _itsSet2.default)(attrs)) return;
    this.attrNames.concat(this.derivedAttrNames).forEach(function (name) {
      if ((0, _itsSet2.default)(attrs[name])) {
        if ((0, _itsSet2.default)(selector)) {
          selection.select(selector).attr(name, attrs[name]);
        } else {
          selection.attr(name, attrs[name]);
        }
      }
    });
  },
  applyStyleToSelection: function applyStyleToSelection(style, selection) {
    if (!(0, _itsSet2.default)(style)) return;
    (0, _keys2.default)(style).forEach(function (name) {
      selection.attr(name, style[name]);
    });
  },
  getAttrsFromDatum: function getAttrsFromDatum(datum) {
    return this.getAttrs((0, _assign2.default)({}, this.props, { datum: datum }));
  },
  getStyleFromDatum: function getStyleFromDatum(datum) {
    return this.getStyle((0, _assign2.default)({}, this.props, { datum: datum }));
  },
  getAttrs: function getAttrs(props, attrNames) {
    var _this4 = this;

    return (attrNames || this.attrNames).reduce(function (acc, key) {
      var prop = props[key];
      if (!(0, _itsSet2.default)(prop)) return acc;
      if ((0, _isFunction2.default)(prop) && (0, _itsSet2.default)(props.datum)) {
        prop = prop((0, _assign2.default)({}, props, { datum: _this4.getDatum(props) }));
      }
      return (0, _assign2.default)({}, _this4.attrDefaults, acc, (0, _defineProperty3.default)({}, key, prop));
    }, {});
  },
  getStyle: function getStyle(props) {
    var style = props.style;

    if ((0, _isFunction2.default)(style)) return style(props);
    return style;
  },
  applyDerivedAttrsToSelection: function applyDerivedAttrsToSelection(props, datum, selection) {
    var _this5 = this;

    this.derivedAttrNames.forEach(function (key) {
      _this5.applyAttrsToSelection((0, _defineProperty3.default)({}, key, _this5.getDerivationMethod(key, props)(datum)), selection, _this5.derivedAttrSelectors[key]);
    });
  },
  tweenDerivedAttrs: function tweenDerivedAttrs(fromDatum, toDatum, props, transition) {
    var _this6 = this;

    this.derivedAttrNames.forEach(function (key) {
      _this6.attrTween(key, fromDatum, toDatum, transition, _this6.getDerivationMethod(key, props));
    });
  },
  attrTween: function attrTween(attrName, fromDatum, toDatum, transition, derivationMethod) {
    // TODO: put whitelist datum keys prop on collection to minimize num interpolations
    var keysToInterpolate = (0, _keys2.default)(toDatum);

    var interpolater = keysToInterpolate.reduce(function (acc, key) {
      return (0, _assign2.default)({}, acc, (0, _defineProperty3.default)({}, key, (0, _d3Interpolate.interpolate)(fromDatum[key], toDatum[key])));
    }, {});

    transition.attrTween(attrName, function () {
      return function (t) {
        var midDatum = {};
        keysToInterpolate.forEach(function (key) {
          midDatum[key] = interpolater[key](t);
        });
        return derivationMethod(midDatum);
      };
    });
  },
  getDerivedAttrs: function getDerivedAttrs() {
    var _this7 = this;

    return this.derivedAttrNames.reduce(function (acc, key) {
      return (0, _assign2.default)({}, acc, (0, _defineProperty3.default)({}, key, _this7.getDerivedAttr(key)));
    }, {});
  }
});