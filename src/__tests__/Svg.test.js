/* global expect */
/* eslint-disable max-len */
import React from 'react';
import { shallow } from 'enzyme';

import Svg from '../Svg';

describe('Svg', () => {

  it('renders', () => {
    const actual = shallow(
      <Svg
        width={300}
        height={400}
        style={{
          display: 'block',
        }}
        foo='bar'
      />
    );

    const expected = (
      <svg
        width={300}
        height={400}
        style={{ display: 'block' }}
        foo='bar'
      />
    );

    expect(
      actual.containsMatchingElement(expected)
    ).to.equal(true);
  });

});
