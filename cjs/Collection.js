'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('./helpers');

var _TransitionGroup = require('./TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Collection = function (_Component) {
  _inherits(Collection, _Component);

  function Collection(props) {
    _classCallCheck(this, Collection);

    var _this = _possibleConstructorReturn(this, (Collection.__proto__ || Object.getPrototypeOf(Collection)).call(this, props));

    _this.displayName = 'Collection';
    return _this;
  }

  _createClass(Collection, [{
    key: 'renderChildren',
    value: function renderChildren() {
      var _props = this.props,
          data = _props.data,
          children = _props.children;

      var resolvedData = (0, _helpers.isFunction)(data) ? data(this.props) : data;
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
  data: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.func]),
  children: _react.PropTypes.node
};