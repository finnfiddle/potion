'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _constants = require('./constants');

var _util = require('./util');

var _AnimatedElement2 = require('./mixins/AnimatedElement');

var _AnimatedElement3 = _interopRequireDefault(_AnimatedElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Text = function (_AnimatedElement) {
  (0, _inherits3.default)(Text, _AnimatedElement);

  function Text(props) {
    (0, _classCallCheck3.default)(this, Text);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Text.__proto__ || (0, _getPrototypeOf2.default)(Text)).call(this, props));

    _this.displayName = 'Text';
    return _this;
  }

  (0, _createClass3.default)(Text, [{
    key: 'getAttrNames',
    value: function getAttrNames() {
      return ['dx', 'dy'].concat(_constants.TWEENABLE_SVG_PRESENTATION_ATTRS);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'text',
        (0, _extends3.default)({}, this.state, { style: this.getStyle(this.props) }, (0, _util.bindMouseEvents)(this.props)),
        this.props.children
      );
    }
  }]);
  return Text;
}(_AnimatedElement3.default);

exports.default = Text;


Text.propTypes = {
  dx: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  dy: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func])
};

Text.defaultProps = (0, _assign2.default)({}, _AnimatedElement3.default.defaultProps);