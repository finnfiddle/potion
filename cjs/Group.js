'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _itsSet = require('its-set');

var _itsSet2 = _interopRequireDefault(_itsSet);

var _utilsDeepGet = require('utils-deep-get');

var _utilsDeepGet2 = _interopRequireDefault(_utilsDeepGet);

var _helpers = require('./helpers');

var _TransitionGroup = require('./TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _AnimatedElement2 = require('./mixins/AnimatedElement');

var _AnimatedElement3 = _interopRequireDefault(_AnimatedElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Group = function (_AnimatedElement) {
  _inherits(Group, _AnimatedElement);

  function Group(props) {
    _classCallCheck(this, Group);

    var _this = _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).call(this, props));

    _this.displayName = 'Group';
    return _this;
  }

  _createClass(Group, [{
    key: 'getDerivedAttrNames',
    value: function getDerivedAttrNames() {
      return ['transform'];
    }
  }, {
    key: 'getDerivedAttrInputNames',
    value: function getDerivedAttrInputNames() {
      return {
        transform: ['x', 'y', 'rotation', 'rotationOriginX', 'rotationOriginY']
      };
    }
  }, {
    key: 'getAttrDefaults',
    value: function getAttrDefaults() {
      return {
        x: 0,
        y: 0,
        rotation: 0,
        rotationOriginX: 0,
        rotationOriginY: 0
      };
    }
  }, {
    key: 'getPrivatePropNames',
    value: function getPrivatePropNames() {
      return ['rotation', 'rotationOriginX', 'rotationOriginY'];
    }
  }, {
    key: 'getDerivationMethod',
    value: function getDerivationMethod(key, props, shouldGetDatum) {
      var _this2 = this;

      switch (key) {
        case 'transform':
          return function (datum) {
            var attrInputNames = _this2.derivedAttrInputNames[key];

            var _getAttrs = _this2.getAttrs(Object.assign({}, props, { datum: datum }), attrInputNames, shouldGetDatum),
                x = _getAttrs.x,
                y = _getAttrs.y,
                rotation = _getAttrs.rotation,
                rotationOriginX = _getAttrs.rotationOriginX,
                rotationOriginY = _getAttrs.rotationOriginY;

            return 'translate(' + x + ', ' + y + ') rotate(' + rotation + ', ' + rotationOriginX + ', ' + rotationOriginY + ')'; // eslint-disable-line max-len
          };
        // no default
      }
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _props = this.props,
          datum = _props.datum,
          data = _props.data,
          index = _props.index,
          children = _props.children,
          enterDatum = _props.enterDatum,
          exitDatum = _props.exitDatum;

      return _react.Children.map(children, function (child) {
        if (!(0, _itsSet2.default)(child)) return null;
        var props = child !== null && (0, _helpers.isFunction)((0, _utilsDeepGet2.default)(child, 'type')) ? Object.assign({ datum: datum, data: data, index: index, enterDatum: enterDatum, exitDatum: exitDatum }, child.props) : child.props;
        return (0, _react.cloneElement)(child, props);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var style = this.getStyle(this.props);
      return _react2.default.createElement(
        _TransitionGroup2.default,
        _extends({}, this.state, { style: style }, (0, _helpers.bindMouseEvents)(this.props)),
        this.renderChildren()
      );
    }
  }]);

  return Group;
}(_AnimatedElement3.default);

exports.default = Group;


Group.propTypes = {
  x: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.number]),
  y: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.number]),
  rotation: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.number]),
  rotationOriginX: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.number]),
  rotationOriginY: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.number])
};

Group.defaultProps = Object.assign({}, _AnimatedElement3.default.defaultProps, {
  x: 0,
  y: 0,
  rotation: 0,
  rotationOriginX: 0,
  rotationOriginY: 0
});