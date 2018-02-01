'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _TransitionGroup = require('react-transition-group/TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TransitionGroup = function (_Component) {
  (0, _inherits3.default)(TransitionGroup, _Component);

  function TransitionGroup(props) {
    (0, _classCallCheck3.default)(this, TransitionGroup);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TransitionGroup.__proto__ || (0, _getPrototypeOf2.default)(TransitionGroup)).call(this, props));

    _this.displayName = 'TransitionGroup';
    return _this;
  }

  (0, _createClass3.default)(TransitionGroup, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          restProps = (0, _objectWithoutProperties3.default)(_props, ['children']);

      return _react2.default.createElement(
        _TransitionGroup2.default,
        (0, _extends3.default)({}, restProps, (0, _helpers.bindMouseEvents)(this.props)),
        children
      );
    }
  }]);
  return TransitionGroup;
}(_react.Component);

exports.default = TransitionGroup;


TransitionGroup.propTypes = {
  component: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.string]),
  children: _propTypes2.default.node
};

TransitionGroup.defaultProps = {
  component: 'g'
};