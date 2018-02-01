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

var _itsSet = require('its-set');

var _itsSet2 = _interopRequireDefault(_itsSet);

var _d3V4Grid = require('d3-v4-grid');

var _d3V4Grid2 = _interopRequireDefault(_d3V4Grid);

var _TransitionGroup = require('./TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Grid = function (_Component) {
  (0, _inherits3.default)(Grid, _Component);

  function Grid(props) {
    (0, _classCallCheck3.default)(this, Grid);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Grid.__proto__ || (0, _getPrototypeOf2.default)(Grid)).call(this, props));

    _this.displayName = 'Grid';
    return _this;
  }

  (0, _createClass3.default)(Grid, [{
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
        return (0, _assign2.default)({}, d, meta);
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
  size: _propTypes2.default.arrayOf(_propTypes2.default.number),
  nodeSize: _propTypes2.default.arrayOf(_propTypes2.default.number),
  rows: _propTypes2.default.number,
  cols: _propTypes2.default.number,
  bands: _propTypes2.default.bool,
  padding: _propTypes2.default.arrayOf(_propTypes2.default.number),
  data: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.func]),
  children: _propTypes2.default.node,
  singularChildren: _propTypes2.default.node
};