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

var _isNumber = require('lodash/isNumber');

var _isNumber2 = _interopRequireDefault(_isNumber);

var _intersection = require('lodash/intersection');

var _intersection2 = _interopRequireDefault(_intersection);

var _itsSet = require('its-set');

var _itsSet2 = _interopRequireDefault(_itsSet);

var _helpers = require('./helpers');

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
      if ((0, _isFunction2.default)(props[key])) result = _this.getValue(key, props);
      return (0, _assign2.default)({}, acc, (0, _defineProperty3.default)({}, key, result));
    }, {});
  },
  getAttrGenerators: function getAttrGenerators() {
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

    var attrGenerators = this.getAttrGenerators();
    var startAttrs = enter(this.props.datum, this.props.index);
    var endAttrs = this.getAttrs(this.props);
    var generatedEndAttrs = (0, _helpers.mapObject)(attrGenerators, function (value, key) {
      return attrGenerators[key](_this3.props);
    });

    this.selection = this.selectSelf();

    this.selection.attr(startAttrs);

    var trans = this.selection.transition(_key + '_enter').duration(1000);

    (0, _keys2.default)(endAttrs).forEach(function (key) {
      trans.attr(key, endAttrs[key]);
    });

    trans.on('end', function () {
      _this3.setState((0, _assign2.default)({}, endAttrs, generatedEndAttrs), callback);
    });
  },
  componentWillAppear: function componentWillAppear(callback) {
    this.componentWillAppearOrEnter(callback);
  },
  componentWillEnter: function componentWillEnter(callback) {
    this.componentWillAppearOrEnter(callback);
  },
  tweenProps: function tweenProps(startProps, endProps) {
    var whitelist = (0, _intersection2.default)((0, _keys2.default)(startProps), (0, _keys2.default)(endProps));
    return function (t) {
      return whitelist.reduce(function (acc, key) {
        return (0, _assign2.default)({}, acc, (0, _defineProperty3.default)({}, key, startProps[key] + (endProps[key] - startProps[key]) * t));
      }, {});
    };
  },
  getPropsForGenerators: function getPropsForGenerators(props) {
    var _this4 = this;

    var whitelist = this.getPropNamesForGenerators();
    return (0, _helpers.mapObject)(whitelist, function (value, key) {
      return _this4.getValue(key, props);
    });
  },
  getValue: function getValue(key, props) {
    var prop = props[key];
    var datum = props.datum,
        index = props.index;

    if ((0, _isFunction2.default)(prop)) return prop(datum || this.props.datum, index || this.props.index);
    return prop;
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var _this5 = this;

    var _key = this.props._key;

    var attrGenerators = this.getAttrGenerators();
    var endAttrs = this.getAttrs(nextProps);
    var generatedEndAttrs = (0, _helpers.mapObject)(attrGenerators, function (value, key) {
      return attrGenerators[key](nextProps);
    });

    this.selection = this.selectSelf();
    var trans = this.selection.transition(_key + '_update').duration(1000);

    (0, _keys2.default)(endAttrs).forEach(function (key) {
      trans.attr(key, endAttrs[key]);
    });

    var tweener = this.tweenProps(this.getPropsForGenerators(this.props), this.getPropsForGenerators(nextProps));

    (0, _keys2.default)(attrGenerators).forEach(function (key) {
      trans.attrTween(key, function () {
        return function (t) {
          return attrGenerators[key](tweener(t));
        };
      });
    });

    trans.on('end', function () {
      _this5.setState((0, _assign2.default)({}, endAttrs, generatedEndAttrs));
    });
  },
  componentWillLeave: function componentWillLeave(callback) {
    var _props3 = this.props,
        leave = _props3.leave,
        _key = _props3._key;

    var attrs = leave(this.props.datum, this.props.index);

    var trans = this.selectSelf().transition(_key + '_leave').duration(1000);

    (0, _keys2.default)(attrs).forEach(function (key) {
      trans.attr(key, attrs[key]);
    });

    trans.on('end', function () {
      callback();
    });
  },
  componentWillUnmount: function componentWillUnmount() {
    this.selection.interrupt(this.props._key + '_enter');
    this.selection.interrupt(this.props._key + '_update');
    this.selection.interrupt(this.props._key + '_leave');
  }
};