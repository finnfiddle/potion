/* global expect */
/* eslint-disable max-len */
import React from 'react';
import { shallow, mount } from 'enzyme';

import Svg from '../Svg';
import Arc from '../Arc';

describe('Arc', () => {

  it('renders', () => {
    const actual = shallow(
      <Arc
        innerRadius={100}
        outerRadius={200}
        startAngle={Math.PI / 2}
        endAngle={Math.PI / 2 * 3}
        fill='black'
        stroke='red'
        strokeWidth={2}
        style={{ display: 'block' }}
        foo='bar'
      />
    );

    const expected = (
      <path
        fill='black'
        stroke='red'
        strokeWidth={2}
        style={{ display: 'block' }}
        d='M200,0A200,200,0,1,1,-200,2.4492935982947064e-14L-100,1.2246467991473532e-14A100,100,0,1,0,100,0Z'
        foo='bar'
      />
    );

    expect(
      actual.containsMatchingElement(expected)
    ).to.equal(true);
  });

  it('RN context approach A', () => {
    const actual = mount(
      <Svg components={{ path: 'rnpath' }}>
        <Arc
          innerRadius={100}
          outerRadius={200}
          startAngle={Math.PI / 2}
          endAngle={Math.PI / 2 * 3}
          fill='black'
          stroke='red'
          strokeWidth={2}
          style={{ display: 'block' }}
          foo='bar'
        />
      </Svg>
    );

    const expected = '<svg><rnpath d="M200,0A200,200,0,1,1,-200,2.4492935982947064e-14L-100,1.2246467991473532e-14A100,100,0,1,0,100,0Z" fill="black" stroke="red" stroke-width="2" style="display: block;" foo="bar"></rnpath></svg>';

    expect(
      actual.html()
    ).to.equal(expected);
  });

  it('RN context approach B', () => {
    class RNPath extends React.Component {
      render() {
        return 'rnpath';
      }
    }
    const actual = mount(
      <Svg components={{ path: RNPath }}>
        <Arc
          innerRadius={100}
          outerRadius={200}
          startAngle={Math.PI / 2}
          endAngle={Math.PI / 2 * 3}
          fill='black'
          stroke='red'
          strokeWidth={2}
          style={{ display: 'block' }}
          foo='bar'
        />
      </Svg>
    );

    const expected = '<svg>rnpath</svg>';

    expect(
      actual.html()
    ).to.equal(expected);
  });

  it('RN component prop approach', () => {
    const actual = mount(
      <Svg components={{ path: 'wrongcomponet' }}>
        <Arc
          innerRadius={100}
          outerRadius={200}
          startAngle={Math.PI / 2}
          endAngle={Math.PI / 2 * 3}
          fill='black'
          stroke='red'
          strokeWidth={2}
          style={{ display: 'block' }}
          foo='bar'
          component='rightcomponent'
        />
      </Svg>
    );

    const expected = '<svg><rightcomponent d="M200,0A200,200,0,1,1,-200,2.4492935982947064e-14L-100,1.2246467991473532e-14A100,100,0,1,0,100,0Z" fill="black" stroke="red" stroke-width="2" style="display: block;" foo="bar"></rightcomponent></svg>';

    expect(
      actual.html()
    ).to.equal(expected);
  });

});
