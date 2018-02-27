'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3V4Grid = require('d3-v4-grid');

var _d3V4Grid2 = _interopRequireDefault(_d3V4Grid);

var _Layout2 = require('./Layout');

var _Layout3 = _interopRequireDefault(_Layout2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Grid = function (_Layout) {
  _inherits(Grid, _Layout);

  function Grid() {
    _classCallCheck(this, Grid);

    return _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).apply(this, arguments));
  }

  _createClass(Grid, [{
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
        return _extends({}, node, meta);
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