'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Shape = require('d3-shape');

var _itsSet = require('its-set');

var _itsSet2 = _interopRequireDefault(_itsSet);

var _TransitionGroup = require('./TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pie = function (_Component) {
  _inherits(Pie, _Component);

  function Pie(props) {
    _classCallCheck(this, Pie);

    var _this = _possibleConstructorReturn(this, (Pie.__proto__ || Object.getPrototypeOf(Pie)).call(this, props));

    _this.displayName = 'Pie';
    return _this;
  }

  _createClass(Pie, [{
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

      var pieData = this.getPie()((0, _helpers.isFunction)(data) ? data(this.props) : data);
      if ((0, _itsSet2.default)(sort)) pieData = pieData.sort(function (a, b) {
        return sort(a.data, b.data);
      });

      return _react2.default.createElement(
        _TransitionGroup2.default,
        null,
        this.renderChildren(pieData),
        this.renderSingularChildren(pieData)
      );
    }
  }]);

  return Pie;
}(_react.Component);

exports.default = Pie;


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
  children: _propTypes2.default.node
};