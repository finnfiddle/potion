/* global expect */
/* eslint-disable max-len */
import React from 'react';
import { shallow } from 'enzyme';

import Svg from '../Svg';

class RNSvg extends React.Component {
  render() {
    return <rnsvg {...this.props} />;
  }
}

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

  it('RN component prop', () => {
    const actual = shallow(
      <Svg
        width={300}
        height={400}
        style={{
          display: 'block',
        }}
        foo='bar'
        component={RNSvg}
      />
    );

    const expected = (
      <RNSvg
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

  it('RN components prop', () => {
    const actual = shallow(
      <Svg
        width={300}
        height={400}
        style={{
          display: 'block',
        }}
        foo='bar'
        components={{ svg: RNSvg }}
      />
    );

    const expected = (
      <RNSvg
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
