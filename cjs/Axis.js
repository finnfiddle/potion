'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Axis = require('d3-axis');

var d3Axis = _interopRequireWildcard(_d3Axis);

var _d3Interpolate = require('d3-interpolate');

var _helpers = require('./helpers');

var _SelectSelf2 = require('./mixins/SelectSelf');

var _SelectSelf3 = _interopRequireDefault(_SelectSelf2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Axis = function (_SelectSelf) {
  _inherits(Axis, _SelectSelf);

  function Axis(props) {
    _classCallCheck(this, Axis);

    var _this = _possibleConstructorReturn(this, (Axis.__proto__ || Object.getPrototypeOf(Axis)).call(this, props));

    _this.displayName = 'Axis';
    _this.state = {
      scale: _this.props.scale
    };
    return _this;
  }

  _createClass(Axis, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderAxis(this.props.scale);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      this.selectSelf().transition().duration(1000).tween('axis', function () {
        if (!_this2.IsUnmounting) {
          var i = (0, _d3Interpolate.interpolate)(_this2.state.scale.domain(), nextProps.scale.domain());
          _this2.setState({ scale: nextProps.scale });
          return function (t) {
            _this2.renderAxis(_this2.state.scale.domain(i(t)));
          };
        }
      });
    }
  }, {
    key: 'renderAxis',
    value: function renderAxis(scale) {
      var placement = this.props.placement;

      var axis = d3Axis['axis' + (0, _helpers.cap)(placement)](scale);
      this.selectSelf().call(axis);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('g', (0, _helpers.omit)(this.props, ['scale', 'placement', 'datum', 'index', 'enterDatum', 'exitDatum']));
    }
  }]);

  return Axis;
}(_SelectSelf3.default);

exports.default = Axis;


Axis.propTypes = {
  placement: _propTypes2.default.oneOf(['top', 'bottom', 'left', 'right']),
  scale: _propTypes2.default.func.isRequired
};

Axis.defaultProps = {
  placement: 'top'
};