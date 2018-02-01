'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _d3Hierarchy = require('d3-hierarchy');

var _itsSet = require('its-set');

var _itsSet2 = _interopRequireDefault(_itsSet);

var _TransitionGroup = require('./TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pack = function (_Component) {
  (0, _inherits3.default)(Pack, _Component);

  function Pack(props) {
    (0, _classCallCheck3.default)(this, Pack);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Pack.__proto__ || (0, _getPrototypeOf2.default)(Pack)).call(this, props));

    _this.displayName = 'Pack';
    return _this;
  }

  (0, _createClass3.default)(Pack, [{
    key: 'getPack',
    value: function getPack() {
      var _this2 = this;

      var p = (0, _d3Hierarchy.pack)();
      ['radius', 'size', 'padding'].forEach(function (key) {
        if ((0, _itsSet2.default)(_this2.props[key])) p = p[key](_this2.props[key]);
      });
      return p;
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _props = this.props,
          data = _props.data,
          children = _props.children,
          includeRoot = _props.includeRoot;


      var packData = this.getPack()((0, _helpers.isFunction)(data) ? data(this.props) : data);
      var filteredData = (0, _helpers.flattenHierarchy)(packData).slice(includeRoot ? 0 : 1).map(function (datum) {
        var result = (0, _assign2.default)({}, datum.data, datum);
        delete result.data;
        delete result.parent;
        return result;
      });

      return filteredData.reduce(function (acc, datum, index) {
        return acc.concat(_react.Children.map(children, function (child, c) {
          return (0, _react.cloneElement)(child, {
            datum: datum,
            index: index,
            data: filteredData,
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
  return Pack;
}(_react.Component);

exports.default = Pack;


Pack.propTypes = {
  radius: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  size: _propTypes2.default.arrayOf(_propTypes2.default.number),
  padding: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  // packSiblings: PropTypes.arrayOf(
  //  PropTypes.shape({ x: PropTypes.number, y: PropTypes.number })
  // ),
  // packEnclose: PropTypes.number,
  data: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
  children: _propTypes2.default.node,
  includeRoot: _propTypes2.default.bool
};

Pack.defaultProps = {
  includeRoot: true
};