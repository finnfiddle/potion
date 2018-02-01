/* global expect */
/* eslint-disable max-len */
import React from 'react';
import { mount } from 'enzyme';
import { hierarchy } from 'd3-hierarchy';

import Pack from '../Pack';

describe('Pack', () => {

  it('static', () => {
    const actual = mount(
      <Pack
        data={
          hierarchy({
            children: [
              { value: 1 },
              { value: 2 },
              { value: 3 },
            ],
          })
          .sum(datum => datum.value)
        }
        size={[200, 200]}
        includeRoot={false}

        // enterDatum={datum => ({ ...datum, value: 0 })}
        // exitDatum={datum => ({ ...datum, value: 100 })}
        // enterEase={}
        // updateEase={}
        // exitEase={}
      >{
        nodes =>
          nodes.map(({ x, y, r }) => (
            <circle
              cx={Math.round(x)}
              cy={Math.round(y)}
              r={Math.round(r)}
              fill='black'
            />
          ))
      }</Pack>
    );

    expect(
      actual.containsMatchingElement(
        <circle cx={53} cy={54} r={32} fill='black' />
      )
    ).to.equal(true);

    expect(
      actual.containsMatchingElement(
        <circle cx={130} cy={54} r={45} fill='black' />
      )
    ).to.equal(true);

    expect(
      actual.containsMatchingElement(
        <circle cx={76} cy={138} r={55} fill='black' />
      )
    ).to.equal(true);
  });

  it('animated', () => {
    const actual = mount(
      <Pack
        data={
          hierarchy({
            children: [
              { value: 1, key: 1 },
              { value: 2, key: 2 },
              { value: 3, key: 3 },
            ],
          })
          .sum(datum => datum.value)
        }
        size={[200, 200]}
        includeRoot={false}

        enterDatum={datum => ({ ...datum, value: -10 })}
        exitDatum={datum => ({ ...datum, value: 10 })}
        enterEase='linear'
        updateEase='linear'
        exitEase='linear'
        animate
      >{
        nodes =>
          nodes.map(({ x, y, r, value }) => (
            <circle
              key={value}
              cx={Math.round(x)}
              cy={Math.round(y)}
              r={Math.round(r)}
              fill='black'
            />
          ))
      }</Pack>
    );

    console.log(actual.debug());
    expect(
      actual.containsMatchingElement(
        <circle cx={53} cy={54} r={32} fill='black' />
      )
    ).to.equal(true);

    expect(
      actual.containsMatchingElement(
        <circle cx={130} cy={54} r={45} fill='black' />
      )
    ).to.equal(true);

    expect(
      actual.containsMatchingElement(
        <circle cx={76} cy={138} r={55} fill='black' />
      )
    ).to.equal(true);
  });
});
