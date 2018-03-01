import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { initScreenshot, withScreenshot } from 'storybook-chrome-screenshot';

import { Svg, Ribbon, Circle, Group, Rect, Arc } from '../../element/src/index';
import {
  Chord,
  Cluster,
  Collection,
  Grid,
  Pack,
  Partition,
  Pie,
  Stack,
  Treemap,
} from '../src/index';

addDecorator(initScreenshot());

storiesOf('Layout', module)

  .add('Chord', withScreenshot()(() => (
    <Svg width={500} height={500}>
      <Chord
        data={[
          [11975, 5871, 8916, 2868],
          [1951, 10048, 2060, 6171],
          [8010, 16145, 8090, 8045],
          [1013, 990, 940, 6907],
        ]}
        animate
        nodeEnter={d => ({
          ...d,
          sourceStartAngle: d.sourceEndAngle,
          targetStartAngle: d.targetEndAngle,
        })}
      >{nodes => nodes.map(node => (
        <Ribbon
          {...node}
          fill='black'
          stroke='black'
          fillOpacity={0.7}
          radius={500 * 0.3}
          transform={{ translate: [200, 200] }}
        />
      ))}</Chord>
    </Svg>
  )))

  .add('Cluster', withScreenshot()(() => (
    <Svg width={500} height={500}>
      <Group transform={{ translate: [40, 80] }}>
        <Cluster
          data={{
            children: [
              {
                value: 10,
                key: '1',
                children: [
                  { value: 1, key: '1a1' },
                  { value: 2, key: '1a2' },
                  {
                    value: 3,
                    key: '1a3',
                    children: [
                      { value: 0.1, key: '1b1' },
                      { value: 0.2, key: '1b2' },
                    ],
                  },
                ],
              },
              {
                value: 20,
                key: '2',
                children: [
                  { value: 1, key: '2a1' },
                  { value: 2, key: '2a2' },
                  {
                    value: 3,
                    key: '2a3',
                    children: [
                      { value: 0.1, key: '2b1' },
                      { value: 0.2, key: '2b2' },
                    ],
                  },
                ],
              },
            ],
          }}
          size={[440, 440]}
          nodeEnter={d => ({ ...d, x: 250, y: 250 })}
          animate
        >{nodes => nodes.map(({ key, x, y }) => (
          <Circle
            key={key}
            cx={y}
            cy={x}
            r={10}
            fill='black'
          />
        ))}</Cluster>
      </Group>
    </Svg>
  )))

  .add('Collection', withScreenshot()(() => (
    <Svg width={500} height={500}>
      <Collection
        data={[
          { x: 10, key: '1' },
          { x: 150, key: '2' },
          { x: 300, key: '3' },
          { x: 450, key: '4' },
        ]}
        nodeEnter={d => ({ ...d, x: 0 })}
        animate
      >{nodes => nodes.map(({ key, x }) => (
        <Circle key={key} r={10} cx={x} cy={250} />
      ))}</Collection>
    </Svg>
  )))

  .add('Grid', withScreenshot()(() => (
    <Svg width={500} height={500}>
      <Grid
        data={[
          { value: 1, key: '1' },
          { value: 2, key: '2' },
          { value: 3, key: '3' },
          { value: 4, key: '4' },
          { value: 5, key: '5' },
          { value: 6, key: '6' },
          { value: 7, key: '7' },
          { value: 8, key: '8' },
          { value: 9, key: '9' },
          { value: 10, key: '10' },
        ]}
        bands
        size={[500, 500]}
        nodeEnter={d => ({ ...d, x: 250, y: 250 })}
        animate
      >{nodes => nodes.map(({ nodeWidth, nodeHeight, x, y, key, value }) => (
        <Circle
          key={key}
          cx={x + nodeWidth / 2}
          cy={y + nodeHeight / 2}
          r={value}
          fill='black'
        />
      ))
      }</Grid>
    </Svg>
  )))

  .add('Pack', withScreenshot()(() => (
    <Svg width={500} height={500}>
      <Pack
        data={{
          children: [
            { value: 1, key: '1' },
            { value: 2, key: '2' },
            { value: 1, key: '3' },
            { value: 0.4, key: '4' },
            { value: 0.2, key: '5' },
            { value: 0.1, key: '6' },
            { value: 2, key: '7' },
            { value: 0.1, key: '8' },
            { value: 4, key: '9' },
          ],
        }}
        sum={datum => datum.value}
        size={[500, 500]}
        includeRoot={false}
        nodeEnter={d => ({ ...d, r: 0 })}
        animate
      >{nodes => nodes.map(({ x, y, r, key }) => (
        <Circle
          key={key}
          cx={x}
          cy={y}
          r={r}
          fill='black'
        />
      ))}</Pack>
    </Svg>
  )))

  .add('Partition', withScreenshot()(() => (
    <Svg width={500} height={500}>
      <Partition
        data={{
          children: [
            { value: 1, key: '1' },
            { value: 2, key: '2' },
            {
              value: 0,
              key: '3',
              children: [
                { value: 1, key: 'a1' },
                { value: 2, key: 'a2' },
                {
                  value: 0,
                  key: 'a3',
                  children: [
                    { value: 1, key: 'b1' },
                    { value: 2, key: 'b2' },
                    {
                      value: 3,
                      key: 'b3',
                    },
                  ],
                },
              ],
            },
          ],
        }}
        sum={datum => datum.value}
        size={[300, 300]}
        nodeEnter={d => ({ ...d, r: 0 })}
        animate
      >{nodes => nodes.map(({ key, x0, y0, x1, y1 }) => (
        <Rect
          key={key}
          x={x0 + 100}
          y={y0 + 100}
          width={x1 - x0}
          height={y1 - y0}
          fill='black'
          stroke='white'
        />
      ))}</Partition>
    </Svg>
  )))

  .add('Pie', withScreenshot()(() => (
    <Svg width={500} height={500}>
      <Pie
        data={[
          { id: 1, key: '1', value: 1 },
          { id: 2, key: '2', value: 2 },
          { id: 3, key: '3', value: 3 },
        ]}
        value={datum => datum.value}
        id={datum => datum.id}
        sort={(a, b) => a.id - b.id}
        nodeEnter={d => ({ ...d, startAngle: d.endAngle })}
        animate
      >{nodes => nodes.map(({ startAngle, endAngle, key }) => (
        <Group transform={{ translate: [250, 250] }}>
          <Arc
            key={key}
            innerRadius={0}
            outerRadius={150}
            startAngle={startAngle}
            endAngle={endAngle}
            fill='black'
            stroke='white'
            strokeWidth={1}
          />
        </Group>
      ))}</Pie>
    </Svg>
  )))

  .add('Stack', withScreenshot()(() => (
    <Svg width={500} height={500}>
      <Stack
        data={[
          { a: 0.1, b: 0.1, c: 0.2, key: '1' },
          { a: 0.2, b: 0.1, c: 0.2, key: '2' },
          { a: 0.3, b: 0.1, c: 0.2, key: '3' },
        ]}
        keys={['a', 'b', 'c']}
        animate
      >{nodes => nodes.map((node) => (
        <Group transform={{ rotate: [180, 250, 250] }} key={node.key}>
          <Rect
            x={80}
            y={node[0][0] * 500}
            width={100}
            height={(node[0][1] - node[0][0]) * 500}
            fill='black'
            stroke='white'
          />
          <Rect
            x={200}
            y={node[1][0] * 500}
            width={100}
            height={(node[1][1] - node[1][0]) * 500}
            fill='black'
            stroke='white'
          />
          <Rect
            x={320}
            y={node[2][0] * 500}
            width={100}
            height={(node[2][1] - node[2][0]) * 500}
            fill='black'
            stroke='white'
          />
        </Group>
      ))}</Stack>
    </Svg>
  )))

  .add('Treemap', withScreenshot()(() => (
    <Svg width={500} height={500}>
      <Treemap
        data={{
          children: [
            { value: 10, key: '1' },
            { value: 20, key: '2' },
            {
              value: 30,
              key: '3',
              children: [
                { value: 1, key: 'a1' },
                { value: 2, key: 'a2' },
                {
                  value: 3,
                  key: 'a3',
                  children: [
                    { value: 0.1, key: 'b1' },
                    { value: 0.2, key: 'b2' },
                    {
                      value: 0.3,
                      key: 'b3',
                    },
                  ],
                },
              ],
            },
          ],
        }}
        sum={datum => datum.value}
        size={[300, 300]}
        nodeEnter={d => ({ ...d, r: 0 })}
        animate
      >{nodes => nodes.map(({ key, x0, y0, x1, y1 }) => (
        <Rect
          key={key}
          x={x0 + 100}
          y={y0 + 100}
          width={x1 - x0}
          height={y1 - y0}
          fill='black'
          stroke='white'
        />
      ))}</Treemap>
    </Svg>
  )));

