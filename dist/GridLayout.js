'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStamp = require('react-stamp');

var _reactStamp2 = _interopRequireDefault(_reactStamp);

var _d3V4Grid = require('d3-v4-grid');

var _d3V4Grid2 = _interopRequireDefault(_d3V4Grid);

var _SelectSelfMixin = require('./mixins/SelectSelfMixin');

var _SelectSelfMixin2 = _interopRequireDefault(_SelectSelfMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStamp2.default)(_react2.default).compose(_SelectSelfMixin2.default, {

  displayName: 'GridLayout',

  propTypes: {
    // data
    // width
    // height
  },

  defaultProps: {
    data: []
  },

  state: {},

  componentDidMount: function componentDidMount() {
    var original = [{}, {}, {}, {}];
    var grid = (0, _d3V4Grid2.default)().data(original).size([400, 200]).bands().layout();

    console.log(original, grid.nodes(), grid.size(), grid.nodeSize());
  },
  render: function render() {
    return null;
  }
});