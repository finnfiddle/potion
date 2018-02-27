'use strict';

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Pack = require('../Pack');

var _Pack2 = _interopRequireDefault(_Pack);

var _timers = require('timers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global expect */
/* eslint-disable max-len */
describe('Pack', function () {

  it('static', function () {
    var actual = (0, _enzyme.mount)(_react2.default.createElement(
      _Pack2.default,
      {
        data: {
          children: [{ value: 1, key: '1' }, { value: 2, key: '2' }, { value: 3, key: '3' }]
        },
        sum: function sum(datum) {
          return datum.value;
        },
        size: [200, 200],
        includeRoot: false
      },
      function (nodes) {
        return nodes.map(function (_ref) {
          var x = _ref.x,
              y = _ref.y,
              r = _ref.r,
              key = _ref.data.key;
          return _react2.default.createElement('circle', {
            key: key,
            cx: Math.round(x),
            cy: Math.round(y),
            r: Math.round(r),
            fill: 'black'
          });
        });
      }
    ));

    expect(actual.containsMatchingElement(_react2.default.createElement('circle', { cx: 53, cy: 54, r: 32, fill: 'black' }))).to.equal(true);

    expect(actual.containsMatchingElement(_react2.default.createElement('circle', { cx: 130, cy: 54, r: 45, fill: 'black' }))).to.equal(true);

    expect(actual.containsMatchingElement(_react2.default.createElement('circle', { cx: 76, cy: 138, r: 55, fill: 'black' }))).to.equal(true);
  });

  it('animated', function (done) {
    var actualNodeEnter = void 0;
    var actualNodeExit = void 0;
    var actual = (0, _enzyme.mount)(_react2.default.createElement(
      _Pack2.default,
      {
        data: {
          children: [{ value: 1, key: '1' }, { value: 2, key: '2' }, { value: 3, key: '3' }]
        }
        // sum={datum => datum.value}
        , size: [200, 200],
        includeRoot: false,
        nodeEnter: function nodeEnter(d) {
          actualNodeEnter = d;
          return (0, _extends3.default)({}, d, { r: 0 });
        },
        nodeExit: function nodeExit(d) {
          actualNodeExit = d;
          return (0, _extends3.default)({}, d, { r: 0 });
        },
        animate: true
      },
      function (nodes) {
        return nodes.map(function (_ref2) {
          var x = _ref2.x,
              y = _ref2.y,
              r = _ref2.r,
              key = _ref2.data.key;
          return _react2.default.createElement('circle', {
            key: key,
            cx: Math.round(x),
            cy: Math.round(y),
            r: Math.round(r),
            fill: 'black'
          });
        });
      }
    ));

    expect(actual.containsMatchingElement(_react2.default.createElement('circle', { cx: 53, cy: 54, r: 0, fill: 'black' }))).to.equal(true);

    expect(actual.containsMatchingElement(_react2.default.createElement('circle', { cx: 130, cy: 54, r: 0, fill: 'black' }))).to.equal(true);

    expect(actual.containsMatchingElement(_react2.default.createElement('circle', { cx: 76, cy: 138, r: 0, fill: 'black' }))).to.equal(true);

    (0, _timers.setTimeout)(function () {
      actual.update();
      expect(actual.containsMatchingElement(_react2.default.createElement('circle', { cx: 53, cy: 54, r: 32, fill: 'black' }))).to.equal(true);

      expect(actual.containsMatchingElement(_react2.default.createElement('circle', { cx: 130, cy: 54, r: 45, fill: 'black' }))).to.equal(true);

      expect(actual.containsMatchingElement(_react2.default.createElement('circle', { cx: 76, cy: 138, r: 55, fill: 'black' }))).to.equal(true);

      actual.setProps({
        data: {
          children: [{ value: 2, key: '2' }, { value: 3, key: '3' }, { value: 4, key: '4' }]
        }
      }, function () {
        actual.update();
        (0, _timers.setTimeout)(function () {
          actual.update();

          expect(actual.containsMatchingElement(_react2.default.createElement('circle', { cx: 52, cy: 60, r: 38, fill: 'black' }))).to.equal(true);

          expect(actual.containsMatchingElement(_react2.default.createElement('circle', { cx: 136, cy: 60, r: 46, fill: 'black' }))).to.equal(true);

          expect(actual.containsMatchingElement(_react2.default.createElement('circle', { cx: 85, cy: 144, r: 53, fill: 'black' }))).to.equal(true);

          var expectedNodeEnter = { r: 53, x: 85, y: 144 };
          (0, _keys2.default)(expectedNodeEnter).forEach(function (key) {
            expect(Math.round(actualNodeEnter[key].val)).to.equal(expectedNodeEnter[key]);
          });

          var expectedNodeExit = { r: 0, x: 53, y: 54 };
          (0, _keys2.default)(expectedNodeExit).forEach(function (key) {
            expect(Math.round(actualNodeExit[key])).to.equal(expectedNodeExit[key]);
          });

          done();
        }, 1000);
      });
    }, 1000);
  });
});