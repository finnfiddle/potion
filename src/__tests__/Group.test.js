/* global expect */
/* eslint-disable max-len */
import React from 'react';

import { mount } from 'enzyme';

import Svg from '../Svg';
import Group from '../Group';

describe('Group', () => {

  it('renders', () => {
    const actual = mount(
      <Svg>
        <Group
          x={({ datum }) => datum.foo}
          y={200}
          rotation={300}
          rotationOriginX={400}
          rotationOriginY={500}
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
          <g
            style={{ display: 'block' }}
            transform='translate(100, 200) rotate(300, 400, 500)'
          />
        </g>
      </svg>
    );
    expect(actual.update().html()).to.equalIgnoreSpaces(expected.html());
  });

});
