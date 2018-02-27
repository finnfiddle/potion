/* global expect */
/* eslint-disable max-len */
import React from 'react';
import { shallow } from 'enzyme';

import SymbolShape from '../SymbolShape';

describe('SymbolShape', () => {

  it('renders', () => {
    const actual = shallow(
      <SymbolShape
        size={500}
        type='symbolCross'
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
      <path
        fill='black'
        stroke='red'
        strokeWidth={2}
        style={{ display: 'block' }}
        d='M-15,-5L-5,-5L-5,-15L5,-15L5,-5L15,-5L15,5L5,5L5,15L-5,15L-5,5L-15,5Z'
        foo='bar'
      />
    );

    expect(
      actual.containsMatchingElement(expected)
    ).to.equal(true);
  });

});
