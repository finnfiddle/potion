(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-stamp', 'd3-axis', 'd3-interpolate', 'lodash.omit', './helpers', './mixins/SelectSelfMixin'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-stamp'), require('d3-axis'), require('d3-interpolate'), require('lodash.omit'), require('./helpers'), require('./mixins/SelectSelfMixin'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStamp, global.d3Axis, global.d3Interpolate, global.lodash, global.helpers, global.SelectSelfMixin);
    global.Axis = mod.exports;
  }
})(this, function (exports, _react, _reactStamp, _d3Axis, _d3Interpolate, _lodash, _helpers, _SelectSelfMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactStamp2 = _interopRequireDefault(_reactStamp);

  var d3Axis = _interopRequireWildcard(_d3Axis);

  var _lodash2 = _interopRequireDefault(_lodash);

  var _SelectSelfMixin2 = _interopRequireDefault(_SelectSelfMixin);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

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

          if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
        }
      });
    },
    render: function render() {
      return _react2.default.createElement('g', (0, _lodash2.default)(this.props, ['scale', 'placement', 'datum', 'index']));
    }
  });
});