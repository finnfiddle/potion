(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-stamp', 'its-set', 'lodash.isstring', 'lodash.get', './helpers', './TransitionGroup', './AnimatedElement'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-stamp'), require('its-set'), require('lodash.isstring'), require('lodash.get'), require('./helpers'), require('./TransitionGroup'), require('./AnimatedElement'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStamp, global.itsSet, global.lodash, global.lodash, global.helpers, global.TransitionGroup, global.AnimatedElement);
    global.Group = mod.exports;
  }
})(this, function (exports, _react, _reactStamp, _itsSet, _lodash, _lodash3, _helpers, _TransitionGroup, _AnimatedElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactStamp2 = _interopRequireDefault(_reactStamp);

  var _itsSet2 = _interopRequireDefault(_itsSet);

  var _lodash2 = _interopRequireDefault(_lodash);

  var _lodash4 = _interopRequireDefault(_lodash3);

  var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

  var _AnimatedElement2 = _interopRequireDefault(_AnimatedElement);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  exports.default = (0, _reactStamp2.default)(_react2.default).compose(_AnimatedElement2.default, {

    displayName: 'Group',

    propTypes: {
      x: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.number]),
      y: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.number]),
      rotation: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.number]),
      rotationOriginX: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.number]),
      rotationOriginY: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.number])
    },

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
    getDerivationMethod: function getDerivationMethod(key, props, shouldGetDatum) {
      var _this = this;

      switch (key) {
        case 'transform':
          return function (datum) {
            var attrInputNames = _this.derivedAttrInputNames[key];

            var _getAttrs = _this.getAttrs(Object.assign({}, props, { datum: datum }), attrInputNames, shouldGetDatum),
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
        _extends({ style: style }, (0, _helpers.bindMouseEvents)(this.props)),
        this.renderChildren()
      );
    },
    renderChildren: function renderChildren() {
      var _props = this.props,
          datum = _props.datum,
          data = _props.data,
          index = _props.index,
          children = _props.children,
          enterDatum = _props.enterDatum,
          exitDatum = _props.exitDatum;

      return _react.Children.map(children, function (child) {
        if (!(0, _itsSet2.default)(child)) return null;
        var props = child !== null && (0, _lodash2.default)((0, _lodash4.default)(child, 'type.displayName')) ? Object.assign({ datum: datum, data: data, index: index, enterDatum: enterDatum, exitDatum: exitDatum }, child.props) : child.props;
        return (0, _react.cloneElement)(child, props);
      });
    }
  });
});