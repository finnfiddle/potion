'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3V4Grid = require('d3-v4-grid');

var _d3V4Grid2 = _interopRequireDefault(_d3V4Grid);

var _Layout2 = require('./Layout');

var _Layout3 = _interopRequireDefault(_Layout2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Grid = function (_Layout) {
  (0, _inherits3.default)(Grid, _Layout);

  function Grid() {
    (0, _classCallCheck3.default)(this, Grid);
    return (0, _possibleConstructorReturn3.default)(this, (Grid.__proto__ || (0, _getPrototypeOf2.default)(Grid)).apply(this, arguments));
  }

  (0, _createClass3.default)(Grid, [{
    key: 'getSchema',
    value: function getSchema() {
      return {
        layout: _d3V4Grid2.default,
        layoutProps: ['size', 'nodeSize', 'rows', 'cols', 'bands', 'padding', 'data'],
        selectStylesToTween: function selectStylesToTween(d) {
          return {
            x: d.x,
            y: d.y,
            nodeWidth: d.nodeWidth,
            nodeHeight: d.nodeHeight
          };
        }
      };
    }
  }, {
    key: 'getData',
    value: function getData() {
      var layout = this.getLayout();

      layout.layout();

      var size = layout.size();
      var nodeSize = layout.nodeSize();
      var padding = layout.padding();
      var meta = {
        nodeWidth: nodeSize[0],
        nodeHeight: nodeSize[1],
        size: size,
        padding: padding,
        // width: size[0],
        // height: size[1],
        // paddingHorizontal: padding[0],
        // paddingVertical: padding[1],
        rows: layout.rows(),
        cols: layout.cols(),
        bands: layout.bands()
      };

      return layout.nodes().map(function (node) {
        return (0, _extends3.default)({}, node, meta);
      });
    }
  }]);
  return Grid;
}(_Layout3.default);

Grid.displayName = 'Grid';
Grid.propTypes = {
  size: _propTypes2.default.arrayOf(_propTypes2.default.number),
  nodeSize: _propTypes2.default.arrayOf(_propTypes2.default.number),
  rows: _propTypes2.default.number,
  cols: _propTypes2.default.number,
  bands: _propTypes2.default.bool,
  padding: _propTypes2.default.arrayOf(_propTypes2.default.number),
  data: _propTypes2.default.array,
  children: _propTypes2.default.func,
  singularChildren: _propTypes2.default.node
};
exports.default = Grid;