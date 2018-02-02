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

var _d3Shape = require('d3-shape');

var _itsSet = require('its-set');

var _itsSet2 = _interopRequireDefault(_itsSet);

var _Layout2 = require('./Layout');

var _Layout3 = _interopRequireDefault(_Layout2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var unpackHierarchyList = function unpackHierarchyList(hierarchy) {
  return hierarchy.map(function (d) {
    return {
      key: d.data.key,
      data: d,
      style: {
        startAngle: d.startAngle,
        endAngle: d.endAngle
      }
    };
  });
};

var Pie = function (_Layout) {
  (0, _inherits3.default)(Pie, _Layout);

  function Pie(props) {
    (0, _classCallCheck3.default)(this, Pie);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Pie.__proto__ || (0, _getPrototypeOf2.default)(Pie)).call(this, props));

    _this.displayName = 'Pie';
    return _this;
  }

  (0, _createClass3.default)(Pie, [{
    key: 'getData',
    value: function getData() {
      return this.getPie()(this.props.data);
    }
  }, {
    key: 'getAnimatedData',
    value: function getAnimatedData() {
      return unpackHierarchyList(this.getData());
    }
  }, {
    key: 'getStaticData',
    value: function getStaticData() {
      return this.getData();
    }
  }, {
    key: 'getPie',
    value: function getPie() {
      var _this2 = this;

      var p = (0, _d3Shape.pie)();
      ['value', 'sort', 'sortValues', 'startAngle', 'endAngle', 'padAngle'].forEach(function (key) {
        if ((0, _itsSet2.default)(_this2.props[key])) p = p[key](_this2.props[key]);
      });
      return p;
    }
  }]);
  return Pie;
}(_Layout3.default);

Pie.propTypes = (0, _extends3.default)({}, _Layout3.default.propTypes, {
  value: _propTypes2.default.func,
  sort: _propTypes2.default.func,
  sortValues: _propTypes2.default.func,
  startAngle: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  endAngle: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  padAngle: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  data: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.func]),
  id: _propTypes2.default.func
});
exports.default = Pie;