'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const enrichSchema = schema => ({
//   ...schema,

// });

var Element = function (_Component) {
  (0, _inherits3.default)(Element, _Component);

  function Element() {
    (0, _classCallCheck3.default)(this, Element);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Element.__proto__ || (0, _getPrototypeOf2.default)(Element)).call(this));

    _this.schema = _this.getSchema();
    return _this;
  }

  (0, _createClass3.default)(Element, [{
    key: 'getAttrs',
    value: function getAttrs() {}
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return _react2.default.createElement(
        this.props.component,
        (0, _extends3.default)({}, this.getAttrs(), { style: this.getStyle() }),
        children
      );
    }
  }]);
  return Element;
}(_react.Component);

Element.propTypes = {
  children: _propTypes2.default.node
};
exports.default = Element;