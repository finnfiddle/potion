/* global expect */
/* eslint-disable max-len */
import React from 'react';
import { shallow } from 'enzyme';

import Group from '../Group';

describe('Group', () => {

  it('renders', () => {
    const actual = shallow(
      <Group
        transform={{
          rotate: [300, 400, 500],
          translate: [100, 200],
        }}
        style={{
          display: 'block',
        }}
        foo='bar'
      >
        <circle />
      </Group>
    );
    const expected = (
      <g
        style={{ display: 'block' }}
        transform=' rotate(300, 400, 500) translate(100, 200)'
        foo='bar'
      >
        <circle />
      </g>
    );

    expect(
      actual.containsMatchingElement(expected)
    ).to.equal(true);
  });

});
