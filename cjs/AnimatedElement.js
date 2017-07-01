(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-stamp', 'its-set', 'lodash.isfunction', 'lodash.pick', 'lodash.omit', 'lodash.uniq', 'd3-interpolate', 'd3-ease', 'deep-equal', './mixins/SelectSelfMixin', 'd3-transition'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-stamp'), require('its-set'), require('lodash.isfunction'), require('lodash.pick'), require('lodash.omit'), require('lodash.uniq'), require('d3-interpolate'), require('d3-ease'), require('deep-equal'), require('./mixins/SelectSelfMixin'), require('d3-transition'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStamp, global.itsSet, global.lodash, global.lodash, global.lodash, global.lodash, global.d3Interpolate, global.d3Ease, global.deepEqual, global.SelectSelfMixin, global.d3Transition);
    global.AnimatedElement = mod.exports;
  }
})(this, function (exports, _react, _reactStamp, _itsSet, _lodash, _lodash3, _lodash5, _lodash7, _d3Interpolate, _d3Ease, _deepEqual, _SelectSelfMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactStamp2 = _interopRequireDefault(_reactStamp);

  var _itsSet2 = _interopRequireDefault(_itsSet);

  var _lodash2 = _interopRequireDefault(_lodash);

  var _lodash4 = _interopRequireDefault(_lodash3);

  var _lodash6 = _interopRequireDefault(_lodash5);

  var _lodash8 = _interopRequireDefault(_lodash7);

  var ease = _interopRequireWildcard(_d3Ease);

  var _deepEqual2 = _interopRequireDefault(_deepEqual);

  var _SelectSelfMixin2 = _interopRequireDefault(_SelectSelfMixin);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var EASE_TYPES = Object.keys(ease);
  var PRIVATE_PROP_NAMES = ['enterDatum', 'exitDatum', 'enterDuration', 'updateDuration', 'exitDuration', 'enterEase', 'updateEase', 'exitEase', 'propsToCheckForChanges', 'datum', 'index', 'style', '_key', 'data', 'nodes', 'links', 'datumPropsToTween', 'datumAccessor'];
  var DONT_GET_DATUM = false;

  exports.default = (0, _reactStamp2.default)(_react2.default).compose(_SelectSelfMixin2.default, {

    displayName: 'AnimatedElement',

    propTypes: {
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
    },

    defaultProps: {
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
    },

    init: function init() {
      var _this = this;

      this.attrNames = this.getAttrNames();
      this.derivedAttrNames = this.getDerivedAttrNames();
      this.derivedAttrDefaults = this.getDerivedAttrDefaults();
      this.derivedAttrInputNames = this.getDerivedAttrInputNames();
      this.privatePropNames = this.getPrivatePropNames().concat(PRIVATE_PROP_NAMES);
      this.allAttrInputNames = this.attrNames.concat(Object.keys(this.derivedAttrInputNames).reduce(function (acc, key) {
        return acc.concat(_this.derivedAttrInputNames[key]);
      }, []));
      this.allDerivedAttrInputNames = (0, _lodash8.default)(Object.keys(this.derivedAttrInputNames).reduce(function (acc, key) {
        return acc.concat(_this.derivedAttrInputNames[key]);
      }, []));
      this.propsToCheckForChanges = ['datum'].concat(this.props.propsToCheckForChanges);
      this.attrs = this.getAttrs(this.props);
      this.state = this.getState();
    },
    componentWillAppearOrEnter: function componentWillAppearOrEnter(callback) {
      var _this2 = this;

      var _props = this.props,
          enterDuration = _props.enterDuration,
          enterDatum = _props.enterDatum,
          enterEase = _props.enterEase;


      var resolvedEnterDatum = this.getDatum(this.props);
      var enterDatumIsSet = (0, _itsSet2.default)(enterDatum);
      if (enterDatumIsSet) {
        resolvedEnterDatum = (0, _lodash2.default)(enterDatum) ? enterDatum(this.props) : enterDatum;
      }

      var calculatedEnterDatum = this.assignAbsolutePropsToDatum(resolvedEnterDatum, this.props, !enterDatumIsSet);

      var enterAttrs = this.getAttrsFromDatum(calculatedEnterDatum, DONT_GET_DATUM);
      var enterStyle = this.getStyleFromDatum(calculatedEnterDatum);

      this.selection = this.selectSelf();

      this.applyAttrsToSelection(enterAttrs, this.selection);
      this.applyStyleToSelection(enterStyle, this.selection);
      this.applyDerivedAttrsToSelection(this.props, calculatedEnterDatum, this.selection, DONT_GET_DATUM);

      var transition = this.selection.transition().duration(enterDuration).ease(ease[enterEase]);

      this.tweenDerivedAttrs(calculatedEnterDatum, this.assignAbsolutePropsToDatum(this.getDatum(this.props), this.props), this.props, transition, DONT_GET_DATUM);
      this.applyAttrsToSelection(this.attrs, transition);
      this.applyStyleToSelection(this.getStyle(this.props), transition);

      this.currentDatum = calculatedEnterDatum;

      transition.on('interrupt', callback);
      transition.on('end', function () {
        _this2.setState(_this2.getState(), callback);
      });
    },
    componentWillAppear: function componentWillAppear(callback) {
      this.componentWillAppearOrEnter(callback);
    },
    componentWillEnter: function componentWillEnter(callback) {
      this.componentWillAppearOrEnter(callback);
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      var updateDuration = nextProps.updateDuration,
          updateEase = nextProps.updateEase;


      var nextAttrs = this.getAttrs(nextProps);
      var nextDatum = this.getDatum(nextProps);
      var nextDerivedAttrs = this.getDerivedAttrs(nextProps, nextDatum);
      var nextCombinedAttrs = Object.assign({}, nextAttrs, nextDerivedAttrs);

      if ((0, _itsSet2.default)(nextDatum) && (0, _itsSet2.default)(this.currentDatum) && !(0, _deepEqual2.default)(this.currentDatum, nextDatum)) {
        var nextStyle = this.getStyle(nextProps);

        this.selection = this.selectSelf();

        var transition = this.selection.transition().duration(updateDuration).ease(ease[updateEase]);

        this.applyAttrsToSelection(nextAttrs, transition);
        this.applyStyleToSelection(nextStyle, transition);
        this.tweenDerivedAttrs(this.currentDatum, this.assignAbsolutePropsToDatum(nextDatum, nextProps), nextProps, transition, DONT_GET_DATUM);

        transition.on('end', function () {
          _this3.setState(_this3.getState(nextProps, nextAttrs));
        });
      } else if ((0, _itsSet2.default)(this.currentAttrs) && (0, _itsSet2.default)(nextCombinedAttrs) && !(0, _deepEqual2.default)(this.currentAttrs, nextCombinedAttrs)) {
        this.updateFromNonDatumChange(nextProps);
        this.currentAttrs = nextCombinedAttrs;
      }

      this.currentAttrs = nextCombinedAttrs;
      this.currentDatum = nextDatum;
    },
    componentWillLeave: function componentWillLeave(callback) {
      var _props2 = this.props,
          exitDatum = _props2.exitDatum,
          exitDuration = _props2.exitDuration,
          exitEase = _props2.exitEase,
          datum = _props2.datum;


      if (exitDuration <= 0) callback();

      var resolvedExitDatum = datum;
      if ((0, _itsSet2.default)(exitDatum)) {
        resolvedExitDatum = (0, _lodash2.default)(exitDatum) ? exitDatum(this.props) : exitDatum;
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
    },
    componentWillUnmount: function componentWillUnmount() {
      if ((0, _itsSet2.default)(this.selection)) this.selection.interrupt();
      clearTimeout(this.leaveTimeout);
    },
    updateFromNonDatumChange: function updateFromNonDatumChange(nextProps) {
      var nextAttrs = this.getAttrs(nextProps);
      var nextStyle = this.getStyle(nextProps);
      this.selection = this.selectSelf();

      this.applyAttrsToSelection(nextAttrs, this.selection);
      this.applyStyleToSelection(nextStyle, this.selection);
      this.applyDerivedAttrs(this.assignAbsolutePropsToDatum(this.getDatum(nextProps), nextProps), nextProps, this.selection);
    },
    getState: function getState(props, attrs) {
      return (0, _lodash6.default)(Object.assign({}, props || this.props, attrs || this.attrs), this.privatePropNames);
    },
    getAttrNames: function getAttrNames() {
      return [];
    },
    getPrivatePropNames: function getPrivatePropNames() {
      return [];
    },
    getDerivedAttrNames: function getDerivedAttrNames() {
      return [];
    },
    getDerivedAttrDefaults: function getDerivedAttrDefaults() {
      return {};
    },
    getDerivedAttrInputNames: function getDerivedAttrInputNames() {
      return [];
    },
    getDerivedAttrSelectors: function getDerivedAttrSelectors() {
      return {};
    },
    getDatum: function getDatum(props) {
      return props.datumAccessor(props);
    },
    assignAbsolutePropsToDatum: function assignAbsolutePropsToDatum(datum, props) {
      var shouldGetDatum = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      var startingAcc = shouldGetDatum ? Object.assign({}, this.getDatum(Object.assign({}, props, { datum: datum }))) : datum;
      return this.allAttrInputNames.filter(function (name) {
        return !(0, _lodash2.default)(props[name]);
      }).reduce(function (acc, name) {
        return Object.assign({}, acc, _defineProperty({}, name, props[name]));
      }, startingAcc);
    },
    applyAttrsToSelection: function applyAttrsToSelection(attrs, selection) {
      if (!(0, _itsSet2.default)(attrs)) return;
      // TODO: check if we need to concat here
      this.attrNames.concat(this.derivedAttrNames).forEach(function (name) {
        if ((0, _itsSet2.default)(attrs[name])) {
          selection.attr(name, attrs[name]);
        }
      });
    },
    applyStyleToSelection: function applyStyleToSelection(style, selection) {
      if (!(0, _itsSet2.default)(style)) return;
      Object.keys(style).forEach(function (name) {
        selection.attr(name, style[name]);
      });
    },
    getAttrsFromDatum: function getAttrsFromDatum(datum) {
      var shouldGetDatum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      return this.getAttrs(Object.assign({}, this.props, { datum: datum }), undefined, shouldGetDatum);
    },
    getStyleFromDatum: function getStyleFromDatum(datum) {
      return this.getStyle(Object.assign({}, this.props, { datum: datum }));
    },
    getAttrs: function getAttrs(props, attrNames) {
      var _this4 = this;

      var shouldGetDatum = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      return (attrNames || this.attrNames).filter(function (key) {
        return (0, _itsSet2.default)(props[key]);
      }).reduce(function (acc, key) {
        var datum = shouldGetDatum ? _this4.getDatum(props) : props.datum;
        var propsWithResolvedDatum = Object.assign({}, props, { datum: datum });
        var prop = propsWithResolvedDatum[key];
        if (!(0, _itsSet2.default)(prop)) return acc;
        if ((0, _lodash2.default)(prop) && (0, _itsSet2.default)(datum)) {
          prop = prop(propsWithResolvedDatum);
        }
        return Object.assign({}, _this4.attrDefaults, acc, _defineProperty({}, key, prop));
      }, {});
    },
    getStyle: function getStyle(props) {
      var style = props.style;

      if ((0, _lodash2.default)(style)) return style(props);
      return style;
    },
    applyDerivedAttrsToSelection: function applyDerivedAttrsToSelection(props, datum, selection, shouldGetDatum) {
      var _this5 = this;

      this.derivedAttrNames.forEach(function (key) {
        _this5.applyAttrsToSelection(_defineProperty({}, key, _this5.getDerivationMethod(key, props, shouldGetDatum)(datum)), selection);
      });
    },
    getDerivedAttrs: function getDerivedAttrs(props, datum, shouldGetDatum) {
      var _this6 = this;

      return this.derivedAttrNames.reduce(function (acc, key) {
        return Object.assign({}, acc, _defineProperty({}, key, _this6.getDerivationMethod(key, props, shouldGetDatum)(datum)));
      }, {});
    },
    applyDerivedAttrs: function applyDerivedAttrs(toDatum, props, selection, shouldGetDatum) {
      var _this7 = this;

      this.derivedAttrNames.forEach(function (key) {
        selection.attr(key, _this7.getDerivationMethod(key, props, shouldGetDatum)(toDatum));
      });
    },
    tweenDerivedAttrs: function tweenDerivedAttrs(fromDatum, toDatum, props, transition, shouldGetDatum) {
      var _this8 = this;

      this.derivedAttrNames.forEach(function (key) {
        _this8.attrTween(key, fromDatum, toDatum, transition, _this8.getDerivationMethod(key, props, shouldGetDatum));
      });
    },
    attrTween: function attrTween(attrName, fromDatum, toDatum, transition, derivationMethod) {
      var datumPropsToTween = this.props.datumPropsToTween;

      var keysToInterpolate = Object.keys(datumPropsToTween.length ? (0, _lodash4.default)(toDatum, datumPropsToTween) : toDatum);

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
  });
});