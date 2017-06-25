(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-stamp', './TransitionGroup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-stamp'), require('./TransitionGroup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStamp, global.TransitionGroup);
    global.Collection = mod.exports;
  }
})(this, function (exports, _react, _reactStamp, _TransitionGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactStamp2 = _interopRequireDefault(_reactStamp);

  var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _reactStamp2.default)(_react2.default).compose({

    displayName: 'Collection',

    propTypes: {
      data: _react.PropTypes.array.isRequired
    },

    render: function render() {
      return _react2.default.createElement(
        _TransitionGroup2.default,
        null,
        this.renderChildren()
      );
    },
    renderChildren: function renderChildren() {
      var _props = this.props,
          data = _props.data,
          children = _props.children;

      return data.reduce(function (acc, datum, index) {
        return acc.concat(_react.Children.map(children, function (child, c) {
          return (0, _react.cloneElement)(child, { datum: datum, index: index, data: data, key: index + '_' + c, _key: index + '_' + c });
        }));
      }, []);
    }
  });
});