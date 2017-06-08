'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStamp = require('react-stamp');

var _reactStamp2 = _interopRequireDefault(_reactStamp);

var _d3Axis = require('d3-axis');

var d3Axis = _interopRequireWildcard(_d3Axis);

var _d3Interpolate = require('d3-interpolate');

var _helpers = require('./helpers');

var _SelectSelfMixin = require('./mixins/SelectSelfMixin');

var _SelectSelfMixin2 = _interopRequireDefault(_SelectSelfMixin);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStamp2.default)(_react2.default).compose(_SelectSelfMixin2.default, {

  displayName: 'Axis',

  propTypes: {
    placement: _react.PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    scale: _react.PropTypes.func.isRequired
  },

  defaultProps: {
    placement: 'top'
  },

  state: {},

  init: function init() {
    this.state.scale = this.props.scale;
  },
  componentDidMount: function componentDidMount() {
    this.renderAxis(this.props.scale);
  },
  renderAxis: function renderAxis(scale) {
    var placement = this.props.placement;

    var axis = d3Axis['axis' + (0, _helpers.cap)(placement)](scale);
    this.selectSelf().call(axis);
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var _this = this;

    this.selectSelf().transition().duration(1000).tween('axis', function () {
      if (!_this.IsUnmounting) {
        var _ret = function () {
          var i = (0, _d3Interpolate.interpolate)(_this.state.scale.domain(), nextProps.scale.domain());
          _this.setState({ scale: nextProps.scale });
          return {
            v: function v(t) {
              _this.renderAxis(_this.state.scale.domain(i(t)));
            }
          };
        }();

        if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
      }
    });
  },
  render: function render() {
    var _props = this.props,
        scale = _props.scale,
        placement = _props.placement,
        datum = _props.datum,
        index = _props.index,
        restProps = (0, _objectWithoutProperties3.default)(_props, ['scale', 'placement', 'datum', 'index']);

    return _react2.default.createElement('g', restProps);
  }
});