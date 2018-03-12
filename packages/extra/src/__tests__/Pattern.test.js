/* global expect */
/* eslint-disable max-len */
import React from 'react';
import { mount } from 'enzyme';

import Pattern from '../Pattern';

describe('Pattern', () => {

  it('RN', () => {
    const actual = mount(
      <Pattern.Lines
        id='pattern'
        strokeWidth={10}
        stroke='purple'
        size={10}
        orientation='diagonal'
        background='blue'
      />,
      {
        context: {
          components: {
            path: 'rnpath',
            defs: 'rndefs',
            pattern: 'rnpattern',
            rect: 'rnrect',
          },
        },
      },
    );

    const expected = '<rndefs><rnpattern id="pattern" patternunits="userSpaceOnUse" width="10" height="10"><rnrect width="10" height="10" fill="blue"></rnrect><rnpath d="M 0,10 l 10,-10 M -2.5,2.5 l 5,-5 M 7.5,12.5 l 5,-5" stroke-width="10" shape-rendering="auto" stroke="purple" stroke-linecap="square"></rnpath></rnpattern></rndefs>';

    expect(actual.html()).to.equal(expected);
  });
});
