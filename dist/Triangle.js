'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStamp = require('react-stamp');

var _reactStamp2 = _interopRequireDefault(_reactStamp);

var _d3Shape = require('d3-shape');

var _itsSet = require('its-set');

var _itsSet2 = _interopRequireDefault(_itsSet);

var _isFunction = require('lodash/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _Shape = require('./Shape');

var _Shape2 = _interopRequireDefault(_Shape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStamp2.default)(_react2.default).compose(_Shape2.default, {

  displayName: 'Arc',

  getAttrNames: function getAttrNames() {
    return ['fill', 'stroke', 'strokeWidth'];
  },
  getDerivedAttrNames: function getDerivedAttrNames() {
    return ['d'];
  },
  getDerivedAttrInputNames: function getDerivedAttrInputNames() {
    return {
      d: ['innerRadius', 'outerRadius', 'startAngle', 'endAngle']
    };
  },
  getDerivationMethod: function getDerivationMethod(key, props) {
    var _this = this;

    var datum = props.datum,
        index = props.index,
        value = props.value;

    switch (key) {
      case 'd':
        return function (datum) {
          var derivationMethod = (0, _d3Shape.arc)();
          var attrInputNames = _this.derivedAttrInputNames[key];
          var attrValues = _this.getAttrs((0, _assign2.default)({}, props, { datum: datum }), attrInputNames);
          attrInputNames.forEach(function (attrName) {
            if ((0, _itsSet2.default)(props[attrName])) {
              derivationMethod = derivationMethod[attrName](attrValues[attrName]);
            }
          });
          return derivationMethod();
        };
    };
  },
  render: function render() {
    var _state = this.state,
        didEnter = _state.didEnter,
        restState = (0, _objectWithoutProperties3.default)(_state, ['didEnter']);

    return _react2.default.createElement('path', restState);
  }
});