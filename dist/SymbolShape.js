'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _d3Shape = require('d3-shape');

var _constants = require('./constants');

var _helpers = require('./helpers');

var _AnimatedElement = require('./AnimatedElement');

var _AnimatedElement2 = _interopRequireDefault(_AnimatedElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SYMBOLS = {
  symbolCircle: _d3Shape.symbolCircle,
  symbolCross: _d3Shape.symbolCross,
  symbolDiamond: _d3Shape.symbolDiamond,
  symbolSquare: _d3Shape.symbolSquare,
  symbolStar: _d3Shape.symbolStar,
  symbolTriangle: _d3Shape.symbolTriangle,
  symbolWye: _d3Shape.symbolWye
};

exports.default = (0, _reactStamp2.default)(_react2.default).compose(_AnimatedElement2.default, {

  displayName: 'Symbol',

  propTypes: {
    size: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
    type: _react.PropTypes.oneOf((0, _keys2.default)(SYMBOLS))
  },

  getAttrNames: function getAttrNames() {
    return _constants.TWEENABLE_SVG_PRESENTATION_ATTRS;
  },
  getDerivedAttrNames: function getDerivedAttrNames() {
    return ['d'];
  },
  getDerivedAttrInputNames: function getDerivedAttrInputNames() {
    return {
      d: ['size', 'type']
    };
  },
  getDerivationMethod: function getDerivationMethod(key, props, shouldGetDatum) {
    var _this = this;

    switch (key) {
      case 'd':
        return function (datum) {
          var attrInputNames = _this.derivedAttrInputNames[key];
          var attrValues = _this.getAttrs((0, _assign2.default)({}, props, { datum: datum }), attrInputNames, shouldGetDatum);
          var symbolInstance = (0, _d3Shape.symbol)();
          var size = attrValues.size,
              type = attrValues.type;

          if ((0, _itsSet2.default)(size)) symbolInstance = symbolInstance.size(size);
          if ((0, _itsSet2.default)(type)) symbolInstance = symbolInstance.type(SYMBOLS[type]);
          return symbolInstance();
        };
      // no default
    }
  },
  render: function render() {
    return _react2.default.createElement('path', (0, _extends3.default)({}, this.state, { style: this.getStyle(this.props) }, (0, _helpers.bindMouseEvents)(this.props)));
  }
});