'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Svg = require('../Svg');

var _Svg2 = _interopRequireDefault(_Svg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Svg', function () {

  it('renders', function () {
    var actual = (0, _enzyme.shallow)(_react2.default.createElement(_Svg2.default, {
      width: 300,
      height: 400,
      style: {
        display: 'block'
      },
      foo: 'bar'
    }));

    var expected = _react2.default.createElement('svg', {
      width: 300,
      height: 400,
      style: { display: 'block' },
      foo: 'bar'
    });

    expect(actual.containsMatchingElement(expected)).to.equal(true);
  });
}); /* global expect */
/* eslint-disable max-len */