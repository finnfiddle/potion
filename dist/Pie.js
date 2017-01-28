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

var _reactAddonsTransitionGroup = require('react-addons-transition-group');

var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

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
  },

  render: function render() {
    return _react2.default.createElement(
      _reactAddonsTransitionGroup2.default,
      { component: 'g' },
      this.renderChildren()
    );
  },
  renderChildren: function renderChildren() {
    var _props = this.props,
        data = _props.data,
        children = _props.children;

    return this.getPie()(data).reduce(function (acc, datum, index) {
      return acc.concat(_react.Children.map(children, function (child, c) {
        return (0, _react.cloneElement)(child, { datum: datum, index: index, key: index + '_' + c, _key: index + '_' + c });
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