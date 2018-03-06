'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

var _lodash = require('lodash.get');

var _lodash2 = _interopRequireDefault(_lodash);

var _util = require('@potion/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Element = function (_Component) {
  (0, _inherits3.default)(Element, _Component);

  function Element() {
    (0, _classCallCheck3.default)(this, Element);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Element.__proto__ || (0, _getPrototypeOf2.default)(Element)).call(this));

    _this.schema = _this.getSchema();
    _this.privateProps = (0, _keys2.default)(_this.schema).reduce(function (acc, key) {
      return acc.concat(_this.schema[key].inputs);
    }, []).concat(['component']).concat(_this.getPrivateProps());
    return _this;
  }

  (0, _createClass3.default)(Element, [{
    key: 'getPrivateProps',
    value: function getPrivateProps() {
      return [];
    }
  }, {
    key: 'getSchema',
    value: function getSchema() {
      return {};
    }
  }, {
    key: 'getDerivedAttrs',
    value: function getDerivedAttrs() {
      var _this2 = this;

      return (0, _keys2.default)(this.schema).reduce(function (acc, key) {
        return (0, _extends4.default)({}, acc, (0, _defineProperty3.default)({}, key, _this2.schema[key].calculation(_this2.props)));
      }, {});
    }
  }, {
    key: 'getTransformations',
    value: function getTransformations() {
      var env = this.context.env || 'web';
      var transform = this.props.transform;


      if (!transform) return {};

      switch (env) {
        case 'web':
        default:
          {
            return {
              transform: (0, _util.getTransformations)(transform)
            };
          }
        case 'react-native-svg':
          {
            return (0, _util.getRNSvgTransformations)(transform);
          }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var defaultComponent = this.defaultComponent;

      var the = {
        component: (0, _lodash2.default)(this, 'context.components.' + defaultComponent) || defaultComponent
      };
      return _react2.default.createElement(
        the.component,
        (0, _extends4.default)({}, this.getDerivedAttrs(), (0, _util.omit)(this.props, this.privateProps), this.getTransformations()),
        this.props.children
      );
    }
  }]);
  return Element;
}(_react.Component);

Element.propTypes = {
  children: _propTypes2.default.node,
  transform: _propTypes2.default.object
};
Element.contextTypes = {
  components: _util.types.componentsType,
  env: _propTypes2.default.oneOf(['web', 'react-native-svg'])
};
exports.default = Element;