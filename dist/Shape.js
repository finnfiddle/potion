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

var _pick = require('lodash/pick');

var _pick2 = _interopRequireDefault(_pick);

require('d3-transition');

var _SelectSelfMixin = require('./mixins/SelectSelfMixin');

var _SelectSelfMixin2 = _interopRequireDefault(_SelectSelfMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStamp2.default)(_react2.default).compose(_SelectSelfMixin2.default, {

  displayName: 'Shape',

  init: function init() {
    this.attrNames = this.getAttrNames();
    this.derivedAttrNames = this.getDerivedAttrNames();
    this.state = this.attrs = this.getAttrs(this.props);
    this.style = this.getStyle(this.props);
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

    var calculatedEnterDatum = enterDatum(datum, index, data);
    var enterAttrs = this.getAttrsFromDatum(calculatedEnterDatum);
    var enterStyle = this.getStyleFromDatum(calculatedEnterDatum);

    this.selection = this.selectSelf();

    this.applyAttrsToSelection(enterAttrs, this.selection);
    this.applyStyleToSelection(enterStyle, this.selection);

    var transition = this.selection.transition(_key + '_enter').duration(enterDuration);

    this.applyAttrsToSelection(this.attrs, transition);
    this.applyStyleToSelection(this.style, transition);

    transition.on('end', function () {
      _this.setState(_this.attrs, callback);
    });
  },
  componentWillAppear: function componentWillAppear(callback) {
    this.componentWillAppearOrEnter(callback);
  },
  componentWillEnter: function componentWillEnter(callback) {
    this.componentWillAppearOrEnter(callback);
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    var _key = nextProps._key,
        updateDuration = nextProps.updateDuration;

    var nextAttrs = this.getAttrs(nextProps);
    var nextStyle = this.getStyle(nextProps);

    this.selection = this.selectSelf();

    var transition = this.selection.transition(_key + '_update').duration(updateDuration);

    this.applyAttrsToSelection(nextAttrs, transition);
    this.applyStyleToSelection(nextStyle, transition);

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

    this.selection.interrupt(_key + '_enter');
    this.selection.interrupt(_key + '_update');
    var computedExitDatum = exitDatum(datum, index, data);
    var exitAttrs = this.getAttrsFromDatum(computedExitDatum);
    var exitStyle = this.getStyleFromDatum(computedExitDatum);

    var transition = this.selectSelf().transition(_key + '_leave').duration(exitDuration);

    this.applyAttrsToSelection(exitAttrs, transition);
    this.applyStyleToSelection(exitStyle, transition);

    transition.on('end', function () {
      callback();
    });
  },
  componentWillUnmount: function componentWillUnmount() {
    var _key = this.props._key;

    this.selection.interrupt(_key + '_enter');
    this.selection.interrupt(_key + '_update');
    this.selection.interrupt(_key + '_leave');
  },
  getAttrNames: function getAttrNames() {
    return [];
  },
  getDerivedAttrNames: function getDerivedAttrNames() {
    return [];
  },
  applyAttrsToSelection: function applyAttrsToSelection(attrs, selection) {
    this.attrNames.forEach(function (name) {
      selection.attr(name, attrs[name]);
    });
  },
  applyStyleToSelection: function applyStyleToSelection(style, selection) {
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
  getAttrs: function getAttrs(props) {
    var _this3 = this;

    var datum = props.datum,
        data = props.data,
        index = props.index;


    var attrs = (0, _pick2.default)(this.attrNames.reduce(function (acc, key) {
      var prop = props[key];
      if (!(0, _itsSet2.default)(prop)) return acc;
      if ((0, _isFunction2.default)(prop)) prop = prop(datum, index, data);
      return (0, _assign2.default)({}, acc, (0, _defineProperty3.default)({}, key, prop));
    }, {}), this.attrNames);

    var derivedAttrs = this.derivedAttrNames.reduce(function (acc, key) {
      return (0, _assign2.default)({}, acc, (0, _defineProperty3.default)({}, key, _this3.getDerivedAttr(key)));
    }, {});

    return (0, _assign2.default)({}, attrs, derivedAttrs);
  },
  getStyle: function getStyle(props) {
    var style = props.style,
        datum = props.datum,
        data = props.data,
        index = props.index;

    if ((0, _isFunction2.default)(style)) return style(datum, index, data);
    return style;
  },
  render: function render() {
    return _react2.default.createElement('g', null);
  }
});