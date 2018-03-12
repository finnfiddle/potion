'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Chord = require('d3-chord');

var _Layout2 = require('./Layout');

var _Layout3 = _interopRequireDefault(_Layout2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chord = function (_Layout) {
  _inherits(Chord, _Layout);

  function Chord() {
    _classCallCheck(this, Chord);

    return _possibleConstructorReturn(this, (Chord.__proto__ || Object.getPrototypeOf(Chord)).apply(this, arguments));
  }

  _createClass(Chord, [{
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

        return _extends({
          key: key
        }, data, {
          source: _extends({}, data.source, {
            startAngle: style.sourceStartAngle,
            endAngle: style.sourceEndAngle,
            value: style.sourceValue
          }),
          target: _extends({}, data.target, {
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
Chord.propTypes = _extends({}, _Layout3.default.propTypes, {
  padAngle: _propTypes2.default.func,
  sortGroups: _propTypes2.default.func,
  sortSubgroups: _propTypes2.default.func,
  sortChords: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  data: _propTypes2.default.array
});
exports.default = Chord;