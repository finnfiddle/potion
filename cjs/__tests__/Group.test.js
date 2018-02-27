'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Group = require('../Group');

var _Group2 = _interopRequireDefault(_Group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Group', function () {

  it('renders', function () {
    var actual = (0, _enzyme.shallow)(_react2.default.createElement(
      _Group2.default,
      {
        transform: {
          rotate: [300, 400, 500],
          translate: [100, 200]
        },
        style: {
          display: 'block'
        },
        foo: 'bar'
      },
      _react2.default.createElement('circle', null)
    ));
    var expected = _react2.default.createElement(
      'g',
      {
        style: { display: 'block' },
        transform: ' rotate(300, 400, 500) translate(100, 200)',
        foo: 'bar'
      },
      _react2.default.createElement('circle', null)
    );

    expect(actual.containsMatchingElement(expected)).to.equal(true);
  });
}); /* global expect */
/* eslint-disable max-len */