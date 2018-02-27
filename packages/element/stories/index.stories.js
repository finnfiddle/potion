import React from 'react';

import { storiesOf, addDecorator, configure } from '@storybook/react';
import { initScreenshot, withScreenshot } from 'storybook-chrome-screenshot';

import Svg from '../src/Svg';
import Arc from '../src/Arc';
import Area from '../src/Area';
import Circle from '../src/Circle';
import Line from '../src/Line';
import LineRadial from '../src/LineRadial';
import Rect from '../src/Rect';
import Ribbon from '../src/Ribbon';
import SymbolShape from '../src/SymbolShape';
import Text from '../src/Text';

addDecorator(initScreenshot());

storiesOf('Element', module)

  .add('Arc', withScreenshot()(() => (
    <Svg width={500} height={500}>
      <Arc
        innerRadius={150}
        outerRadius={200}
        startAngle={0}
        endAngle={Math.PI * 3 / 2}
        fill='black'
        transform={{
          translate: [250, 250],
        }}
      />
    </Svg>
  )))

  .add('Area', withScreenshot()(() => (
    <Svg width={500} height={500}>
      <Area
        x={d => d.x}
        y1={d => d.y1}
        y0={25}
        points={[
          { x: 5 * 10, y1: 5 * 20 },
          { x: 5 * 30, y1: 5 * 40 },
          { x: 5 * 40, y1: 5 * 30 },
          { x: 5 * 50, y1: 5 * 70 },
          { x: 5 * 70, y1: 5 * 40 },
          { x: 5 * 90, y1: 5 * 50 },
        ]}
        fill='black'
      />
    </Svg>
  )))

  // .add('AreaRadial', withScreenshot()(() => (
  //   <Svg width={500} height={500}>
  //     <Arc
  //       innerRadius={150}
  //       outerRadius={200}
  //       startAngle={0}
  //       endAngle={Math.PI * 3 / 2}
  //       fill='black'
  //       transform={{
  //         translate: [250, 250],
  //       }}
  //     />
  //   </Svg>
  // )))

  .add('Circle', withScreenshot()(() => (
    <Svg width={500} height={500}>
      <Circle cx={250} cy={250} r={150} fill='black' />
    </Svg>
  )))

  .add('Line', withScreenshot()(() => (
    <Svg width={500} height={500}>
      <Line x1={50} y1={50} x2={450} y2={450} stroke='black' strokeWidth={4} />
    </Svg>
  )))

  .add('LineRadial', withScreenshot()(() => (
    <Svg width={500} height={500}>
      <LineRadial
        radius={100}
        angle={({ angle }) => angle}
        fill='none'
        stroke='black'
        points={[
          { angle: 0 },
          { angle: Math.PI * 0.25 },
          { angle: Math.PI * 0.5 },
          { angle: Math.PI * 0.75 },
          { angle: Math.PI },
          { angle: Math.PI * 1.25 },
          { angle: Math.PI * 1.5 },
          { angle: Math.PI * 1.75 },
          { angle: Math.PI * 2 },
        ]}
        strokeWidth={4}
        transform={{ translate: [250, 250] }}
      />
    </Svg>
  )))

  .add('Rect', withScreenshot()(() => (
    <Svg width={500} height={500}>
      <Rect x={100} y={100} width={300} height={300} fill='black' />
    </Svg>
  )))

  .add('Ribbon', withScreenshot()(() => (
    <Svg width={500} height={500}>
      <Ribbon
        source={{
          startAngle: 0.7524114,
          endAngle: 1.1212972,
          radius: 200,
        }}
        target={{
          startAngle: 1.8617078,
          endAngle: 1.9842927,
          radius: 200,
        }}
        fill='black'
        transform={{
          translate: [500 / 3, 250],
        }}
      />
    </Svg>
  )))

  .add('SymbolShape', withScreenshot()(() => (
    <Svg width={500} height={500}>
      <SymbolShape
        size={10000}
        type='symbolCross'
        fill='black'
        transform={{ translate: [250, 250] }}
      />
    </Svg>
  )))

  .add('Text', withScreenshot()(() => (
    <Svg width={500} height={500}>
      <Text
        dx={250}
        dy={250}
        textAnchor='middle'
        fontSize='50'
        stroke='black'
      >
        Lorem ipsum
      </Text>
    </Svg>
  )));

