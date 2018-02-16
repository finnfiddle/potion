/* global expect */
/* eslint-disable max-len */
import React from 'react';
import { mount } from 'enzyme';

import Pack from '../Pack';
import { setTimeout } from 'timers';

describe('Pack', () => {

  it('static', () => {
    const actual = mount(
      <Pack
        data={{
          children: [
            { value: 1, key: '1' },
            { value: 2, key: '2' },
            { value: 3, key: '3' },
          ],
        }}
        sum={datum => datum.value}
        size={[200, 200]}
        includeRoot={false}
      >{
        nodes =>
          nodes.map(({ x, y, r, data: { key } }) => (
            <circle
              key={key}
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

  it('animated', (done) => {
    let actualNodeEnter;
    let actualNodeExit;
    const actual = mount(
      <Pack
        data={{
          children: [
            { value: 1, key: '1' },
            { value: 2, key: '2' },
            { value: 3, key: '3' },
          ],
        }}
        // sum={datum => datum.value}
        size={[200, 200]}
        includeRoot={false}
        nodeEnter={d => {
          actualNodeEnter = d;
          return { ...d, r: 0 };
        }}
        nodeExit={d => {
          actualNodeExit = d;
          return { ...d, r: 0 };
        }}
        animate
      >{
        nodes =>
          nodes.map(({ x, y, r, data: { key } }) => (
            <circle
              key={key}
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
        <circle cx={53} cy={54} r={0} fill='black' />
      )
    ).to.equal(true);

    expect(
      actual.containsMatchingElement(
        <circle cx={130} cy={54} r={0} fill='black' />
      )
    ).to.equal(true);

    expect(
      actual.containsMatchingElement(
        <circle cx={76} cy={138} r={0} fill='black' />
      )
    ).to.equal(true);

    setTimeout(() => {
      actual.update();
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

      actual.setProps({
        data: {
          children: [
            { value: 2, key: '2' },
            { value: 3, key: '3' },
            { value: 4, key: '4' },
          ],
        },
      }, () => {
        actual.update();
        setTimeout(() => {
          actual.update();

          expect(
            actual.containsMatchingElement(
              <circle cx={52} cy={60} r={38} fill='black' />
            )
          ).to.equal(true);

          expect(
            actual.containsMatchingElement(
              <circle cx={136} cy={60} r={46} fill='black' />
            )
          ).to.equal(true);

          expect(
            actual.containsMatchingElement(
              <circle cx={85} cy={144} r={53} fill='black' />
            )
          ).to.equal(true);

          const expectedNodeEnter = { r: 53, x: 85, y: 144 };
          Object.keys(expectedNodeEnter).forEach(key => {
            expect(Math.round(actualNodeEnter[key].val)).to.equal(expectedNodeEnter[key]);
          });

          const expectedNodeExit = { r: 0, x: 53, y: 54 };
          Object.keys(expectedNodeExit).forEach(key => {
            expect(Math.round(actualNodeExit[key])).to.equal(expectedNodeExit[key]);
          });

          done();
        }, 1000);
      });

    }, 1000);
  });
});
