'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStamp = require('react-stamp');

var _reactStamp2 = _interopRequireDefault(_reactStamp);

var _d3Shape = require('d3-shape');

var _itsSet = require('its-set');

var _itsSet2 = _interopRequireDefault(_itsSet);

var _isFunction = require('lodash/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _SelectSelfMixin = require('./mixins/SelectSelfMixin');

var _SelectSelfMixin2 = _interopRequireDefault(_SelectSelfMixin);

var _Shape = require('./Shape');

var _Shape2 = _interopRequireDefault(_Shape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStamp2.default)(_react2.default).compose(_SelectSelfMixin2.default, _Shape2.default, {

  displayName: 'Arc',

  getAttrNames: function getAttrNames() {
    return ['fill', 'opacity'];
  },
  getGeneratedAttrNames: function getGeneratedAttrNames() {
    return ['d'];
  },
  render: function render() {
    return _react2.default.createElement('path', this.state);
  },
  getGenerator: function getGenerator(attrName) {
    var _this = this;

    var _ret = function () {
      switch (attrName) {
        case 'd':
          var generator = (0, _d3Shape.arc)();
          ['innerRadius', 'outerRadius', 'startAngle', 'endAngle'].forEach(function (attrName) {
            if ((0, _itsSet2.default)(_this.props[attrName])) {
              generator = generator[attrName](_this.getValue(_this.props[attrName]));
            }
          });
          return {
            v: function v(props) {
              return generator(props);
            }
          };
      }
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
  },
  getValue: function getValue(value) {
    var _props = this.props,
        datum = _props.datum,
        index = _props.index;

    if ((0, _isFunction2.default)(value)) return value(datum, index);
    return value;
  }
});