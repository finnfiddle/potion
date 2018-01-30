'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { Children, cloneElement } from 'react';
// import PropTypes from 'prop-types';
// import d3Shape from 'd3-shape';
// import itsSet from 'its-set';

var Stack = function (_Component) {
  (0, _inherits3.default)(Stack, _Component);

  function Stack(props) {
    (0, _classCallCheck3.default)(this, Stack);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Stack.__proto__ || (0, _getPrototypeOf2.default)(Stack)).call(this, props));

    _this.displayName = 'Stack';
    return _this;
  }

  (0, _createClass3.default)(Stack, [{
    key: 'render',
    value: function render() {
      return 'TODO';
      // const { children, name, data } = this.props;
      // const stackData = this.getStack(data);
      //
      // return Children.map(children, child =>
      //   cloneElement(child, { [name]: stackData }),
      // );
    }

    // getStack() {
    //   let stack = d3Shape.stack();
    //   [
    //     'keys',
    //     'value',
    //     'order',
    //     'offset',
    //   ].forEach((key) => {
    //     if (itsSet(this.props[key])) stack = stack[key](this.props[key]);
    //   });
    //   return stack;
    // },

  }]);
  return Stack;
}(_react.Component);

exports.default = Stack;


Stack.propTypes = {
  // name
  // keys
  // value
  // order
  // offset
};