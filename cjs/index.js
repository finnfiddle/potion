(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Arc', './Area', './Axis', './AxisBottom', './AxisLeft', './AxisRight', './AxisTop', './Circle', './Collection', './Curve', './Grid', './Group', './ForceSimulation', './Line', './Pack', './Pie', './RadialArea', './RadialLine', './Rect', './Stack', './SymbolShape', './Svg', './Text', './TransitionGroup', './helpers'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Arc'), require('./Area'), require('./Axis'), require('./AxisBottom'), require('./AxisLeft'), require('./AxisRight'), require('./AxisTop'), require('./Circle'), require('./Collection'), require('./Curve'), require('./Grid'), require('./Group'), require('./ForceSimulation'), require('./Line'), require('./Pack'), require('./Pie'), require('./RadialArea'), require('./RadialLine'), require('./Rect'), require('./Stack'), require('./SymbolShape'), require('./Svg'), require('./Text'), require('./TransitionGroup'), require('./helpers'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Arc, global.Area, global.Axis, global.AxisBottom, global.AxisLeft, global.AxisRight, global.AxisTop, global.Circle, global.Collection, global.Curve, global.Grid, global.Group, global.ForceSimulation, global.Line, global.Pack, global.Pie, global.RadialArea, global.RadialLine, global.Rect, global.Stack, global.SymbolShape, global.Svg, global.Text, global.TransitionGroup, global.helpers);
    global.index = mod.exports;
  }
})(this, function (exports, _Arc, _Area, _Axis, _AxisBottom, _AxisLeft, _AxisRight, _AxisTop, _Circle, _Collection, _Curve, _Grid, _Group, _ForceSimulation, _Line, _Pack, _Pie, _RadialArea, _RadialLine, _Rect, _Stack, _SymbolShape, _Svg, _Text, _TransitionGroup, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.helpers = exports.TransitionGroup = exports.Text = exports.Svg = exports.SymbolShape = exports.Stack = exports.Rect = exports.RadialLine = exports.RadialArea = exports.Pie = exports.Pack = exports.Line = exports.ForceSimulation = exports.Group = exports.Grid = exports.Curve = exports.Collection = exports.Circle = exports.AxisTop = exports.AxisRight = exports.AxisLeft = exports.AxisBottom = exports.Axis = exports.Area = exports.Arc = undefined;

  var _Arc2 = _interopRequireDefault(_Arc);

  var _Area2 = _interopRequireDefault(_Area);

  var _Axis2 = _interopRequireDefault(_Axis);

  var _AxisBottom2 = _interopRequireDefault(_AxisBottom);

  var _AxisLeft2 = _interopRequireDefault(_AxisLeft);

  var _AxisRight2 = _interopRequireDefault(_AxisRight);

  var _AxisTop2 = _interopRequireDefault(_AxisTop);

  var _Circle2 = _interopRequireDefault(_Circle);

  var _Collection2 = _interopRequireDefault(_Collection);

  var _Curve2 = _interopRequireDefault(_Curve);

  var _Grid2 = _interopRequireDefault(_Grid);

  var _Group2 = _interopRequireDefault(_Group);

  var _ForceSimulation2 = _interopRequireDefault(_ForceSimulation);

  var _Line2 = _interopRequireDefault(_Line);

  var _Pack2 = _interopRequireDefault(_Pack);

  var _Pie2 = _interopRequireDefault(_Pie);

  var _RadialArea2 = _interopRequireDefault(_RadialArea);

  var _RadialLine2 = _interopRequireDefault(_RadialLine);

  var _Rect2 = _interopRequireDefault(_Rect);

  var _Stack2 = _interopRequireDefault(_Stack);

  var _SymbolShape2 = _interopRequireDefault(_SymbolShape);

  var _Svg2 = _interopRequireDefault(_Svg);

  var _Text2 = _interopRequireDefault(_Text);

  var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

  var _helpers2 = _interopRequireDefault(_helpers);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = {
    Arc: _Arc2.default,
    Area: _Area2.default,
    Axis: _Axis2.default,
    AxisBottom: _AxisBottom2.default,
    AxisLeft: _AxisLeft2.default,
    AxisRight: _AxisRight2.default,
    AxisTop: _AxisTop2.default,
    Circle: _Circle2.default,
    Collection: _Collection2.default,
    Curve: _Curve2.default,
    Grid: _Grid2.default,
    Group: _Group2.default,
    ForceSimulation: _ForceSimulation2.default,
    Line: _Line2.default,
    Pack: _Pack2.default,
    Pie: _Pie2.default,
    RadialArea: _RadialArea2.default,
    RadialLine: _RadialLine2.default,
    Rect: _Rect2.default,
    Stack: _Stack2.default,
    SymbolShape: _SymbolShape2.default,
    Svg: _Svg2.default,
    Text: _Text2.default,
    TransitionGroup: _TransitionGroup2.default,
    helpers: _helpers2.default
  };
  exports.Arc = _Arc2.default;
  exports.Area = _Area2.default;
  exports.Axis = _Axis2.default;
  exports.AxisBottom = _AxisBottom2.default;
  exports.AxisLeft = _AxisLeft2.default;
  exports.AxisRight = _AxisRight2.default;
  exports.AxisTop = _AxisTop2.default;
  exports.Circle = _Circle2.default;
  exports.Collection = _Collection2.default;
  exports.Curve = _Curve2.default;
  exports.Grid = _Grid2.default;
  exports.Group = _Group2.default;
  exports.ForceSimulation = _ForceSimulation2.default;
  exports.Line = _Line2.default;
  exports.Pack = _Pack2.default;
  exports.Pie = _Pie2.default;
  exports.RadialArea = _RadialArea2.default;
  exports.RadialLine = _RadialLine2.default;
  exports.Rect = _Rect2.default;
  exports.Stack = _Stack2.default;
  exports.SymbolShape = _SymbolShape2.default;
  exports.Svg = _Svg2.default;
  exports.Text = _Text2.default;
  exports.TransitionGroup = _TransitionGroup2.default;
  exports.helpers = _helpers2.default;
});