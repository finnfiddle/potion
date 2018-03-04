/* global expect */
/* eslint-disable max-len */
import React from 'react';
import { shallow } from 'enzyme';

import Circle from '../Circle';

describe('Circle', () => {

  it('renders', () => {
    const actual = shallow(
      <Circle
        cx={100}
        cy={200}
        r={300}
        fill='black'
        stroke='red'
        strokeWidth={2}
        style={{
          display: 'block',
        }}
        foo='bar'
      />
    );

    const expected = (
      <circle
        cx={100}
        cy={200}
        r={300}
        fill='black'
        stroke='red'
        strokeWidth={2}
        style={{ display: 'block' }}
        foo='bar'
      />
    );

    expect(
      actual.containsMatchingElement(expected)
    ).to.equal(true);
  });

});
