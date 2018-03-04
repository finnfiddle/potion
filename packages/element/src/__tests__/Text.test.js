/* global expect */
/* eslint-disable max-len */
import React from 'react';
import { shallow } from 'enzyme';

import Text from '../Text';

describe('Text', () => {

  it('renders', () => {
    const actual = shallow(
      <Text
        dx={100}
        dy={200}
        fill='black'
        stroke='red'
        strokeWidth={2}
        style={{
          display: 'block',
        }}
        foo='bar'
      >
        testing 123
      </Text>
    );

    const expected = (
      <text
        dx={100}
        dy={200}
        fill='black'
        stroke='red'
        strokeWidth={2}
        style={{ display: 'block' }}
        foo='bar'
      >
        testing 123
      </text>
    );

    expect(
      actual.containsMatchingElement(expected)
    ).to.equal(true);
  });

});
