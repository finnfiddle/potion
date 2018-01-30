'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _itsSet = require('its-set');

var _itsSet2 = _interopRequireDefault(_itsSet);

var _utilsDeepGet = require('utils-deep-get');

var _utilsDeepGet2 = _interopRequireDefault(_utilsDeepGet);

var _util = require('./util');

var _TransitionGroup = require('./TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _AnimatedElement2 = require('./mixins/AnimatedElement');

var _AnimatedElement3 = _interopRequireDefault(_AnimatedElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Group = function (_AnimatedElement) {
  (0, _inherits3.default)(Group, _AnimatedElement);

  function Group(props) {
    (0, _classCallCheck3.default)(this, Group);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Group.__proto__ || (0, _getPrototypeOf2.default)(Group)).call(this, props));

    _this.displayName = 'Group';
    return _this;
  }

  (0, _createClass3.default)(Group, [{
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
      return ['x', 'y', 'rotation', 'rotationOriginX', 'rotationOriginY'];
    }
  }, {
    key: 'getDerivationMethod',
    value: function getDerivationMethod(key, props, shouldGetDatum) {
      var _this2 = this;

      switch (key) {
        case 'transform':
          return function (datum) {
            var attrInputNames = _this2.derivedAttrInputNames[key];

            var _getAttrs = _this2.getAttrs((0, _assign2.default)({}, props, { datum: datum }), attrInputNames, shouldGetDatum),
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
        var props = child !== null && (0, _util.isFunction)((0, _utilsDeepGet2.default)(child, 'type')) ? (0, _assign2.default)({ datum: datum, data: data, index: index, enterDatum: enterDatum, exitDatum: exitDatum }, child.props) : child.props;
        return (0, _react.cloneElement)(child, props);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var style = this.getStyle(this.props);
      return _react2.default.createElement(
        _TransitionGroup2.default,
        (0, _extends3.default)({}, this.state, { style: style }, (0, _util.bindMouseEvents)(this.props)),
        this.renderChildren()
      );
    }
  }]);
  return Group;
}(_AnimatedElement3.default);

exports.default = Group;


Group.propTypes = {
  x: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.number]),
  y: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.number]),
  rotation: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.number]),
  rotationOriginX: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.number]),
  rotationOriginY: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.number])
};

Group.defaultProps = (0, _assign2.default)({}, _AnimatedElement3.default.defaultProps, {
  x: 0,
  y: 0,
  rotation: 0,
  rotationOriginX: 0,
  rotationOriginY: 0
});