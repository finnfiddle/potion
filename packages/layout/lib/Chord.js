'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Chord = require('d3-chord');

var _Layout2 = require('./Layout');

var _Layout3 = _interopRequireDefault(_Layout2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Chord = function (_Layout) {
  (0, _inherits3.default)(Chord, _Layout);

  function Chord() {
    (0, _classCallCheck3.default)(this, Chord);
    return (0, _possibleConstructorReturn3.default)(this, (Chord.__proto__ || (0, _getPrototypeOf2.default)(Chord)).apply(this, arguments));
  }

  (0, _createClass3.default)(Chord, [{
    key: 'getSchema',
    value: function getSchema() {
      return {
        layout: _d3Chord.chord,
        layoutProps: ['padAngle', 'sortGroups', 'sortSubgroups', 'sortChords'],
        selectStylesToTween: function selectStylesToTween(d) {
          return {
            sourceStartAngle: d.source.startAngle,
            sourceEndAngle: d.source.endAngle,
            sourceValue: d.source.value,
            targetStartAngle: d.target.startAngle,
            targetEndAngle: d.target.endAngle,
            targetValue: d.target.value
          };
        }
      };
    }
  }, {
    key: 'getData',
    value: function getData() {
      return this.getLayout()(this.props.data);
    }
  }, {
    key: 'getAnimatedData',
    value: function getAnimatedData() {
      var _this2 = this;

      return this.getData().map(function (d) {
        return {
          key: d.source.index + '_' + d.source.subindex + '_' + d.target.index + '_' + d.target.subindex,
          data: d,
          style: _this2.schema.selectStylesToTween(d)
        };
      });
    }
  }, {
    key: 'transformInterpolatedStyles',
    value: function transformInterpolatedStyles(data) {
      return data.map(function (d) {
        var key = d.key,
            data = d.data,
            style = d.style;

        return (0, _extends3.default)({
          key: key
        }, data, {
          source: (0, _extends3.default)({}, data.source, {
            startAngle: style.sourceStartAngle,
            endAngle: style.sourceEndAngle,
            value: style.sourceValue
          }),
          target: (0, _extends3.default)({}, data.target, {
            startAngle: style.targetStartAngle,
            endAngle: style.targetEndAngle,
            value: style.targetValue
          })
        });
      });
    }
  }]);
  return Chord;
}(_Layout3.default);

Chord.displayName = 'Chord';
Chord.propTypes = (0, _extends3.default)({}, _Layout3.default.propTypes, {
  padAngle: _propTypes2.default.func,
  sortGroups: _propTypes2.default.func,
  sortSubgroups: _propTypes2.default.func,
  sortChords: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  data: _propTypes2.default.array
});
exports.default = Chord;