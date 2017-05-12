'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStamp = require('react-stamp');

var _reactStamp2 = _interopRequireDefault(_reactStamp);

var _itsSet = require('its-set');

var _itsSet2 = _interopRequireDefault(_itsSet);

var _isFunction = require('lodash/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _d3Transition = require('d3-transition');

var _d3Interpolate = require('d3-interpolate');

var _SelectSelfMixin = require('./mixins/SelectSelfMixin');

var _SelectSelfMixin2 = _interopRequireDefault(_SelectSelfMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStamp2.default)(_react2.default).compose(_SelectSelfMixin2.default, {

  displayName: 'Shape',

  state: {
    didEnter: false
  },

  init: function init() {
    this.attrNames = this.getAttrNames();
    this.derivedAttrNames = this.getDerivedAttrNames();
    this.derivedAttrInputNames = this.getDerivedAttrInputNames();
    this.attrs = this.getAttrs(this.props);
  },
  componentWillAppearOrEnter: function componentWillAppearOrEnter(callback) {
    var _this = this;

    var _props = this.props,
        _key = _props._key,
        enterDuration = _props.enterDuration,
        datum = _props.datum,
        data = _props.data,
        index = _props.index,
        enterDatum = _props.enterDatum;

    var calculatedEnterDatum = enterDatum(this.props);
    var enterAttrs = this.getAttrsFromDatum(calculatedEnterDatum);
    var enterStyle = this.getStyleFromDatum(calculatedEnterDatum);

    this.selection = this.selectSelf();

    this.applyAttrsToSelection(enterAttrs, this.selection);
    this.applyStyleToSelection(enterStyle, this.selection);
    this.applyDerivedAttrsToSelection(this.props, calculatedEnterDatum, this.selection);

    this.transition = this.selection.transition().duration(enterDuration);

    this.tweenDerivedAttrs(calculatedEnterDatum, datum, this.props, transition);
    this.applyAttrsToSelection(this.attrs, transition);
    this.applyStyleToSelection(this.getStyle(this.props), transition);

    transition.on('end', function () {
      _this.setState((0, _assign2.default)({}, _this.attrs, { didEnter: true }), callback);
    });
  },
  componentWillAppear: function componentWillAppear(callback) {
    this.componentWillAppearOrEnter(callback);
  },
  componentWillEnter: function componentWillEnter(callback) {
    this.componentWillAppearOrEnter(callback);
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextState) {
    var _this2 = this;

    var _key = nextProps._key,
        updateDuration = nextProps.updateDuration;

    var nextAttrs = this.getAttrs(nextProps);
    var nextStyle = this.getStyle(nextProps);

    this.selection = this.selectSelf();

    this.transition.transition().duration(updateDuration);

    this.applyAttrsToSelection(nextAttrs, transition);
    this.applyStyleToSelection(nextStyle, transition);

    if (this.state.didEnter) {
      this.tweenDerivedAttrs(this.props.datum, nextProps.datum, nextProps, transition);
    } else {
      // TODO: only set state for derived attrs
    }

    transition.on('end', function () {
      _this2.setState(nextAttrs);
    });
  },
  componentWillLeave: function componentWillLeave(callback) {
    var _props2 = this.props,
        exitDatum = _props2.exitDatum,
        exitDuration = _props2.exitDuration,
        _key = _props2._key,
        datum = _props2.datum,
        index = _props2.index,
        data = _props2.data;

    var computedExitDatum = exitDatum(this.props);
    var exitAttrs = this.getAttrsFromDatum(computedExitDatum);
    var exitStyle = this.getStyleFromDatum(computedExitDatum);

    this.transition.transition().duration(exitDuration);

    this.applyAttrsToSelection(exitAttrs, transition);
    this.applyStyleToSelection(exitStyle, transition);
    this.tweenDerivedAttrs(this.props.datum, computedExitDatum, this.props, transition);

    transition.on('end', callback);
  },
  componentWillUnmount: function componentWillUnmount() {
    this.transition.interrupt();
  },
  getAttrNames: function getAttrNames() {
    return [];
  },
  getDerivedAttrNames: function getDerivedAttrNames() {
    return [];
  },
  getDerivedAttrInputNames: function getDerivedAttrInputNames() {
    return [];
  },
  applyAttrsToSelection: function applyAttrsToSelection(attrs, selection) {
    if (!(0, _itsSet2.default)(attrs)) return;
    this.attrNames.concat(this.derivedAttrNames).forEach(function (name) {
      (0, _itsSet2.default)(attrs[name]) && selection.attr(name, attrs[name]);
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
    var datum = props.datum,
        data = props.data,
        index = props.index;


    return (attrNames || this.attrNames).reduce(function (acc, key) {
      var prop = props[key];
      if (!(0, _itsSet2.default)(prop)) return acc;
      if ((0, _isFunction2.default)(prop)) prop = prop(props);
      return (0, _assign2.default)({}, acc, (0, _defineProperty3.default)({}, key, prop));
    }, {});
  },
  getStyle: function getStyle(props) {
    var style = props.style,
        datum = props.datum,
        data = props.data,
        index = props.index;

    if ((0, _isFunction2.default)(style)) return style(props);
    return style;
  },
  applyDerivedAttrsToSelection: function applyDerivedAttrsToSelection(props, datum, selection) {
    var _this3 = this;

    this.derivedAttrNames.forEach(function (key) {
      _this3.applyAttrsToSelection((0, _defineProperty3.default)({}, key, _this3.getDerivationMethod(key, props)(datum)), selection);
    });
  },
  tweenDerivedAttrs: function tweenDerivedAttrs(fromDatum, toDatum, props, transition) {
    var _this4 = this;

    this.derivedAttrNames.forEach(function (key) {
      _this4.attrTween(key, fromDatum, toDatum, transition, _this4.getDerivationMethod(key, props));
    });
  },
  attrTween: function attrTween(attrName, fromDatum, toDatum, transition, derivationMethod) {
    var derivedAttrInputNames = this.derivedAttrInputNames[attrName];

    var keysToInterpolate = (0, _keys2.default)(toDatum).filter(function (key) {
      return derivedAttrInputNames.includes(key);
    });

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
  getDerivedAttrs: function getDerivedAttrs(props) {
    var _this5 = this;

    return this.derivedAttrNames.reduce(function (acc, key) {
      return (0, _assign2.default)({}, acc, (0, _defineProperty3.default)({}, key, _this5.getDerivedAttr(key)));
    }, {});
  }
});