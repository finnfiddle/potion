(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-stamp', 'd3-shape', 'its-set', './TransitionGroup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-stamp'), require('d3-shape'), require('its-set'), require('./TransitionGroup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStamp, global.d3Shape, global.itsSet, global.TransitionGroup);
    global.Pie = mod.exports;
  }
})(this, function (exports, _react, _reactStamp, _d3Shape, _itsSet, _TransitionGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactStamp2 = _interopRequireDefault(_reactStamp);

  var _itsSet2 = _interopRequireDefault(_itsSet);

  var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _reactStamp2.default)(_react2.default).compose({

    displayName: 'Pie',

    propTypes: {
      value: _react.PropTypes.func,
      sort: _react.PropTypes.func,
      sortValues: _react.PropTypes.func,
      startAngle: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
      endAngle: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
      padAngle: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
      data: _react.PropTypes.arrayOf(_react.PropTypes.object),
      id: _react.PropTypes.func
    },

    render: function render() {
      var _props = this.props,
          data = _props.data,
          sort = _props.sort;

      var pieData = this.getPie()(data);
      if ((0, _itsSet2.default)(sort)) pieData = pieData.sort(function (a, b) {
        return sort(a.data, b.data);
      });

      return _react2.default.createElement(
        _TransitionGroup2.default,
        null,
        this.renderChildren(pieData),
        this.renderSingularChildren(pieData)
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
          children = _props2.children,
          id = _props2.id;
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
});