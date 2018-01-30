/* global expect */
import React from 'react';

import { mount } from 'enzyme';

import Svg from '../Svg';
import Rect from '../Rect';
import { Feeder, ANIMATION_MARGIN_OF_ERROR } from './util';

describe('Rect', () => {

  it('click', () => {
    let actual = 'not clicked';
    const expected = 'clicked';

    const wrapper = mount(
      <Svg>
        <Rect
          x={100}
          y={200}
          width={300}
          height={400}
          onClick={() => {
            actual = expected;
          }}
        />
      </Svg>
    );

    wrapper.find('rect').simulate('click');

    expect(actual).to.equal(expected);
  });

  it('hover', () => {
    let wrapper;

    const handleMouseOver = () => {
      wrapper.setProps({ hovered: true });
    };

    wrapper = mount(
      <Feeder hovered={false}>{
        ({ hovered }) => (
          <Svg>
            <Rect
              x={100}
              y={200}
              width={300}
              height={400}
              fill={hovered ? 'red' : 'white'}
              onMouseOver={handleMouseOver}
              updateDuration={1000}
            />
          </Svg>
        )
      }</Feeder>
    );

    wrapper.find('rect').simulate('mouseover');

    expect(
      wrapper.update().containsMatchingElement(
        <rect
          fill='red'
        />
      )
    ).to.equal(true, 'on hover');
  });

  it('enter', (done) => {
    const after = 1000;

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
          enterDatum={{ foo: 0 }}
          enterDuration={100}
          datum={{ foo: after }}
        />
      </Svg>
    );

    expect(
      actual.update().containsMatchingElement(
        <rect
          x={0}
          y={200}
          width={300}
          height={400}
          fill='black'
          stroke='red'
          strokeWidth={2}
          style={{
            display: 'block',
          }}
        />
      )
    ).to.equal(true, 'before enter');

    setTimeout(() => {
      expect(
        actual.update().containsMatchingElement(
          <rect
            y='200'
            width='300'
            height='400'
            fill='black'
            stroke='red'
            strokeWidth='2'
            style={{
              display: 'block',
            }}
          />
        )
      ).to.equal(true, 'after enter');

      expect(
        parseFloat(actual.find('rect').props().x)
      ).to.be.closeTo(after, after * ANIMATION_MARGIN_OF_ERROR, 'after enter x');

      done();
    }, 1000);
  });

  it('update', (done) => {
    const after = 1000;

    const actual = mount(
      <Feeder datum={{ foo: 100 }}>
        {({ datum }) => (
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
              datum={datum}
              updateDuration={1000}
            />
          </Svg>
        )}
      </Feeder>
    );

    expect(
      actual.update().containsMatchingElement(
        <rect
          x={100}
          y={200}
          width={300}
          height={400}
          fill='black'
          stroke='red'
          strokeWidth={2}
          style={{
            display: 'block',
          }}
        />
      )
    ).to.equal(true, 'before update');

    actual.setProps({ datum: { foo: after } }, () => {
      setTimeout(() => {
        expect(
          actual.update().containsMatchingElement(
            <rect
              y='200'
              width='300'
              height='400'
              fill='black'
              stroke='red'
              strokeWidth='2'
              style={{
                display: 'block',
              }}
            />
          )
        ).to.equal(true, 'after update');

        expect(
          parseFloat(actual.find('rect').props().x)
        ).to.be.closeTo(after, after * ANIMATION_MARGIN_OF_ERROR, 'after update x');

        done();
      }, 1000);
    });
  });

  it('exit', (done) => {
    const after = 1000;

    const actual = mount(
      <Feeder show>
        {({ show }) => (
          <Svg>
            {show ? (
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
                exitDuration={1000}
                exitDatum={{ foo: after }}
              />
            ) : null}
          </Svg>
        )}
      </Feeder>
    );

    expect(
      actual.update().containsMatchingElement(
        <rect
          x={100}
          y={200}
          width={300}
          height={400}
          fill='black'
          stroke='red'
          strokeWidth={2}
          style={{
            display: 'block',
          }}
        />
      )
    ).to.equal(true, 'before exit');

    actual.setProps({ show: false }, () => {
      setTimeout(() => {
        expect(
          actual.update().containsMatchingElement(
            <rect
              y='200'
              width='300'
              height='400'
              fill='black'
              stroke='red'
              strokeWidth='2'
              style={{
                display: 'block',
              }}
            />
          )
        ).to.equal(true, 'after exit');

        expect(
          parseFloat(actual.find('rect').props().x)
        ).to.be.closeTo(after, after * ANIMATION_MARGIN_OF_ERROR, 'after exit x');

        done();
      }, 900);
    });
  });

});
