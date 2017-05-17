'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStamp = require('react-stamp');

var _reactStamp2 = _interopRequireDefault(_reactStamp);

var _d3Shape = require('d3-shape');

var _itsSet = require('its-set');

var _itsSet2 = _interopRequireDefault(_itsSet);

var _TransitionGroup = require('./TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStamp2.default)(_react2.default).compose({

  displayName: 'Pie',

  propTypes: {
    // value
    // sort
    // sortValues
    // startAngle
    // endAngle
    // padAngle
    // data
    // id
  },

  render: function render() {
    var _props = this.props,
        data = _props.data,
        sort = _props.sort;

    var pieData = this.getPie()(data).sort(function (a, b) {
      return sort(a.data, b.data);
    });

    return _react2.default.createElement(
      _TransitionGroup2.default,
      null,
      this.renderSingularChildren(pieData),
      this.renderChildren(pieData)
    );
  },
  renderSingularChildren: function renderSingularChildren(pieData) {
    var singularChildren = this.props.singularChildren;

    return _react.Children.map(singularChildren, function (child) {
      return (0, _react.cloneElement)(child, { data: pieData });
    });
  },
  renderChildren: function renderChildren(pieData) {
    var _props2 = this.props,
        data = _props2.data,
        children = _props2.children,
        id = _props2.id;

    return pieData.reduce(function (acc, datum, index) {
      return acc.concat(_react.Children.map(children, function (child, c) {
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
  },
  getPie: function getPie() {
    var _this = this;

    var p = (0, _d3Shape.pie)();
    ['value', 'sort', 'sortValues', 'startAngle', 'endAngle', 'padAngle'].forEach(function (key) {
      if ((0, _itsSet2.default)(_this.props[key])) p = p[key](_this.props[key]);
    });
    return p;
  }
});