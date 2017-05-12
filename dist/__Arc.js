'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStamp = require('react-stamp');

var _reactStamp2 = _interopRequireDefault(_reactStamp);

var _d3Shape = require('d3-shape');

var _itsSet = require('its-set');

var _itsSet2 = _interopRequireDefault(_itsSet);

var _isFunction = require('lodash/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _SelectSelfMixin = require('./mixins/SelectSelfMixin');

var _SelectSelfMixin2 = _interopRequireDefault(_SelectSelfMixin);

var _AnimatedElement = require('./AnimatedElement');

var _AnimatedElement2 = _interopRequireDefault(_AnimatedElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStamp2.default)(_react2.default).compose(_SelectSelfMixin2.default, _AnimatedElement2.default, {

  displayName: 'Arc',

  getAttrNames: function getAttrNames() {
    return ['fill', 'opacity'];
  },
  getGeneratedAttrNames: function getGeneratedAttrNames() {
    return ['d'];
  },
  getPropNamesForGenerators: function getPropNamesForGenerators() {
    return ['innerRadius', 'outerRadius', 'startAngle', 'endAngle'];
  },
  render: function render() {
    return _react2.default.createElement('path', this.state);
  },
  getGenerator: function getGenerator(attrName) {
    var _this = this;

    var generator = function generator() {};
    switch (attrName) {
      case 'd':
        return function (props) {
          generator = (0, _d3Shape.arc)();
          _this.getPropNamesForGenerators().forEach(function (attrName) {
            if ((0, _itsSet2.default)(props[attrName])) {
              generator = generator[attrName](_this.getValue(attrName, props));
            }
          });
          return generator(props);
        };
    }
  }
});