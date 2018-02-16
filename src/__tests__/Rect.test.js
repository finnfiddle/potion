/* global expect */
/* eslint-disable max-len */
import React from 'react';
import { shallow } from 'enzyme';

import Rect from '../Rect';

describe('Rect', () => {

  it('renders', () => {
    const actual = shallow(
      <Rect
        x={100}
        y={200}
        width={300}
        height={400}
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
      <rect
        x={100}
        y={200}
        width={300}
        height={400}
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
