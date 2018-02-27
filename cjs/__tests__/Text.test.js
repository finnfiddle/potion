'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Text', function () {

  it('renders', function () {
    var actual = (0, _enzyme.shallow)(_react2.default.createElement(
      _Text2.default,
      {
        dx: 100,
        dy: 200,
        fill: 'black',
        stroke: 'red',
        strokeWidth: 2,
        style: {
          display: 'block'
        },
        foo: 'bar'
      },
      'testing 123'
    ));

    var expected = _react2.default.createElement(
      'text',
      {
        dx: 100,
        dy: 200,
        fill: 'black',
        stroke: 'red',
        strokeWidth: 2,
        style: { display: 'block' },
        foo: 'bar'
      },
      'testing 123'
    );

    expect(actual.containsMatchingElement(expected)).to.equal(true);
  });
}); /* global expect */
/* eslint-disable max-len */