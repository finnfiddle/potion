'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStamp = require('react-stamp');

var _reactStamp2 = _interopRequireDefault(_reactStamp);

var _d3Shape = require('d3-shape');

var _itsSet = require('its-set');

var _itsSet2 = _interopRequireDefault(_itsSet);

var _AnimatedElement = require('./AnimatedElement');

var _AnimatedElement2 = _interopRequireDefault(_AnimatedElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStamp2.default)(_react2.default).compose(_AnimatedElement2.default, {

  displayName: 'Arc',

  defaultProps: {
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0
  },

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
    }
  },
  render: function render() {
    return _react2.default.createElement('path', this.state);
  }
});