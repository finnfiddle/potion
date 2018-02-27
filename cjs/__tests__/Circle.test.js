'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Circle = require('../Circle');

var _Circle2 = _interopRequireDefault(_Circle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Circle', function () {

  it('renders', function () {
    var actual = (0, _enzyme.shallow)(_react2.default.createElement(_Circle2.default, {
      cx: 100,
      cy: 200,
      r: 300,
      fill: 'black',
      stroke: 'red',
      strokeWidth: 2,
      style: {
        display: 'block'
      },
      foo: 'bar'
    }));

    var expected = _react2.default.createElement('circle', {
      cx: 100,
      cy: 200,
      r: 300,
      fill: 'black',
      stroke: 'red',
      strokeWidth: 2,
      style: { display: 'block' },
      foo: 'bar'
    });

    expect(actual.containsMatchingElement(expected)).to.equal(true);
  });
}); /* global expect */
/* eslint-disable max-len */