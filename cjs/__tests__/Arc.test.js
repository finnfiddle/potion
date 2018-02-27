'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Arc = require('../Arc');

var _Arc2 = _interopRequireDefault(_Arc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Arc', function () {

  it('renders', function () {
    var actual = (0, _enzyme.shallow)(_react2.default.createElement(_Arc2.default, {
      innerRadius: 100,
      outerRadius: 200,
      startAngle: Math.PI / 2,
      endAngle: Math.PI / 2 * 3,
      fill: 'black',
      stroke: 'red',
      strokeWidth: 2,
      style: { display: 'block' },
      foo: 'bar'
    }));

    var expected = _react2.default.createElement('path', {
      fill: 'black',
      stroke: 'red',
      strokeWidth: 2,
      style: { display: 'block' },
      d: 'M200,0A200,200,0,1,1,-200,2.4492935982947064e-14L-100,1.2246467991473532e-14A100,100,0,1,0,100,0Z',
      foo: 'bar'
    });

    expect(actual.containsMatchingElement(expected)).to.equal(true);
  });
}); /* global expect */
/* eslint-disable max-len */