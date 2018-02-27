'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _SymbolShape = require('../SymbolShape');

var _SymbolShape2 = _interopRequireDefault(_SymbolShape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('SymbolShape', function () {

  it('renders', function () {
    var actual = (0, _enzyme.shallow)(_react2.default.createElement(_SymbolShape2.default, {
      size: 500,
      type: 'symbolCross',
      fill: 'black',
      stroke: 'red',
      strokeWidth: 2,
      style: {
        display: 'block'
      },
      foo: 'bar'
    }));

    var expected = _react2.default.createElement('path', {
      fill: 'black',
      stroke: 'red',
      strokeWidth: 2,
      style: { display: 'block' },
      d: 'M-15,-5L-5,-5L-5,-15L5,-15L5,-5L15,-5L15,5L5,5L5,15L-5,15L-5,5L-15,5Z',
      foo: 'bar'
    });

    expect(actual.containsMatchingElement(expected)).to.equal(true);
  });
}); /* global expect */
/* eslint-disable max-len */