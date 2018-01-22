/* global expect */
/* eslint-disable max-len */
import React from 'react';

import { mount } from 'enzyme';

import Svg from '../Svg';
import Line from '../Line';

describe('Line', () => {

  it('renders', () => {
    const actual = mount(
      <Svg>
        <Line
          x1={({ datum }) => datum.foo}
          x2={200}
          y1={300}
          y2={400}
          fill='black'
          stroke='red'
          strokeWidth={2}
          style={{
            display: 'block',
          }}
          datum={{ foo: 100 }}
        />
      </Svg>
    );
    const expected = mount(
      <svg>
        <g>
          <line
            x1='100'
            x2='200'
            y1='300'
            y2='400'
            fill='black'
            stroke='red'
            strokeWidth='2'
            style={{ display: 'block' }}
          />
        </g>
      </svg>
    );
    expect(actual.update().html()).to.equalIgnoreSpaces(expected.html());
  });

});
