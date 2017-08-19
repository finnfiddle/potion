/* global expect */
/* eslint-disable max-len */
import React from 'react';

import { shallow, mount } from 'enzyme';

import Svg from '../Svg';
import Text from '../Text';

describe('Text', () => {

  it('renders', () => {
    const actual = mount(
      <Svg>
        <Text
          dx={({ datum }) => datum.foo}
          dy={200}
          fill='black'
          stroke='red'
          strokeWidth={2}
          style={{
            display: 'block',
          }}
          datum={{ foo: 100 }}
        >
          testing 123
        </Text>
      </Svg>
    );
    const expected = shallow(
      <svg>
        <g>
          <text
            dx='100'
            dy='200'
            fill='black'
            stroke='red'
            strokeWidth='2'
            style={{ display: 'block' }}
          >
            testing 123
          </text>
        </g>
      </svg>
    );
    expect(actual.update().html()).to.equalIgnoreSpaces(expected.html());
  });

});
