'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { Children, cloneElement } from 'react';
// import PropTypes from 'prop-types';
// import d3Shape from 'd3-shape';
// import itsSet from 'its-set';

var Stack = function (_Component) {
  _inherits(Stack, _Component);

  function Stack(props) {
    _classCallCheck(this, Stack);

    var _this = _possibleConstructorReturn(this, (Stack.__proto__ || Object.getPrototypeOf(Stack)).call(this, props));

    _this.displayName = 'Stack';
    return _this;
  }

  _createClass(Stack, [{
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