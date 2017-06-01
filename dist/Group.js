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

var _TransitionGroup = require('./TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _AnimatedElement = require('./AnimatedElement');

var _AnimatedElement2 = _interopRequireDefault(_AnimatedElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import isString from 'lodash/isString';
// import get from 'lodash/get';

exports.default = (0, _reactStamp2.default)(_react2.default).compose(_AnimatedElement2.default, {

  displayName: 'Group',

  defaultProps: {
    x: 0,
    y: 0,
    rotation: 0,
    rotationOriginX: 0,
    rotationOriginY: 0
  },

  getDerivedAttrNames: function getDerivedAttrNames() {
    return ['transform'];
  },
  getDerivedAttrInputNames: function getDerivedAttrInputNames() {
    return {
      transform: ['x', 'y', 'rotation', 'rotationOriginX', 'rotationOriginY']
    };
  },
  getAttrDefaults: function getAttrDefaults() {
    return {
      x: 0,
      y: 0,
      rotation: 0,
      rotationOriginX: 0,
      rotationOriginY: 0
    };
  },
  getDerivationMethod: function getDerivationMethod(key, props) {
    var _this = this;

    switch (key) {
      case 'transform':
        return function (datum) {
          var attrInputNames = _this.derivedAttrInputNames[key];

          var _getAttrs = _this.getAttrs((0, _assign2.default)({}, props, { datum: datum }), attrInputNames),
              x = _getAttrs.x,
              y = _getAttrs.y,
              rotation = _getAttrs.rotation,
              rotationOriginX = _getAttrs.rotationOriginX,
              rotationOriginY = _getAttrs.rotationOriginY;

          return 'translate(' + x + ', ' + y + ') rotate(' + rotation + ', ' + rotationOriginX + ', ' + rotationOriginY + ')'; // eslint-disable-line max-len
        };
      // no default
    }
  },
  render: function render() {
    var style = this.getStyle(this.props);
    return _react2.default.createElement(
      _TransitionGroup2.default,
      { style: style },
      this.renderChildren()
    );
  },
  renderChildren: function renderChildren() {
    var _props = this.props,
        datum = _props.datum,
        data = _props.data,
        index = _props.index,
        children = _props.children;

    return _react.Children.map(children, function (child) {
      return (0, _react.cloneElement)(child, (0, _assign2.default)({ datum: datum, data: data, index: index }, child.props));
    });
  }
});