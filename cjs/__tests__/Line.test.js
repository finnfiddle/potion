'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Line = require('../Line');

var _Line2 = _interopRequireDefault(_Line);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Line', function () {

  it('renders', function () {
    var actual = (0, _enzyme.shallow)(_react2.default.createElement(_Line2.default, {
      x1: 100,
      x2: 200,
      y1: 300,
      y2: 400,
      fill: 'black',
      stroke: 'red',
      strokeWidth: 2,
      style: {
        display: 'block'
      },
      foo: 'bar'
    }));

    var expected = _react2.default.createElement('line', {
      x1: 100,
      x2: 200,
      y1: 300,
      y2: 400,
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