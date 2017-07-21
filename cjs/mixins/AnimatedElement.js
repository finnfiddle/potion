'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _itsSet = require('its-set');

var _itsSet2 = _interopRequireDefault(_itsSet);

var _d3Interpolate = require('d3-interpolate');

var _d3Ease = require('d3-ease');

var ease = _interopRequireWildcard(_d3Ease);

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

require('d3-transition');

var _arrayUniq = require('array-uniq');

var _arrayUniq2 = _interopRequireDefault(_arrayUniq);

var _SelectSelf2 = require('./SelectSelf');

var _SelectSelf3 = _interopRequireDefault(_SelectSelf2);

var _helpers = require('../helpers');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EASE_TYPES = Object.keys(ease);
var PRIVATE_PROP_NAMES = ['enterDatum', 'exitDatum', 'enterDuration', 'updateDuration', 'exitDuration', 'enterEase', 'updateEase', 'exitEase', 'propsToCheckForChanges', 'datum', 'index', 'style', '_key', 'data', 'nodes', 'links', 'datumPropsToTween', 'datumAccessor'];
var DONT_GET_DATUM = false;

var AnimatedElement = function (_SelectSelf) {
  _inherits(AnimatedElement, _SelectSelf);

  function AnimatedElement(props) {
    _classCallCheck(this, AnimatedElement);

    var _this = _possibleConstructorReturn(this, (AnimatedElement.__proto__ || Object.getPrototypeOf(AnimatedElement)).call(this, props));

    _this.displayName = 'AnimatedElement';
    _this.attrNames = _this.getAttrNames();
    _this.derivedAttrNames = _this.getDerivedAttrNames();
    _this.derivedAttrDefaults = _this.getDerivedAttrDefaults();
    _this.derivedAttrInputNames = _this.getDerivedAttrInputNames();
    _this.privatePropNames = _this.getPrivatePropNames().concat(PRIVATE_PROP_NAMES);
    _this.allAttrInputNames = _this.attrNames.concat(Object.keys(_this.derivedAttrInputNames).reduce(function (acc, key) {
      return acc.concat(_this.derivedAttrInputNames[key]);
    }, []));
    _this.allDerivedAttrInputNames = (0, _arrayUniq2.default)(Object.keys(_this.derivedAttrInputNames).reduce(function (acc, key) {
      return acc.concat(_this.derivedAttrInputNames[key]);
    }, []));
    _this.propsToCheckForChanges = ['datum'].concat(_this.props.propsToCheckForChanges);
    _this.attrs = _this.getAttrs(_this.props);
    _this.state = _this.getState();
    return _this;
  }

  _createClass(AnimatedElement, [{
    key: 'componentWillAppearOrEnter',
    value: function componentWillAppearOrEnter(callback) {
      var _this2 = this;

      var _props = this.props,
          enterDuration = _props.enterDuration,
          enterDatum = _props.enterDatum,
          enterEase = _props.enterEase;


      var resolvedEnterDatum = this.getDatum(this.props);
      var enterDatumIsSet = (0, _itsSet2.default)(enterDatum);
      if (enterDatumIsSet) {
        resolvedEnterDatum = (0, _helpers.isFunction)(enterDatum) ? enterDatum(this.props) : enterDatum;
      }

      var calculatedEnterDatum = this.assignAbsolutePropsToDatum(resolvedEnterDatum, this.props, !enterDatumIsSet);
      var currentDatum = this.assignAbsolutePropsToDatum(this.getDatum(this.props), this.props);

      var derivedAttrs = this.getDerivedAttrs(this.props, currentDatum);
      var nextCombinedAttrs = Object.assign({}, this.attrs, derivedAttrs);
      var nextState = this.getState(this.props, nextCombinedAttrs);

      if (!enterDuration) {
        this.currentDatum = currentDatum;
        this.setState(nextState, callback);
        return;
      }

      var enterAttrs = this.getAttrsFromDatum(calculatedEnterDatum, DONT_GET_DATUM);
      var enterStyle = this.getStyleFromDatum(calculatedEnterDatum);

      this.selection = this.selectSelf();

      this.applyAttrsToSelection(enterAttrs, this.selection);
      this.applyStyleToSelection(enterStyle, this.selection);
      this.applyDerivedAttrsToSelection(this.props, calculatedEnterDatum, this.selection, DONT_GET_DATUM);

      var transition = this.selection.transition().duration(enterDuration).ease(ease[enterEase]);

      this.tweenDerivedAttrs(calculatedEnterDatum, currentDatum, this.props, transition, DONT_GET_DATUM);
      this.applyAttrsToSelection(this.attrs, transition);
      this.applyStyleToSelection(this.getStyle(this.props), transition);

      this.currentDatum = currentDatum;

      transition.on('interrupt', callback);
      transition.on('end', function () {
        _this2.setState(nextState, callback);
      });
    }
  }, {
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
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      var updateDuration = nextProps.updateDuration,
          updateEase = nextProps.updateEase;


      var nextAttrs = this.getAttrs(nextProps);
      var nextDatum = this.assignAbsolutePropsToDatum(this.getDatum(nextProps), nextProps);
      var nextDerivedAttrs = this.getDerivedAttrs(nextProps, nextDatum);
      var nextCombinedAttrs = Object.assign({}, nextAttrs, nextDerivedAttrs);
      var nextState = this.getState(nextProps, nextCombinedAttrs);

      if ((0, _itsSet2.default)(nextDatum) && (0, _itsSet2.default)(this.currentDatum) && !(0, _deepEqual2.default)((0, _helpers.pick)(this.currentDatum, Object.keys(nextDatum)), nextDatum)) {
        if (!updateDuration) {
          this.setState(nextState);
        } else {
          var nextStyle = this.getStyle(nextProps);

          this.selection = this.selectSelf();

          var transition = this.selection.transition().duration(updateDuration).ease(ease[updateEase]);

          this.applyAttrsToSelection(nextAttrs, transition);
          this.applyStyleToSelection(nextStyle, transition);
          this.tweenDerivedAttrs(this.currentDatum, nextDatum, nextProps, transition, DONT_GET_DATUM);

          transition.on('end', function () {
            _this3.setState(nextState);
          });
        }
      } else if ((0, _itsSet2.default)(this.currentAttrs) && (0, _itsSet2.default)(nextCombinedAttrs) && !(0, _deepEqual2.default)(this.currentAttrs, nextCombinedAttrs)) {
        this.updateFromNonDatumChange(nextProps);
        this.currentAttrs = nextCombinedAttrs;
        this.setState(nextState);
      } else {
        this.setState(nextState);
      }

      this.currentAttrs = nextCombinedAttrs;
      this.currentDatum = nextDatum;
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(callback) {
      var _props2 = this.props,
          exitDatum = _props2.exitDatum,
          exitDuration = _props2.exitDuration,
          exitEase = _props2.exitEase,
          datum = _props2.datum;


      if (!exitDuration) callback();

      var resolvedExitDatum = datum;
      if ((0, _itsSet2.default)(exitDatum)) {
        resolvedExitDatum = (0, _helpers.isFunction)(exitDatum) ? exitDatum(this.props) : exitDatum;
      }

      var computedExitDatum = this.assignAbsolutePropsToDatum(resolvedExitDatum, this.props, DONT_GET_DATUM);
      var exitAttrs = this.getAttrsFromDatum(computedExitDatum);
      var exitStyle = this.getStyleFromDatum(computedExitDatum);

      var transition = this.selection.transition().duration(exitDuration).ease(ease[exitEase]);

      this.applyAttrsToSelection(exitAttrs, transition);
      this.applyStyleToSelection(exitStyle, transition);
      this.tweenDerivedAttrs(this.currentDatum, computedExitDatum, this.props, transition, DONT_GET_DATUM);

      this.leaveTimeout = setTimeout(callback, exitDuration);
      this.leaveCallback = callback;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if ((0, _itsSet2.default)(this.selection)) this.selection.interrupt();
      clearTimeout(this.leaveTimeout);
    }
  }, {
    key: 'updateFromNonDatumChange',
    value: function updateFromNonDatumChange(nextProps) {
      var nextAttrs = this.getAttrs(nextProps);
      var nextStyle = this.getStyle(nextProps);
      this.selection = this.selectSelf();

      this.applyAttrsToSelection(nextAttrs, this.selection);
      this.applyStyleToSelection(nextStyle, this.selection);
      this.applyDerivedAttrs(this.assignAbsolutePropsToDatum(this.getDatum(nextProps), nextProps), nextProps, this.selection);
    }
  }, {
    key: 'getState',
    value: function getState(props, attrs) {
      return (0, _helpers.omit)(Object.assign({}, props || this.props, attrs || this.attrs), this.privatePropNames);
    }
  }, {
    key: 'getAttrNames',
    value: function getAttrNames() {
      return [];
    }
  }, {
    key: 'getPrivatePropNames',
    value: function getPrivatePropNames() {
      return [];
    }
  }, {
    key: 'getDerivedAttrNames',
    value: function getDerivedAttrNames() {
      return [];
    }
  }, {
    key: 'getDerivedAttrDefaults',
    value: function getDerivedAttrDefaults() {
      return {};
    }
  }, {
    key: 'getDerivedAttrInputNames',
    value: function getDerivedAttrInputNames() {
      return [];
    }
  }, {
    key: 'getDerivedAttrSelectors',
    value: function getDerivedAttrSelectors() {
      return {};
    }
  }, {
    key: 'getDatum',
    value: function getDatum(props) {
      return props.datumAccessor(props);
    }
  }, {
    key: 'assignAbsolutePropsToDatum',
    value: function assignAbsolutePropsToDatum(datum, props) {
      var shouldGetDatum = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      var startingAcc = shouldGetDatum ? Object.assign({}, this.getDatum(Object.assign({}, props, { datum: datum }))) : datum;
      return this.allAttrInputNames.filter(function (name) {
        return !(0, _helpers.isFunction)(props[name]);
      }).reduce(function (acc, name) {
        return Object.assign({}, acc, _defineProperty({}, name, props[name]));
      }, startingAcc);
    }
  }, {
    key: 'applyAttrsToSelection',
    value: function applyAttrsToSelection(attrs, selection) {
      if (!(0, _itsSet2.default)(attrs)) return;
      // TODO: check if we need to concat here
      this.attrNames.concat(this.derivedAttrNames).forEach(function (name) {
        if ((0, _itsSet2.default)(attrs[name])) {
          selection.attr(name, attrs[name]);
        }
      });
    }
  }, {
    key: 'applyStyleToSelection',
    value: function applyStyleToSelection(style, selection) {
      if (!(0, _itsSet2.default)(style)) return;
      Object.keys(style).forEach(function (name) {
        selection.attr(name, style[name]);
      });
    }
  }, {
    key: 'getAttrsFromDatum',
    value: function getAttrsFromDatum(datum) {
      var shouldGetDatum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      return this.getAttrs(Object.assign({}, this.props, { datum: datum }), undefined, shouldGetDatum);
    }
  }, {
    key: 'getStyleFromDatum',
    value: function getStyleFromDatum(datum) {
      return this.getStyle(Object.assign({}, this.props, { datum: datum }));
    }
  }, {
    key: 'getAttrs',
    value: function getAttrs(props, attrNames) {
      var _this4 = this;

      var shouldGetDatum = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      return (attrNames || this.attrNames).filter(function (key) {
        return (0, _itsSet2.default)(props[key]);
      }).reduce(function (acc, key) {
        var datum = shouldGetDatum ? _this4.getDatum(props) : props.datum;
        var propsWithResolvedDatum = Object.assign({}, props, { datum: datum });
        var prop = propsWithResolvedDatum[key];
        if (!(0, _itsSet2.default)(prop)) return acc;
        if ((0, _helpers.isFunction)(prop) && (0, _itsSet2.default)(datum)) {
          prop = prop(propsWithResolvedDatum);
        }
        return Object.assign({}, _this4.attrDefaults, acc, _defineProperty({}, key, prop));
      }, {});
    }
  }, {
    key: 'getStyle',
    value: function getStyle(props) {
      var style = props.style;

      if ((0, _helpers.isFunction)(style)) return style(props);
      return style;
    }
  }, {
    key: 'applyDerivedAttrsToSelection',
    value: function applyDerivedAttrsToSelection(props, datum, selection, shouldGetDatum) {
      var _this5 = this;

      this.derivedAttrNames.forEach(function (key) {
        _this5.applyAttrsToSelection(_defineProperty({}, key, _this5.getDerivationMethod(key, props, shouldGetDatum)(datum)), selection);
      });
    }
  }, {
    key: 'getDerivedAttrs',
    value: function getDerivedAttrs(props, datum, shouldGetDatum) {
      var _this6 = this;

      return this.derivedAttrNames.reduce(function (acc, key) {
        return Object.assign({}, acc, _defineProperty({}, key, _this6.getDerivationMethod(key, props, shouldGetDatum)(datum)));
      }, {});
    }
  }, {
    key: 'applyDerivedAttrs',
    value: function applyDerivedAttrs(toDatum, props, selection, shouldGetDatum) {
      var _this7 = this;

      this.derivedAttrNames.forEach(function (key) {
        selection.attr(key, _this7.getDerivationMethod(key, props, shouldGetDatum)(toDatum));
      });
    }
  }, {
    key: 'tweenDerivedAttrs',
    value: function tweenDerivedAttrs(fromDatum, toDatum, props, transition, shouldGetDatum) {
      var _this8 = this;

      this.derivedAttrNames.forEach(function (key) {
        _this8.attrTween(key, fromDatum, toDatum, transition, _this8.getDerivationMethod(key, props, shouldGetDatum));
      });
    }
  }, {
    key: 'attrTween',
    value: function attrTween(attrName, fromDatum, toDatum, transition, derivationMethod) {
      var datumPropsToTween = this.props.datumPropsToTween;

      var keysToInterpolate = Object.keys(datumPropsToTween.length ? (0, _helpers.pick)(toDatum, datumPropsToTween) : toDatum);

      var interpolater = keysToInterpolate.reduce(function (acc, key) {
        return Object.assign({}, acc, _defineProperty({}, key, (0, _d3Interpolate.interpolate)((0, _itsSet2.default)(fromDatum[key]) ? fromDatum[key] : toDatum[key], toDatum[key])));
      }, {});

      transition.attrTween(attrName, function () {
        return function (t) {
          var midDatum = {};
          keysToInterpolate.forEach(function (key) {
            midDatum[key] = interpolater[key](t);
          });
          return derivationMethod(midDatum);
        };
      });
    }
  }]);

  return AnimatedElement;
}(_SelectSelf3.default);

exports.default = AnimatedElement;


AnimatedElement.propTypes = {
  datum: _react.PropTypes.object,
  datumAccessor: _react.PropTypes.oneOfType([_react.PropTypes.func]),
  enterDatum: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func]),
  exitDatum: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func]),
  enterEase: _react.PropTypes.oneOf(EASE_TYPES),
  updateEase: _react.PropTypes.oneOf(EASE_TYPES),
  exitEase: _react.PropTypes.oneOf(EASE_TYPES),
  enterDuration: _react.PropTypes.number,
  updateDuration: _react.PropTypes.number,
  exitDuration: _react.PropTypes.number,
  propsToCheckForChanges: _react.PropTypes.arrayOf(_react.PropTypes.string),
  datumPropsToTween: _react.PropTypes.arrayOf(_react.PropTypes.string)
};

AnimatedElement.defaultProps = {
  datumAccessor: function datumAccessor(_ref) {
    var datum = _ref.datum;
    return datum;
  },
  enterEase: 'easeLinear',
  updateEase: 'easeLinear',
  exitEase: 'easeLinear',
  enterDuration: 0,
  updateDuration: 0,
  exitDuration: 0,
  propsToCheckForChanges: [],
  datumPropsToTween: []
};