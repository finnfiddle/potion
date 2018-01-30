'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends4 = require('babel-runtime/helpers/extends');

var _extends5 = _interopRequireDefault(_extends4);

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFauxDom = require('react-faux-dom');

var _reactFauxDom2 = _interopRequireDefault(_reactFauxDom);

var _d3Selection = require('d3-selection');

require('d3-transition');

var _itsSet = require('its-set');

var _itsSet2 = _interopRequireDefault(_itsSet);

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _d3Interpolate = require('d3-interpolate');

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BEFORE_ENTER = 'BEFORE_ENTER';
var ENTER = 'ENTER';
var UPDATE = 'UPDATE';
var EXIT = 'EXIT';
var TICK = 16;

var Element = function (_Component) {
  (0, _inherits3.default)(Element, _Component);

  function Element(props) {
    (0, _classCallCheck3.default)(this, Element);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Element.__proto__ || (0, _getPrototypeOf2.default)(Element)).call(this, props));

    _this.state = { el: null };
    _this.el = new _reactFauxDom2.default.Element(props.component);
    _this.selection = (0, _d3Selection.select)(_this.el);
    _this.attrNames = _this.getAttrNames();
    _this.derivedAttrNames = _this.getDerivedAttrNames();
    _this.derivedAttrInputNames = _this.getDerivedAttrInputNames();
    _this.animationEnd = 0;
    _this.currentAttr = {};
    _this.currentStyle = {};
    return _this;
  }

  // eslint-disable-next-line react/sort-comp


  (0, _createClass3.default)(Element, [{
    key: 'componentWillAppear',
    value: function componentWillAppear(callback) {
      this.componentWillAppearOrEnter(callback);
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(callback) {
      this.componentWillAppearOrEnter(callback);
    }
  }, {
    key: 'componentWillAppearOrEnter',
    value: function componentWillAppearOrEnter(callback) {
      this.draw(this.getDrawData(BEFORE_ENTER));
      this.draw((0, _extends5.default)({}, this.getDrawData(ENTER), {
        callback: callback
      }));
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.draw(this.getDrawData(UPDATE, nextProps));
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(callback) {
      this.draw((0, _extends5.default)({}, this.getDrawData(EXIT), {
        callback: callback
      }));
    }
  }, {
    key: 'getAttrNames',
    value: function getAttrNames() {
      return [];
    }
  }, {
    key: 'getDrawData',
    value: function getDrawData(stage, nextProps) {
      var props = nextProps || this.props;
      switch (stage) {
        case BEFORE_ENTER:
          {
            var datum = this.getProp('enterDatum', props) || this.getProp('datum', props);
            var normalizedProps = (0, _extends5.default)({}, props, { datum: datum });
            return {
              attr: this.getAttr(normalizedProps),
              style: this.getStyle(normalizedProps),
              transition: { duration: 0 }
            };
          }
        case ENTER:
          {
            var _datum = this.getProp('datum', props);
            var _normalizedProps = (0, _extends5.default)({}, props, { datum: _datum });
            return {
              attr: this.getAttr(_normalizedProps),
              style: this.getStyle(_normalizedProps),
              transition: { duration: props.enterDuration },
              tween: {
                fromDatum: this.getProp('enterDatum', props) || this.getProp('datum', props),
                toDatum: _datum,
                props: this.props
              }
            };
          }
        case UPDATE:
          {
            var _datum2 = this.getProp('datum', props);
            var datumHasChanged = false;
            if (nextProps) {
              datumHasChanged = !(0, _deepEqual2.default)(this.getProp('datum', this.props), this.getProp('datum', nextProps));
            }
            var _normalizedProps2 = (0, _extends5.default)({}, props, { datum: _datum2 });
            var attr = this.getAttr(_normalizedProps2);
            var style = this.getStyle(_normalizedProps2);
            if (!datumHasChanged) {
              attr = (0, _helpers.diff)(attr, this.currentAttr);
              style = (0, _helpers.diff)(style, this.currentStyle);
            }
            return {
              attr: attr,
              style: style,
              transition: { duration: datumHasChanged ? props.updateDuration : 0 }
            };
          }
        case EXIT:
          {
            var _datum3 = this.getProp('exitDatum', props) || this.getProp('datum', props);
            var _normalizedProps3 = (0, _extends5.default)({}, props, { datum: _datum3 });
            return {
              attr: this.getAttr(_normalizedProps3),
              style: this.getStyle(_normalizedProps3),
              transition: { duration: props.exitDuration }
            };
          }
        // no default
      }
    }
  }, {
    key: 'getProp',
    value: function getProp(key, props) {
      var prop = props[key];
      if ((0, _helpers.isFunction)(prop)) {
        prop = prop(props);
      }
      return prop;
    }
  }, {
    key: 'getAttr',
    value: function getAttr(props, whitelist) {
      var _this2 = this;

      return (whitelist || this.attrNames).filter(function (key) {
        return (0, _itsSet2.default)(props[key]);
      }).reduce(function (acc, key) {
        var prop = _this2.getProp(key, props);
        return (0, _extends5.default)({}, _this2.attrDefaults, acc, (0, _defineProperty3.default)({}, key, prop));
      }, {});
    }
  }, {
    key: 'getStyle',
    value: function getStyle(props) {
      var style = props.style;

      if ((0, _helpers.isFunction)(style)) return style(props);
      return style || {};
    }
  }, {
    key: 'tweenDerivedAttrs',
    value: function tweenDerivedAttrs(_ref) {
      var _this3 = this;

      var fromDatum = _ref.fromDatum,
          toDatum = _ref.toDatum,
          props = _ref.props,
          selection = _ref.selection;

      this.derivedAttrNames.forEach(function (key) {
        _this3.attrTween({
          attrName: key,
          fromDatum: fromDatum,
          toDatum: toDatum,
          selection: selection,
          derivationMethod: _this3.getDerivationMethod(key, props)
        });
      });
    }
  }, {
    key: 'attrTween',
    value: function attrTween(_ref2) {
      var attrName = _ref2.attrName,
          fromDatum = _ref2.fromDatum,
          toDatum = _ref2.toDatum,
          selection = _ref2.selection,
          derivationMethod = _ref2.derivationMethod;
      var datumPropsToTween = this.props.datumPropsToTween;

      var keysToInterpolate = (0, _keys2.default)(datumPropsToTween.length ? (0, _helpers.pick)(toDatum, datumPropsToTween) : toDatum);

      var interpolater = keysToInterpolate.reduce(function (acc, key) {
        return (0, _assign2.default)({}, acc, (0, _defineProperty3.default)({}, key, (0, _d3Interpolate.interpolate)((0, _itsSet2.default)(fromDatum[key]) ? fromDatum[key] : toDatum[key], toDatum[key])));
      }, {});

      selection.attrTween(attrName, function () {
        return function (t) {
          var midDatum = {};
          keysToInterpolate.forEach(function (key) {
            midDatum[key] = interpolater[key](t);
          });
          return derivationMethod(midDatum);
        };
      });
    }
  }, {
    key: 'evaluateProps',
    value: function evaluateProps(props) {
      return (0, _keys2.default)(props).reduce(function (acc, key) {
        return (0, _extends5.default)({}, acc, (0, _defineProperty3.default)({}, key, (0, _helpers.isFunction)(props[key]) ? props[key](props) : props[key]));
      }, {});
    }
  }, {
    key: 'draw',
    value: function draw(_ref3) {
      var _this4 = this;

      var _ref3$attr = _ref3.attr,
          attr = _ref3$attr === undefined ? {} : _ref3$attr,
          _ref3$style = _ref3.style,
          style = _ref3$style === undefined ? {} : _ref3$style,
          _ref3$transition = _ref3.transition,
          transition = _ref3$transition === undefined ? {} : _ref3$transition,
          tween = _ref3.tween,
          _ref3$callback = _ref3.callback,
          callback = _ref3$callback === undefined ? function () {} : _ref3$callback;

      var attrKeys = (0, _keys2.default)(attr);
      var styleKeys = (0, _keys2.default)(style);
      if (!attrKeys.length && !styleKeys.length) {
        callback();
        return;
      }
      var duration = Math.max((transition.duration || 0) - TICK * 2, 0);
      var selection = this.selection;
      if (duration) {
        selection = selection.transition().duration(duration);
      }
      if (attrKeys.length) {
        attrKeys.forEach(function (key) {
          selection.attr(key, attr[key]);
        });
      }
      if (styleKeys.length) {
        styleKeys.forEach(function (key) {
          selection.style(key, style[key]);
        });
      }
      if (tween) {
        this.tweenDerivedAttrs((0, _extends5.default)({}, tween, { selection: selection }));
      }
      if (duration) {
        this.currentAttr = (0, _extends5.default)({}, this.currentAttr, attr);
        this.currentStyle = (0, _extends5.default)({}, this.currentStyle, style);
        this.animate(duration);
      }
      setTimeout(function () {
        _this4.currentAttr = (0, _extends5.default)({}, _this4.currentAttr, attr);
        _this4.currentStyle = (0, _extends5.default)({}, _this4.currentStyle, style);
        _this4.solidify();
        callback();
      }, duration);
    }
  }, {
    key: 'solidify',
    value: function solidify() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

      this.setState({
        el: (0, _react.cloneElement)(this.el.toReact(), (0, _helpers.bindMouseEvents)(this.props))
      }, callback);
    }
  }, {
    key: 'animate',
    value: function animate(duration) {
      var _this5 = this;

      this.animationEnd = Math.max(Date.now() + duration, this.animationEnd) + TICK * 2;
      if (!this.animation) {
        this.animation = setInterval(function () {
          if (Date.now() < _this5.animationEnd) {
            _this5.solidify();
          } else {
            _this5.stopAnimating();
          }
        }, TICK);
      }
    }
  }, {
    key: 'stopAnimating',
    value: function stopAnimating() {
      this.animation = clearInterval(this.animation);
      this.animationEnd = 0;
    }
  }, {
    key: 'isAnimating',
    value: function isAnimating() {
      return !!this.animation;
    }
  }]);
  return Element;
}(_react.Component);

Element.displayName = 'Element';
Element.propTypes = {
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  enterDuration: _propTypes2.default.number,
  updateDuration: _propTypes2.default.number,
  exitDuration: _propTypes2.default.number
};
Element.defaultProps = {
  enterEase: 'easeLinear',
  updateEase: 'easeLinear',
  exitEase: 'easeLinear',
  enterDuration: 0,
  updateDuration: 0,
  exitDuration: 0,
  datumPropsToTween: []
};
exports.default = Element;