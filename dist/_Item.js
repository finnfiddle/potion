'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStamp = require('react-stamp');

var _reactStamp2 = _interopRequireDefault(_reactStamp);

var _isFunction = require('lodash/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _SelectSelf = require('./mixins/SelectSelf');

var _SelectSelf2 = _interopRequireDefault(_SelectSelf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BLACKLIST_CHILD_PROPS = ['component', 'valueBeforeEnter', 'valueAfterLeave', 'value'];

exports.default = (0, _reactStamp2.default)(_react2.default).compose(_SelectSelf2.default, {

  displayName: 'Item',

  propTypes: {},

  defaultProps: {},

  state: {},

  // componentWillAppear(callback) {
  //   const transition = this.selectSelf()
  //     .transition()
  //     .duration(1000)
  //     .ease(d3.easeCubicInOut);
  //
  //   ['attr', 'attrTween'].forEach(method => {
  //     if (itsSet(mutations[method])) {
  //       Object.keys(mutations[method]).forEach(key => {
  //         transition[method](key, mutations[method][key]);
  //         // transition.attr('opacity', 1);
  //       });
  //     }
  //   });
  //
  //   transition.on('end', () => {
  //     if (!this.isUnmounting) {
  //       if (itsSet(mutations.state)) this.setState(mutations.state);
  //       callback();
  //     }
  //   });
  // },
  //
  // componentWillEnter(callback) {
  //   const mutations = this.getMutations('componentWillEnter');
  //
  //   const transition = this.selectSelf()
  //     .transition()
  //     .duration(1000)
  //     .ease(d3.easeCubicInOut);
  //
  //   ['attr', 'attrTween'].forEach(method => {
  //     if (itsSet(mutations[method])) {
  //       Object.keys(mutations[method]).forEach(key => {
  //         transition[method](key, mutations[method][key]);
  //       });
  //     }
  //   });
  //
  //   transition.on('end', () => {
  //     if (!this.isUnmounting) {
  //       if (itsSet(mutations.state)) this.setState(mutations.state);
  //       if (callback) callback();
  //     }
  //   });
  // },
  //
  // componentWillReceiveProps(nextProps) {
  //   if (!deepEqual(this.props, nextProps)) {
  //
  //     const mutations = this.getMutations('componentWillReceiveProps', nextProps);
  //
  //     const transition = this.selectSelf()
  //         .transition()
  //         .duration(1000)
  //         .ease(d3.easeCubicInOut);
  //
  //     ['attr', 'attrTween'].forEach(method => {
  //       if (itsSet(mutations[method])) {
  //         Object.keys(mutations[method]).forEach(key => {
  //           transition[method](key, mutations[method][key]);
  //         });
  //       }
  //     });
  //
  //     transition.on('end', () => {
  //       if (!this.isUnmounting && itsSet(mutations.state)) this.setState(mutations.state);
  //     });
  //   }
  // },
  //
  // componentWillLeave(callback) {
  //   const mutations = this.getMutations('componentWillLeave');
  //
  //   const transition = this.selectSelf()
  //     .transition()
  //     .duration(1000)
  //     .ease(d3.easeCubicInOut);
  //
  //   ['attr', 'attrTween'].forEach(method => {
  //     if (itsSet(mutations[method])) {
  //       Object.keys(mutations[method]).forEach(key => {
  //         transition[method](key, mutations[method][key]);
  //       });
  //     }
  //   });
  //
  //   transition.on('end', () => {
  //     if (!this.isUnmounting) callback();
  //   });
  // },

  render: function render() {
    console.log(this.getChildProps(this.props.value));
    return _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement(this.props.component, this.getChildProps(this.props.value))
    );
  },
  getChildProps: function getChildProps(value) {
    var _this = this;

    return (0, _keys2.default)(this.props).filter(function (key) {
      return !BLACKLIST_CHILD_PROPS.includes(key);
    }).reduce(function (acc, key) {
      var prop = _this.props[key];
      return (0, _assign2.default)({}, acc, (0, _defineProperty3.default)({}, key, (0, _isFunction2.default)(prop) ? prop(value) : prop));
    }, {});
  }
});