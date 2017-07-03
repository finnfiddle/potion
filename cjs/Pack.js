(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'd3-hierarchy', 'its-set', './TransitionGroup', './helpers'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('d3-hierarchy'), require('its-set'), require('./TransitionGroup'), require('./helpers'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.d3Hierarchy, global.itsSet, global.TransitionGroup, global.helpers);
    global.Pack = mod.exports;
  }
})(this, function (exports, _react, _d3Hierarchy, _itsSet, _TransitionGroup, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _itsSet2 = _interopRequireDefault(_itsSet);

  var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var Pack = function (_Component) {
    _inherits(Pack, _Component);

    function Pack(props) {
      _classCallCheck(this, Pack);

      var _this = _possibleConstructorReturn(this, (Pack.__proto__ || Object.getPrototypeOf(Pack)).call(this, props));

      _this.displayName = 'Pack';
      return _this;
    }

    _createClass(Pack, [{
      key: 'getPack',
      value: function getPack() {
        var _this2 = this;

        var p = (0, _d3Hierarchy.pack)();
        ['radius', 'size', 'padding'].forEach(function (key) {
          if ((0, _itsSet2.default)(_this2.props[key])) p = p[key](_this2.props[key]);
        });
        return p;
      }
    }, {
      key: 'renderChildren',
      value: function renderChildren() {
        var _props = this.props,
            data = _props.data,
            children = _props.children,
            includeRoot = _props.includeRoot,
            datumPropsToTween = _props.datumPropsToTween;


        var packData = this.getPack()(data);
        var filteredData = (0, _helpers.flattenHierarchy)(packData).slice(includeRoot ? 0 : 1).map(function (datum) {
          var result = Object.assign({}, datum.data, datum);
          delete result.data;
          delete result.parent;
          return result;
        });

        return filteredData.reduce(function (acc, datum, index) {
          return acc.concat(_react.Children.map(children, function (child, c) {
            return (0, _react.cloneElement)(child, {
              datum: datum,
              index: index,
              data: filteredData,
              key: index + '_' + c,
              _key: index + '_' + c,
              datumPropsToTween: datumPropsToTween
            });
          }));
        }, []);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          _TransitionGroup2.default,
          null,
          this.renderChildren()
        );
      }
    }]);

    return Pack;
  }(_react.Component);

  exports.default = Pack;


  Pack.propTypes = {
    radius: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
    size: _react.PropTypes.arrayOf(_react.PropTypes.number),
    padding: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
    // packSiblings: PropTypes.arrayOf(
    //  PropTypes.shape({ x: PropTypes.number, y: PropTypes.number })
    // ),
    // packEnclose: PropTypes.number,
    data: _react.PropTypes.object.isRequired,
    children: _react.PropTypes.node,
    includeRoot: _react.PropTypes.bool,
    datumPropsToTween: _react.PropTypes.arrayOf(_react.PropTypes.string)
  };

  Pack.defaultProps = {
    datumPropsToTween: ['x', 'y', 'r']
  };
});