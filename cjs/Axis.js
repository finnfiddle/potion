'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _d3Axis = require('d3-axis');

var d3Axis = _interopRequireWildcard(_d3Axis);

var _d3Interpolate = require('d3-interpolate');

var _helpers = require('./helpers');

var _SelectSelf2 = require('./mixins/SelectSelf');

var _SelectSelf3 = _interopRequireDefault(_SelectSelf2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Axis = function (_SelectSelf) {
  (0, _inherits3.default)(Axis, _SelectSelf);

  function Axis(props) {
    (0, _classCallCheck3.default)(this, Axis);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Axis.__proto__ || (0, _getPrototypeOf2.default)(Axis)).call(this, props));

    _this.displayName = 'Axis';
    _this.state = {
      scale: _this.props.scale
    };
    return _this;
  }

  (0, _createClass3.default)(Axis, [{
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