'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactMotion = require('react-motion');

var _itsSet = require('its-set');

var _itsSet2 = _interopRequireDefault(_itsSet);

var _util = require('@potion/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.schema = _this.getSchema();
    _this.getEnterStyle = _this.getEnterStyle.bind(_this);
    _this.getExitStyle = _this.getExitStyle.bind(_this);
    return _this;
  }

  _createClass(Layout, [{
    key: 'getEnterStyle',
    value: function getEnterStyle(_ref) {
      var style = _ref.style;

      var result = _extends({}, style, this.props.nodeEnter(style));
      return Object.keys(result).reduce(function (acc, key) {
        return _extends({}, acc, _defineProperty({}, key, (0, _util.isObject)(result[key]) ? result[key].val : result[key]));
      }, {});
    }
  }, {
    key: 'getExitStyle',
    value: function getExitStyle(_ref2) {
      var style = _ref2.style;

      var result = _extends({}, style, this.props.nodeExit(style));

      return Object.keys(result).reduce(function (acc, key) {
        return _extends({}, acc, _defineProperty({}, key, (0, _util.isObject)(result[key]) ? result[key].val : result[key]));
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
        return _extends({}, d, { style: _this4.props.nodeEnter(d.style) });
      });
    }
  }, {
    key: 'transformStyles',
    value: function transformStyles(data) {
      var _this5 = this;

      return data.map(function (d) {
        return _extends({}, d, {
          style: Object.keys(d.style).reduce(function (acc, key) {
            return _extends({}, acc, _defineProperty({}, key, (0, _reactMotion.spring)(d.style[key], {
              stiffness: _this5.props.springStiffness,
              damping: _this5.props.springDamping
            })));
          }, {})
        });
      });
    }
  }, {
    key: 'transformInterpolatedStyles',
    value: function transformInterpolatedStyles(data) {
      return data.map(function (d) {
        var data = d.data,
            style = d.style,
            key = d.key;

        return _extends({ key: key }, data, style);
      });
    }
  }, {
    key: 'renderAnimated',
    value: function renderAnimated() {
      var _this6 = this;

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
          return _this6.renderChildren(_this6.transformInterpolatedStyles(interpolatedStyles));
        }
      );
    }
  }, {
    key: 'renderStatic',
    value: function renderStatic() {
      return this.renderChildren(this.getStaticData());
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren(data) {
      return _react2.default.createElement(
        this.props.component,
        null,
        this.props.children(data)
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
  component: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.string]),
  springStiffness: _propTypes2.default.number,
  springDamping: _propTypes2.default.number
};
Layout.defaultProps = {
  animate: false,
  nodeEnter: function nodeEnter(d) {
    return d;
  },
  nodeExit: function nodeExit(d) {
    return d;
  },
  component: 'g',
  springStiffness: 170,
  springDamping: 26
};
exports.default = Layout;