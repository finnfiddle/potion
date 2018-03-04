'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Element2 = require('./Element');

var _Element3 = _interopRequireDefault(_Element2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rect = function (_Element) {
  _inherits(Rect, _Element);

  function Rect() {
    _classCallCheck(this, Rect);

    return _possibleConstructorReturn(this, (Rect.__proto__ || Object.getPrototypeOf(Rect)).apply(this, arguments));
  }

  return Rect;
}(_Element3.default);

Rect.displayName = 'Rect';
Rect.propTypes = {
  x: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.number]),
  y: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.number]),
  height: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.number]),
  width: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.number])
};
Rect.defaultProps = _extends({}, _Element3.default.defaultProps, {
  component: 'rect'
});
exports.default = Rect;