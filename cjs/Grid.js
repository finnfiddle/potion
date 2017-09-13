'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _itsSet = require('its-set');

var _itsSet2 = _interopRequireDefault(_itsSet);

var _d3V4Grid = require('d3-v4-grid');

var _d3V4Grid2 = _interopRequireDefault(_d3V4Grid);

var _TransitionGroup = require('./TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Grid = function (_Component) {
  _inherits(Grid, _Component);

  function Grid(props) {
    _classCallCheck(this, Grid);

    var _this = _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).call(this, props));

    _this.displayName = 'Grid';
    return _this;
  }

  _createClass(Grid, [{
    key: 'getGrid',
    value: function getGrid() {
      var _this2 = this;

      var gridData = (0, _d3V4Grid2.default)();

      ['size', 'nodeSize', 'rows', 'cols', 'bands', 'padding', 'data'].forEach(function (key) {
        if ((0, _itsSet2.default)(_this2.props[key])) {
          gridData = gridData[key]((0, _helpers.isFunction)(_this2.props[key]) ? _this2.props[key](_this2.props) : _this2.props[key]);
        }
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
  }, {
    key: 'renderChildren',
    value: function renderChildren(gridData) {
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
    }
  }, {
    key: 'renderSingularChildren',
    value: function renderSingularChildren(gridData) {
      var singularChildren = this.props.singularChildren;

      return _react.Children.map(singularChildren, function (child) {
        return (0, _react.cloneElement)(child, { data: gridData });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var gridData = this.getGrid();
      return _react2.default.createElement(
        _TransitionGroup2.default,
        null,
        this.renderChildren(gridData),
        this.renderSingularChildren(gridData)
      );
    }
  }]);

  return Grid;
}(_react.Component);

exports.default = Grid;


Grid.propTypes = {
  size: _react.PropTypes.arrayOf(_react.PropTypes.number),
  nodeSize: _react.PropTypes.arrayOf(_react.PropTypes.number),
  rows: _react.PropTypes.number,
  cols: _react.PropTypes.number,
  bands: _react.PropTypes.bool,
  padding: _react.PropTypes.arrayOf(_react.PropTypes.number),
  data: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.func]),
  children: _react.PropTypes.node,
  singularChildren: _react.PropTypes.node
};