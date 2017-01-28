'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStamp = require('react-stamp');

var _reactStamp2 = _interopRequireDefault(_reactStamp);

var _d3Transition = require('d3-transition');

var _isFunction = require('lodash/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _itsSet = require('its-set');

var _itsSet2 = _interopRequireDefault(_itsSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

  propTypes: {
    // enter
    // leave
  },

  defaultProps: {
    enter: function enter() {},
    leave: function leave() {}
  },

  init: function init() {
    var _props = this.props,
        enter = _props.enter,
        datum = _props.datum,
        index = _props.index;

    var enterAttrs = this.getAttrs(enter(datum, index));
    var attrs = this.getAttrs(this.props);
    this.state = (0, _assign2.default)({}, attrs, enterAttrs);
  },
  getAttrs: function getAttrs(props) {
    var _this = this;

    return this.getAttrNames().reduce(function (acc, key) {
      var result = props[key];
      if (!(0, _itsSet2.default)(result)) return acc;
      if ((0, _isFunction2.default)(props[key])) {
        result = props[key](props.datum || _this.props.datum, props.index || _this.props.index);
      }
      return (0, _assign2.default)({}, acc, (0, _defineProperty3.default)({}, key, result));
    }, {});
  },
  getAttrGenerators: function getAttrGenerators(props) {
    var _this2 = this;

    return this.getGeneratedAttrNames().reduce(function (acc, key) {
      return (0, _assign2.default)({}, acc, (0, _defineProperty3.default)({}, key, _this2.getGenerator(key)));
    }, {});
  },
  componentWillAppearOrEnter: function componentWillAppearOrEnter(callback) {
    var _this3 = this;

    var _props2 = this.props,
        enter = _props2.enter,
        _key = _props2._key;

    var startAttrs = enter(this.props.datum, this.props.index);
    var endAttrs = this.getAttrs(this.props);
    var attrGenerators = this.getAttrGenerators(this.props);
    var generatedEndAttrs = (0, _keys2.default)(attrGenerators).reduce(function (acc, key) {
      return (0, _assign2.default)({}, acc, (0, _defineProperty3.default)({}, key, attrGenerators[key](_this3.props)));
    }, {});

    this.selection = this.selectSelf();

    this.selection.attr(startAttrs);

    var t = this.selection.transition(_key + '_enter').duration(1000);

    (0, _keys2.default)(endAttrs).forEach(function (key) {
      t.attr(key, endAttrs[key]);
    });
    console.log((0, _assign2.default)({}, endAttrs, generatedEndAttrs));
    t.on('end', function () {
      _this3.setState((0, _assign2.default)({}, endAttrs, generatedEndAttrs), callback);
    });
  },
  componentWillAppear: function componentWillAppear(callback) {
    this.componentWillAppearOrEnter(callback);
  },
  componentWillEnter: function componentWillEnter(callback) {
    this.componentWillAppearOrEnter(callback);
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var _this4 = this;

    var _key = this.props._key;

    var endAttrs = this.getAttrs(nextProps);
    var attrGenerators = this.getAttrGenerators(this.props);
    var generatedEndAttrs = (0, _keys2.default)(attrGenerators).reduce(function (acc, key) {
      return (0, _assign2.default)({}, acc, (0, _defineProperty3.default)({}, key, attrGenerators[key](_this4.props)));
    }, {});

    this.selection = this.selectSelf();
    var t = this.selection.transition(_key + '_update').duration(1000);

    (0, _keys2.default)(endAttrs).forEach(function (key) {
      t.attr(key, endAttrs[key]);
    });

    t.on('end', function () {
      _this4.setState((0, _assign2.default)({}, endAttrs, generatedEndAttrs));
    });
  },
  componentWillLeave: function componentWillLeave(callback) {
    var _props3 = this.props,
        leave = _props3.leave,
        _key = _props3._key;

    var attrs = leave(this.props.datum, this.props.index);

    var t = this.selectSelf().transition(_key + '_leave').duration(1000);

    (0, _keys2.default)(attrs).forEach(function (key) {
      t.attr(key, attrs[key]);
    });

    t.on('end', function () {
      callback();
    });
  },
  componentWillUnmount: function componentWillUnmount() {
    this.selection.interrupt(this.props._key + '_enter');
    this.selection.interrupt(this.props._key + '_update');
    this.selection.interrupt(this.props._key + '_leave');
  },
  componentDidLeave: function componentDidLeave() {}
};