'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Rect = require('../Rect');

var _Rect2 = _interopRequireDefault(_Rect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Rect', function () {

  it('renders', function () {
    var actual = (0, _enzyme.shallow)(_react2.default.createElement(_Rect2.default, {
      x: 100,
      y: 200,
      width: 300,
      height: 400,
      fill: 'black',
      stroke: 'red',
      strokeWidth: 2,
      style: {
        display: 'block'
      },
      foo: 'bar'
    }));

    var expected = _react2.default.createElement('rect', {
      x: 100,
      y: 200,
      width: 300,
      height: 400,
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