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

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = require('./util');

var _TransitionGroup = require('./TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Collection = function (_Component) {
  (0, _inherits3.default)(Collection, _Component);

  function Collection(props) {
    (0, _classCallCheck3.default)(this, Collection);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Collection.__proto__ || (0, _getPrototypeOf2.default)(Collection)).call(this, props));

    _this.displayName = 'Collection';
    return _this;
  }

  (0, _createClass3.default)(Collection, [{
    key: 'renderChildren',
    value: function renderChildren() {
      var _props = this.props,
          data = _props.data,
          children = _props.children;

      var resolvedData = (0, _util.isFunction)(data) ? data(this.props) : data;
      return resolvedData.reduce(function (acc, datum, index) {
        return acc.concat(_react.Children.map(children, function (child, c) {
          return (0, _react.cloneElement)(child, {
            datum: datum,
            index: index,
            data: resolvedData,
            key: index + '_' + c,
            _key: index + '_' + c
          });
        }));
      }, []);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _TransitionGroup2.default,
        null,
        this.renderChildren()
      );
    }
  }]);
  return Collection;
}(_react.Component);

exports.default = Collection;


Collection.propTypes = {
  data: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.func]),
  children: _propTypes2.default.node
};