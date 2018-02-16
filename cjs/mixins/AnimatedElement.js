'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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

var _util = require('../util');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EASE_TYPES = (0, _keys2.default)(ease);
var PRIVATE_PROP_NAMES = ['enterDatum', 'exitDatum', 'enterDuration', 'updateDuration', 'exitDuration', 'enterEase', 'updateEase', 'exitEase', 'propsToCheckForChanges', 'datum', 'index', 'style', '_key', 'data', 'nodes', 'links', 'datumPropsToTween', 'datumAccessor'];
var DONT_GET_DATUM = false;

var Element = function (_SelectSelf) {
  (0, _inherits3.default)(Element, _SelectSelf);

  function Element(props) {
    (0, _classCallCheck3.default)(this, Element);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Element.__proto__ || (0, _getPrototypeOf2.default)(Element)).call(this, props));

    _this.attrNames = _this.getAttrNames();
    _this.derivedAttrNames = _this.getDerivedAttrNames();
    _this.derivedAttrDefaults = _this.getDerivedAttrDefaults();
    _this.derivedAttrInputNames = _this.getDerivedAttrInputNames();
    _this.privatePropNames = _this.getPrivatePropNames().concat(PRIVATE_PROP_NAMES);
    _this.allAttrInputNames = _this.attrNames.concat((0, _keys2.default)(_this.derivedAttrInputNames).reduce(function (acc, key) {
      return acc.concat(_this.derivedAttrInputNames[key]);
    }, []));
    _this.allDerivedAttrInputNames = (0, _arrayUniq2.default)((0, _keys2.default)(_this.derivedAttrInputNames).reduce(function (acc, key) {
      return acc.concat(_this.derivedAttrInputNames[key]);
    }, []));
    _this.propsToCheckForChanges = ['datum'].concat(_this.props.propsToCheckForChanges);
    _this.attrs = _this.getAttrs(_this.props);
    _this.state = _this.getState();
    return _this;
  }

  (0, _createClass3.default)(Element, [{
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
        resolvedEnterDatum = (0, _util.isFunction)(enterDatum) ? enterDatum(this.props) : enterDatum;
      }

      var calculatedEnterDatum = this.assignAbsolutePropsToDatum(resolvedEnterDatum, this.props, !enterDatumIsSet);
      var currentDatum = this.assignAbsolutePropsToDatum(this.getDatum(this.props), this.props);

      var derivedAttrs = this.getDerivedAttrs(this.props, currentDatum);
      var nextCombinedAttrs = (0, _assign2.default)({}, this.attrs, derivedAttrs);
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
      var nextCombinedAttrs = (0, _assign2.default)({}, nextAttrs, nextDerivedAttrs);
      var nextState = this.getState(nextProps, nextCombinedAttrs);

      if ((0, _itsSet2.default)(nextDatum) && (0, _itsSet2.default)(this.currentDatum) && !(0, _deepEqual2.default)((0, _util.pick)(this.currentDatum, (0, _keys2.default)(nextDatum)), nextDatum)) {
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
        resolvedExitDatum = (0, _util.isFunction)(exitDatum) ? exitDatum(this.props) : exitDatum;
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
      return (0, _util.omit)((0, _assign2.default)({}, props || this.props, attrs || this.attrs), this.privatePropNames);
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

      var startingAcc = shouldGetDatum ? (0, _assign2.default)({}, this.getDatum((0, _assign2.default)({}, props, { datum: datum }))) : datum;
      return this.allAttrInputNames.filter(function (name) {
        return !(0, _util.isFunction)(props[name]);
      }).reduce(function (acc, name) {
        return (0, _assign2.default)({}, acc, (0, _defineProperty3.default)({}, name, props[name]));
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
      (0, _keys2.default)(style).forEach(function (name) {
        selection.attr(name, style[name]);
      });
    }
  }, {
    key: 'getAttrsFromDatum',
    value: function getAttrsFromDatum(datum) {
      var shouldGetDatum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      return this.getAttrs((0, _assign2.default)({}, this.props, { datum: datum }), undefined, shouldGetDatum);
    }
  }, {
    key: 'getStyleFromDatum',
    value: function getStyleFromDatum(datum) {
      return this.getStyle((0, _assign2.default)({}, this.props, { datum: datum }));
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
        var propsWithResolvedDatum = (0, _assign2.default)({}, props, { datum: datum });
        var prop = propsWithResolvedDatum[key];
        if (!(0, _itsSet2.default)(prop)) return acc;
        if ((0, _util.isFunction)(prop) && (0, _itsSet2.default)(datum)) {
          prop = prop(propsWithResolvedDatum);
        }
        return (0, _assign2.default)({}, _this4.attrDefaults, acc, (0, _defineProperty3.default)({}, key, prop));
      }, {});
    }
  }, {
    key: 'getStyle',
    value: function getStyle(props) {
      var style = props.style;

      if ((0, _util.isFunction)(style)) return style(props);
      return style || {};
    }
  }, {
    key: 'applyDerivedAttrsToSelection',
    value: function applyDerivedAttrsToSelection(props, datum, selection, shouldGetDatum) {
      var _this5 = this;

      this.derivedAttrNames.forEach(function (key) {
        _this5.applyAttrsToSelection((0, _defineProperty3.default)({}, key, _this5.getDerivationMethod(key, props, shouldGetDatum)(datum)), selection);
      });
    }
  }, {
    key: 'getDerivedAttrs',
    value: function getDerivedAttrs(props, datum, shouldGetDatum) {
      var _this6 = this;

      return this.derivedAttrNames.reduce(function (acc, key) {
        return (0, _assign2.default)({}, acc, (0, _defineProperty3.default)({}, key, _this6.getDerivationMethod(key, props, shouldGetDatum)(datum)));
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

      var keysToInterpolate = (0, _keys2.default)(datumPropsToTween.length ? (0, _util.pick)(toDatum, datumPropsToTween) : toDatum);

      var interpolater = keysToInterpolate.reduce(function (acc, key) {
        return (0, _assign2.default)({}, acc, (0, _defineProperty3.default)({}, key, (0, _d3Interpolate.interpolate)((0, _itsSet2.default)(fromDatum[key]) ? fromDatum[key] : toDatum[key], toDatum[key])));
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
  return Element;
}(_SelectSelf3.default);

Element.displayName = 'Element';
Element.propTypes = {
  datum: _propTypes2.default.object,
  datumAccessor: _propTypes2.default.oneOfType([_propTypes2.default.func]),
  enterDatum: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
  exitDatum: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
  enterEase: _propTypes2.default.oneOf(EASE_TYPES),
  updateEase: _propTypes2.default.oneOf(EASE_TYPES),
  exitEase: _propTypes2.default.oneOf(EASE_TYPES),
  enterDuration: _propTypes2.default.number,
  updateDuration: _propTypes2.default.number,
  exitDuration: _propTypes2.default.number,
  propsToCheckForChanges: _propTypes2.default.arrayOf(_propTypes2.default.string),
  datumPropsToTween: _propTypes2.default.arrayOf(_propTypes2.default.string)
};
Element.defaultProps = {
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
exports.default = Element;