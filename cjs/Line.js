'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _constants = require('./constants');

var _util = require('./util');

var _AnimatedElement2 = require('./mixins/AnimatedElement');

var _AnimatedElement3 = _interopRequireDefault(_AnimatedElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Line = function (_AnimatedElement) {
  (0, _inherits3.default)(Line, _AnimatedElement);

  function Line(props) {
    (0, _classCallCheck3.default)(this, Line);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Line.__proto__ || (0, _getPrototypeOf2.default)(Line)).call(this, props));

    _this.displayName = 'Line';
    return _this;
  }

  (0, _createClass3.default)(Line, [{
    key: 'getAttrNames',
    value: function getAttrNames() {
      return ['x1', 'x2', 'y1', 'y2'].concat(_constants.TWEENABLE_SVG_PRESENTATION_ATTRS);
    }
  }, {
    key: 'render',
    value: function render() {
      var className = this.props.className;

      return _react2.default.createElement('line', (0, _extends3.default)({}, this.state, {
        className: className,
        style: this.getStyle(this.props)
      }, (0, _util.bindMouseEvents)(this.props)));
    }
  }]);
  return Line;
}(_AnimatedElement3.default);

exports.default = Line;


Line.propTypes = {
  x1: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.number]).isRequired,
  x2: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.number]).isRequired,
  y1: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.number]).isRequired,
  y2: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.number]).isRequired
};

Line.defaultProps = (0, _assign2.default)({}, _AnimatedElement3.default.defaultProps);