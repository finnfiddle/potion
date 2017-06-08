'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStamp = require('react-stamp');

var _reactStamp2 = _interopRequireDefault(_reactStamp);

var _d3Shape = require('d3-shape');

var _itsSet = require('its-set');

var _itsSet2 = _interopRequireDefault(_itsSet);

var _constants = require('./constants');

var _helpers = require('./helpers');

var _AnimatedElement = require('./AnimatedElement');

var _AnimatedElement2 = _interopRequireDefault(_AnimatedElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStamp2.default)(_react2.default).compose(_AnimatedElement2.default, {

  displayName: 'Arc',

  propTypes: {
    innerRadius: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
    outerRadius: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
    startAngle: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
    endAngle: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func])
  },

  defaultProps: {
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0
  },

  getAttrNames: function getAttrNames() {
    return _constants.TWEENABLE_SVG_PRESENTATION_ATTRS;
  },
  getPrivatePropNames: function getPrivatePropNames() {
    return ['innerRadius', 'outerRadius', 'startAngle', 'endAngle'];
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
      // no default
    }
  },
  render: function render() {
    return _react2.default.createElement('path', (0, _extends3.default)({}, this.state, { style: this.getStyle(this.props) }, (0, _helpers.bindMouseEvents)(this.props)));
  }
});