'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = require('@potion/util');

var _Element2 = require('./Element');

var _Element3 = _interopRequireDefault(_Element2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Svg = function (_Element) {
  _inherits(Svg, _Element);

  function Svg() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Svg);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Svg.__proto__ || Object.getPrototypeOf(Svg)).call.apply(_ref, [this].concat(args))), _this), _this.defaultComponent = 'svg', _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Svg, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        components: _extends({}, _util.defaultProps.components, this.props.components),
        env: this.props.env
      };
    }
  }, {
    key: 'getPrivateProps',
    value: function getPrivateProps() {
      return ['components', 'env'];
    }
  }]);

  return Svg;
}(_Element3.default);

Svg.displayName = 'Svg';
Svg.propTypes = {
  patterns: _propTypes2.default.array,
  components: _util.types.components
};
Svg.defaultProps = _extends({}, _Element3.default.defaultProps, {
  components: {},
  env: 'web'
});
Svg.childContextTypes = {
  components: _util.types.components,
  env: _propTypes2.default.oneOf(['web', 'react-native-svg'])
};
exports.default = Svg;