(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-stamp', 'its-set', 'd3-v4-grid', './TransitionGroup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-stamp'), require('its-set'), require('d3-v4-grid'), require('./TransitionGroup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStamp, global.itsSet, global.d3V4Grid, global.TransitionGroup);
    global.Grid = mod.exports;
  }
})(this, function (exports, _react, _reactStamp, _itsSet, _d3V4Grid, _TransitionGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactStamp2 = _interopRequireDefault(_reactStamp);

  var _itsSet2 = _interopRequireDefault(_itsSet);

  var _d3V4Grid2 = _interopRequireDefault(_d3V4Grid);

  var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _reactStamp2.default)(_react2.default).compose({

    displayName: 'Grid',

    propTypes: {
      size: _react.PropTypes.arrayOf(_react.PropTypes.number),
      nodeSize: _react.PropTypes.arrayOf(_react.PropTypes.number),
      rows: _react.PropTypes.number,
      cols: _react.PropTypes.number,
      bands: _react.PropTypes.bool,
      padding: _react.PropTypes.arrayOf(_react.PropTypes.number),
      data: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired
    },

    render: function render() {
      var gridData = this.getGrid();
      return _react2.default.createElement(
        _TransitionGroup2.default,
        null,
        this.renderChildren(gridData),
        this.renderSingularChildren(gridData)
      );
    },
    renderChildren: function renderChildren(gridData) {
      var children = this.props.children;


      return gridData.reduce(function (acc, datum, index) {
        return acc.concat(_react.Children.map(children, function (child, c) {
          return (0, _react.cloneElement)(child, {
            datum: datum,
            index: index,
            data: gridData,
            key: index + '_' + c,
            _key: index + '_' + c
          });
        }));
      }, []);
    },
    renderSingularChildren: function renderSingularChildren(gridData) {
      var singularChildren = this.props.singularChildren;

      return _react.Children.map(singularChildren, function (child) {
        return (0, _react.cloneElement)(child, { data: gridData });
      });
    },
    getGrid: function getGrid() {
      var _this = this;

      var gridData = (0, _d3V4Grid2.default)();

      ['size', 'nodeSize', 'rows', 'cols', 'bands', 'padding', 'data'].forEach(function (key) {
        if ((0, _itsSet2.default)(_this.props[key])) gridData = gridData[key](_this.props[key]);
      });

      gridData.layout();

      var meta = {
        size: gridData.size(),
        nodeSize: gridData.nodeSize(),
        rows: gridData.rows(),
        cols: gridData.cols(),
        bands: gridData.bands(),
        padding: gridData.padding()
      };

      return gridData.nodes().map(function (d) {
        return Object.assign({}, d, meta);
      });
    }
  });
});