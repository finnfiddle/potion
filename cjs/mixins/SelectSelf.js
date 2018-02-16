'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _d3Selection = require('d3-selection');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectSelf = function (_Component) {
  (0, _inherits3.default)(SelectSelf, _Component);

  function SelectSelf() {
    (0, _classCallCheck3.default)(this, SelectSelf);
    return (0, _possibleConstructorReturn3.default)(this, (SelectSelf.__proto__ || (0, _getPrototypeOf2.default)(SelectSelf)).apply(this, arguments));
  }

  (0, _createClass3.default)(SelectSelf, [{
    key: 'selectSelf',
    value: function selectSelf() {
      return (0, _d3Selection.select)(_reactDom2.default.findDOMNode(this));
    }
  }]);
  return SelectSelf;
}(_react.Component);

exports.default = SelectSelf;