/* global expect */
/* eslint-disable max-len */
import React from 'react';
import { shallow } from 'enzyme';

import Line from '../Line';

describe('Line', () => {

  it('renders', () => {
    const actual = shallow(
      <Line
        x1={100}
        x2={200}
        y1={300}
        y2={400}
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
      <line
        x1={100}
        x2={200}
        y1={300}
        y2={400}
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
