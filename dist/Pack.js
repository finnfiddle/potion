'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStamp = require('react-stamp');

var _reactStamp2 = _interopRequireDefault(_reactStamp);

var _d3Hierarchy = require('d3-hierarchy');

var _itsSet = require('its-set');

var _itsSet2 = _interopRequireDefault(_itsSet);

var _TransitionGroup = require('./TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStamp2.default)(_react2.default).compose({

  displayName: 'Pack',

  propTypes: {
    radius: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
    size: _react.PropTypes.arrayOf(_react.PropTypes.number),
    padding: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
    // packSiblings: PropTypes.arrayOf(
    //  PropTypes.shape({ x: PropTypes.number, y: PropTypes.number })
    // ),
    // packEnclose: PropTypes.number,
    data: _react.PropTypes.object.isRequired
  },

  defaultProps: {
    datumPropsToTween: ['x', 'y', 'r']
  },

  render: function render() {
    return _react2.default.createElement(
      _TransitionGroup2.default,
      null,
      this.renderChildren()
    );
  },
  renderChildren: function renderChildren() {
    var _props = this.props,
        data = _props.data,
        children = _props.children,
        includeRoot = _props.includeRoot,
        datumPropsToTween = _props.datumPropsToTween;


    var packData = this.getPack()(data);
    var filteredData = (0, _helpers.flattenHierarchy)(packData).slice(includeRoot ? 0 : 1).map(function (datum) {
      var result = (0, _assign2.default)({}, datum.data, datum);
      delete result.data;
      delete result.parent;
      return result;
    });

    return filteredData.reduce(function (acc, datum, index) {
      return acc.concat(_react.Children.map(children, function (child, c) {
        return (0, _react.cloneElement)(child, {
          datum: datum,
          index: index,
          data: filteredData,
          key: index + '_' + c,
          _key: index + '_' + c,
          datumPropsToTween: datumPropsToTween
        });
      }));
    }, []);
  },
  getPack: function getPack() {
    var _this = this;

    var p = (0, _d3Hierarchy.pack)();
    ['radius', 'size', 'padding'].forEach(function (key) {
      if ((0, _itsSet2.default)(_this.props[key])) p = p[key](_this.props[key]);
    });
    return p;
  }
});