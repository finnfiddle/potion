'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _extends5 = require('babel-runtime/helpers/extends');

var _extends6 = _interopRequireDefault(_extends5);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactMotion = require('react-motion');

var _itsSet = require('its-set');

var _itsSet2 = _interopRequireDefault(_itsSet);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var packHierarchyList = function packHierarchyList(unpacked) {
  return unpacked.map(function (d) {
    var data = d.data,
        style = d.style;

    return (0, _extends6.default)({}, data, style);
  });
};

var Layout = function (_Component) {
  (0, _inherits3.default)(Layout, _Component);

  function Layout() {
    (0, _classCallCheck3.default)(this, Layout);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).call(this));

    _this.schema = _this.getSchema();
    _this.getEnterStyle = _this.getEnterStyle.bind(_this);
    _this.getExitStyle = _this.getExitStyle.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Layout, [{
    key: 'getEnterStyle',
    value: function getEnterStyle(_ref) {
      var style = _ref.style;

      var result = (0, _extends6.default)({}, style, this.props.nodeEnter(style));
      return (0, _keys2.default)(result).reduce(function (acc, key) {
        return (0, _extends6.default)({}, acc, (0, _defineProperty3.default)({}, key, (0, _util.isObject)(result[key]) ? result[key].val : result[key]));
      }, {});
    }
  }, {
    key: 'getExitStyle',
    value: function getExitStyle(_ref2) {
      var style = _ref2.style;

      var result = (0, _extends6.default)({}, style, this.props.nodeExit(style));

      return (0, _keys2.default)(result).reduce(function (acc, key) {
        return (0, _extends6.default)({}, acc, (0, _defineProperty3.default)({}, key, (0, _util.isObject)(result[key]) ? result[key].val : result[key]));
      }, {});
    }
  }, {
    key: 'getLayout',
    value: function getLayout() {
      var _this2 = this;

      var _schema = this.schema,
          layout = _schema.layout,
          layoutProps = _schema.layoutProps;

      var p = layout();
      layoutProps.forEach(function (key) {
        if ((0, _itsSet2.default)(_this2.props[key])) p = p[key](_this2.props[key]);
      });
      return p;
    }
  }, {
    key: 'getAnimatedData',
    value: function getAnimatedData() {
      var _this3 = this;

      return this.getData().map(function (d) {
        return {
          key: d.key || d.data.key,
          data: d,
          style: _this3.schema.selectStylesToTween(d)
        };
      });
    }
  }, {
    key: 'getStaticData',
    value: function getStaticData() {
      return this.getData();
    }
  }, {
    key: 'transformDefaultStyles',
    value: function transformDefaultStyles(data) {
      var _this4 = this;

      return data.map(function (d) {
        return (0, _extends6.default)({}, d, { style: _this4.props.nodeEnter(d.style) });
      });
    }
  }, {
    key: 'transformStyles',
    value: function transformStyles(data) {
      return data.map(function (d) {
        return (0, _extends6.default)({}, d, {
          style: (0, _keys2.default)(d.style).reduce(function (acc, key) {
            return (0, _extends6.default)({}, acc, (0, _defineProperty3.default)({}, key, (0, _reactMotion.spring)(d.style[key])));
          }, {})
        });
      });
    }
  }, {
    key: 'transformInterpolatedStyles',
    value: function transformInterpolatedStyles(data) {
      return packHierarchyList(data);
    }
  }, {
    key: 'renderAnimated',
    value: function renderAnimated() {
      var _this5 = this;

      var children = this.props.children;

      var data = this.getAnimatedData();
      return _react2.default.createElement(
        _reactMotion.TransitionMotion,
        {
          defaultStyles: this.transformDefaultStyles(data),
          styles: this.transformStyles(data),
          willEnter: this.getEnterStyle,
          willLeave: this.getExitStyle
        },
        function (interpolatedStyles) {
          return _react2.default.createElement(
            _this5.props.component,
            null,
            children(_this5.transformInterpolatedStyles(interpolatedStyles))
          );
        }
      );
    }
  }, {
    key: 'renderStatic',
    value: function renderStatic() {
      console.log(this.getStaticData());
      return _react2.default.createElement(
        this.props.component,
        null,
        this.props.children(this.getStaticData())
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.animate ? this.renderAnimated() : this.renderStatic();
    }
  }]);
  return Layout;
}(_react.Component);

Layout.displayName = 'Layout';
Layout.propTypes = {
  children: _propTypes2.default.func.isRequired,
  nodeEnter: _propTypes2.default.func,
  nodeExit: _propTypes2.default.func,
  animate: _propTypes2.default.bool,
  component: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.string])
};
Layout.defaultProps = {
  animate: false,
  nodeEnter: function nodeEnter(d) {
    return d;
  },
  nodeExit: function nodeExit(d) {
    return d;
  },
  component: 'g'
};
exports.default = Layout;