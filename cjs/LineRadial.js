'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Shape = require('d3-shape');

var _itsSet = require('its-set');

var _itsSet2 = _interopRequireDefault(_itsSet);

var _Element2 = require('./Element');

var _Element3 = _interopRequireDefault(_Element2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = function (_Element) {
  _inherits(Line, _Element);

  function Line() {
    _classCallCheck(this, Line);

    return _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).apply(this, arguments));
  }

  _createClass(Line, [{
    key: 'getPrivateProps',
    value: function getPrivateProps() {
      return ['points'];
    }
  }, {
    key: 'getSchema',
    value: function getSchema() {
      return {
        d: {
          get inputs() {
            return ['angle', 'radius', 'defined', 'curve', 'context'];
          },
          calculation: function calculation(props) {
            var calc = (0, _d3Shape.lineRadial)();
            var keys = this.inputs;
            keys.forEach(function (attrName) {
              if ((0, _itsSet2.default)(props[attrName])) {
                calc = calc[attrName](props[attrName]);
              }
            });
            return calc(props.points);
          }
        }
      };
    }
  }]);

  return Line;
}(_Element3.default);

Line.displayName = 'LineRadial';
Line.propTypes = {
  angle: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  radius: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  defined: _propTypes2.default.number,
  curve: _propTypes2.default.number,
  context: _propTypes2.default.number,
  points: _propTypes2.default.array.isRequired
};
Line.defaultProps = _extends({}, _Element3.default.defaultProps, {
  component: 'path',
  angle: function angle(d) {
    return d[0];
  },
  radius: function radius(d) {
    return d[1];
  }
});
exports.default = Line;