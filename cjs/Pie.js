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

var _d3Shape = require('d3-shape');

var _itsSet = require('its-set');

var _itsSet2 = _interopRequireDefault(_itsSet);

var _TransitionGroup = require('./TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pie = function (_Component) {
  (0, _inherits3.default)(Pie, _Component);

  function Pie() {
    (0, _classCallCheck3.default)(this, Pie);
    return (0, _possibleConstructorReturn3.default)(this, (Pie.__proto__ || (0, _getPrototypeOf2.default)(Pie)).apply(this, arguments));
  }

  (0, _createClass3.default)(Pie, [{
    key: 'getPie',
    value: function getPie() {
      var _this2 = this;

      var p = (0, _d3Shape.pie)();
      ['value', 'sort', 'sortValues', 'startAngle', 'endAngle', 'padAngle'].forEach(function (key) {
        if ((0, _itsSet2.default)(_this2.props[key])) p = p[key](_this2.props[key]);
      });
      return p;
    }
  }, {
    key: 'renderSingularChildren',
    value: function renderSingularChildren(pieData) {
      var singularChildren = this.props.singularChildren;

      return _react.Children.map(singularChildren, function (child) {
        return (0, _react.cloneElement)(child, { data: pieData });
      });
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren(pieData) {
      var _props = this.props,
          children = _props.children,
          id = _props.id;
      // TODO: throw error if non unique ids

      return pieData.reduce(function (acc, datum, index) {
        return acc.concat(_react.Children.map(children, function (child) {
          var key = id(datum.data);
          return (0, _react.cloneElement)(child, {
            datum: datum,
            index: index,
            data: pieData,
            key: key,
            _key: key
          });
        }));
      }, []);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          data = _props2.data,
          sort = _props2.sort;

      var pieData = this.getPie()((0, _util.isFunction)(data) ? data(this.props) : data);
      if ((0, _itsSet2.default)(sort)) pieData = pieData.sort(function (a, b) {
        return sort(a.data, b.data);
      });

      return _react2.default.createElement(
        _TransitionGroup2.default,
        { component: this.props.component },
        this.renderChildren(pieData),
        this.renderSingularChildren(pieData)
      );
    }
  }]);
  return Pie;
}(_react.Component);

Pie.displayName = 'Pie';
Pie.propTypes = {
  value: _propTypes2.default.func,
  sort: _propTypes2.default.func,
  sortValues: _propTypes2.default.func,
  startAngle: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  endAngle: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  padAngle: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  data: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.func]),
  id: _propTypes2.default.func,
  singularChildren: _propTypes2.default.node,
  children: _propTypes2.default.node,
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element])
};
exports.default = Pie;