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

var _itsSet = require('its-set');

var _itsSet2 = _interopRequireDefault(_itsSet);

var _d3Shape = require('d3-shape');

var _TransitionGroup = require('./TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _AnimatedElement = require('./AnimatedElement');

var _AnimatedElement2 = _interopRequireDefault(_AnimatedElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  getDerivationMethod: function getDerivationMethod(key, props) {
    var _this = this;

    var datum = props.datum,
        index = props.index,
        value = props.value;

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

          return 'translate(' + x + ', ' + y + ') rotate(' + rotation + ', ' + rotationOriginX + ', ' + rotationOriginY + ')';
        };
    };
  },
  render: function render() {
    var _state = this.state,
        enterDatum = _state.enterDatum,
        enterDuration = _state.enterDuration,
        updateDuration = _state.updateDuration,
        x = _state.x,
        y = _state.y,
        restState = (0, _objectWithoutProperties3.default)(_state, ['enterDatum', 'enterDuration', 'updateDuration', 'x', 'y']);
    var _props = this.props,
        datum = _props.datum,
        data = _props.data,
        index = _props.index;


    return _react2.default.createElement(
      _TransitionGroup2.default,
      restState,
      this.renderChildren()
    );
  },
  renderChildren: function renderChildren() {
    var _props2 = this.props,
        datum = _props2.datum,
        data = _props2.data,
        index = _props2.index,
        children = _props2.children;

    return _react.Children.map(children, function (child) {
      return (0, _react.cloneElement)(child, { datum: datum, data: data, index: index });
    });
  }
});