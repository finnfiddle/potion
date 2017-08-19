/* global expect, eslint-disable max-len */
import React from 'react';

import { shallow, mount } from 'enzyme';

import Svg from '../Svg';
import Circle from '../Circle';

describe('Circle', () => {

  it('renders', () => {
    const actual = mount(
      <Svg>
        <Circle
          cx={({ datum }) => datum.foo}
          cy={200}
          r={300}
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
    const expected = shallow(
      <svg>
        <g>
          <circle
            cx='100'
            cy='200'
            r='300'
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
