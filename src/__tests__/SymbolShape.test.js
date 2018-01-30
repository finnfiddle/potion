/* global expect */
/* eslint-disable max-len */
import React from 'react';

import { mount } from 'enzyme';

import Svg from '../Svg';
import SymbolShape from '../SymbolShape';

describe('SymbolShape', () => {

  it('renders', () => {
    const actual = mount(
      <Svg>
        <SymbolShape
          size={({ datum }) => datum.foo}
          type='symbolCross'
          fill='black'
          stroke='red'
          strokeWidth={2}
          style={{
            display: 'block',
          }}
          datum={{ foo: 500 }}
        />
      </Svg>
    );
    const expected = mount(
      <svg>
        <g>
          <path
            fill='black'
            stroke='red'
            strokeWidth='2'
            style={{ display: 'block' }}
            d='M-15,-5L-5,-5L-5,-15L5,-15L5,-5L15,-5L15,5L5,5L5,15L-5,15L-5,5L-15,5Z'
          />
        </g>
      </svg>
    );
    expect(actual.update().html()).to.equalIgnoreSpaces(expected.html());
  });

});
