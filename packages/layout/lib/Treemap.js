'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Hierarchy = require('d3-hierarchy');

var _util = require('@potion/util');

var _Layout2 = require('./Layout');

var _Layout3 = _interopRequireDefault(_Layout2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pack = function (_Layout) {
  _inherits(Pack, _Layout);

  function Pack() {
    _classCallCheck(this, Pack);

    return _possibleConstructorReturn(this, (Pack.__proto__ || Object.getPrototypeOf(Pack)).apply(this, arguments));
  }

  _createClass(Pack, [{
    key: 'getSchema',
    value: function getSchema() {
      return {
        layout: _d3Hierarchy.treemap,
        layoutProps: ['tile', 'size', 'round', 'padding', 'paddingInner', 'paddingOuter', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
        selectStylesToTween: function selectStylesToTween(d) {
          return {
            x0: d.x0,
            y0: d.y0,
            x1: d.x1,
            y1: d.y1
          };
        }
      };
    }
  }, {
    key: 'getData',
    value: function getData() {
      var _props = this.props,
          data = _props.data,
          sum = _props.sum,
          includeRoot = _props.includeRoot;

      return (0, _util.flattenHierarchy)(this.getLayout()((0, _d3Hierarchy.hierarchy)(data).sum(sum))).slice(includeRoot ? 0 : 1);
    }
  }]);

  return Pack;
}(_Layout3.default);

Pack.displayName = 'Tree';
Pack.propTypes = {
  data: _propTypes2.default.object.isRequired,
  includeRoot: _propTypes2.default.bool,
  sum: _propTypes2.default.func,
  size: _propTypes2.default.arrayOf(_propTypes2.default.number),
  tile: _propTypes2.default.func,
  round: _propTypes2.default.bool,
  padding: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  paddingInner: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  paddingOuter: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  paddingTop: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  paddingRight: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  paddingBottom: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  paddingLeft: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func])
};
Pack.defaultProps = _extends({}, _Layout3.default.defaultProps, {
  includeRoot: true,
  sum: function sum(d) {
    return d.value;
  }
});
exports.default = Pack;