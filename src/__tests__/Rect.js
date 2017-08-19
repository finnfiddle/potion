/* global expect */
/* eslint-disable max-len */
import React from 'react';

import { shallow, mount } from 'enzyme';

import Svg from '../Svg';
import Rect from '../Rect';

describe('Rect', () => {

  it('renders', () => {
    const actual = mount(
      <Svg>
        <Rect
          x={({ datum }) => datum.foo}
          y={200}
          width={300}
          height={400}
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
          <rect
            x='100'
            y='200'
            width='300'
            height='400'
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
