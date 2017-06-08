'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStamp = require('react-stamp');

var _reactStamp2 = _interopRequireDefault(_reactStamp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import itsSet from 'its-set';
// import d3Shape from 'd3-shape';

exports.default = (0, _reactStamp2.default)(_react2.default).compose({

  displayName: 'Area',

  propTypes: {
    x: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
    x0: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
    x1: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
    y: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
    y0: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
    y1: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
    defined: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
    curve: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
    context: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
    lineX0: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
    lineY0: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
    lineX1: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
    lineY1: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func])
  },

  render: function render() {
    return 'TODO';
  }
});