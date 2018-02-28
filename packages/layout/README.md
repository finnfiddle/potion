#Layouts<a class="anchor" name="layouts"></a>

The purpose of Layouts is to combine the Shapes/Elements above with datasets and enable declarative animations.

Most Layouts add useful metadata to the input data in useful ways and pass it on to the children.

For example the Pie Layout will calculate metadata from the input dataset like start- and end angles for each arc and pass it on to the children (along with the original data) in order to draw a pie chart.

## Chord<a class="anchor" name="layouts__chord"></a>

Renders a D3 Chord layout.

```javascript
import { Chord } from '@potion/layout';
```

### Usage

```javascript
<Svg width={400} height={400}>
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
  >{nodes => nodes.map((node, i) => (
    <Ribbon
      {...node}
      fill="black"
      stroke="black"
      fillOpacity={0.9}
      radius={height * 0.4}
      transform={{ translate: [200, 200] }}
    />
  ))}</Chord>
</Svg>
```

### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| data (required) | array of objects | data that gets optionally animated and passed on to children. Each datum must have a unique `key` property. |
| children (required) | func | 'Function as Child that recieves one param: `nodes`. Each node has `source`, `target`, `key` and `data` properties. The `data` property value resembles the original input datum. Must return a valid React node.' |
| padAngle |  | TODO |
| sortGroups |  | TODO |
| sortSubgroups |  | TODO |
| sortChords |  | TODO |
| animate | boolean | animate children values on enter, update and exit |
| nodeEnter | func | `(datum) => datum` | accessor function for getting a datum before it enters - used for animations. TODO: document `datum` signature |
| nodeExit | func | `(datum) => datum` | accessor function for getting a datum before it exits - used for animations. TODO: document `datum` signature |
| component | element/string | `'g'` | component type that wraps children |
              

## Cluster<a class="anchor" name="layouts__cluster"></a>

Renders a D3 Cluster layout.

```javascript
import { Cluster } from '@potion/layout';
```

### Usage

```javascript
<Svg width={400} height={400}>
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
      size={[240, 320]}
      nodeEnter={d => ({ ...d, x: 200, y: 200 })}
      animate
    >{nodes => nodes.map(({ key, x, y }) => (
      <Circle
        key={key}
        cx={y}
        cy={x}
        r={10}
        fill="black"
      />
    ))}</Cluster>
  </Group>
</Svg>
```

### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| data (required) | array of objects |  | data that gets optionally animated and passed on to children. Each datum must have a unique `key` property. |
| children (required) | func |  | Function as Child that recieves one param: `nodes`. Each node has `x`, `y`, key` and `data` properties. The `data` property value resembles the original input datum. Must return a valid React node. |
| separation |  |  | TODO |
| size |  |  | TODO |
| nodeSize |  |  | TODO |
| includeRoot |  |  | TODO |
| sum |  |  | TODO |
| animate | boolean |  | animate children values on enter, update and exit |
| nodeEnter | func | `(datum) => datum` |  accessor function for getting a datum before it enters - used for animations. TODO: document `datum` signature |
| nodeExit | func | `(datum) => datum` |  accessor function for getting a datum before it exits - used for animations. TODO: document `datum` signature |
| component | element/string | `'g'` |  component type that wraps children |

## Collection<a class="anchor" name="layouts__collection"></a>

Generic Layout component for animating datasets.

```javascript
import { Collection } from '@potion/layout';
```

### Usage

```javascript
<Svg width={400} height={400}>
  <Collection
    data={[
      { x: 10, key: '1' },
      { x: 50, key: '2' },
      { x: 100, key: '3' },
      { x: 250, key: '4' },
    ]}
  >{nodes => nodes.map(({ key, x }) => (
    <Circle key={key} r={10} cx={x} cy={200} />
  ))}</Collection>
</Svg>
```

### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| data (required) | array of objects |  | data that gets optionally animated and passed on to children. Each datum must have a unique `key` property. |
| children (required) | func |  | Function as Child that recieves one param: `nodes`. Each node has the same properties as the corresponding datum from the input `data` prop. Must return a valid React node. |
| animate | boolean |  | animate children values on enter, update and exit |
| nodeEnter | func | `(datum) => datum` | accessor function for getting a datum before it enters - used for animations. TODO: document `datum` signature |
| nodeExit | func | `(datum) => datum` | accessor function for getting a datum before it exits - used for animations. TODO: document `datum` signature |
| component | element/string | `'g'` | component type that wraps children |
              
## Grid<a class="anchor" name="layouts__grid"></a>

Renders a grid layout using the `d3-v4-grid` library.

```javascript
import { Grid } from '@potion/layout';
```

### Usage

```javascript
<Svg width={400} height={400}>
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
    size={[400, 400]}
    nodeEnter={d => ({ ...d, x: 200, y: 200 })}
    animate
  >{nodes => nodes.map(({ nodeWidth, nodeHeight, x, y, key, value }) => (
    <Circle
      key={key}
      cx={x + nodeWidth / 2}
      cy={y + node200}
      r={value}
      fill="black"
    />
  ))
  }</Grid>
</Svg>
```

### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| data (required) | array of objects | | data that gets optionally animated and passed on to children. Each datum must have a unique `key` property. |
| children (required) | func | | Function as Child that recieves one param: `nodes`. Each node has `nodeWidth`, `nodeHeight`, `x`, `y`, `value`, `key` and `data` properties. The `data` property value resembles the original input datum. Must return a valid React node. |
| bands | boolean | `false` | configure the grid to treat nodes as bands instead of points |
| size | array | `[1, 1]` | set overall dimensions of layout |
| nodeSize | array | | sets the size of all individual nodes |
| rows | number | | fixes the layout to a certain number of rows |
| cols | number | | fixes the layout to a certain number of columns |
| padding | array [x, y] | | sets the padding between the node bands. `x` and `y` are relative to the band width/height, similar to the padding parameter of `d3.scale.ordinal().rangeBands()`. If nodeSize prop is set, padding is absolute |
| animate | boolean | | animate children values on enter, update and exit |
| nodeEnter | func | `(datum) => datum` | accessor function for getting a datum before it enters - used for animations. TODO: document `datum` signature |
| nodeExit | func | `(datum) => datum` | accessor function for getting a datum before it exits - used for animations. TODO: document `datum` signature |
| component | element/string | `'g'` | component type that wraps children |
              
## Pack<a class="anchor" name="layouts__pack"></a>

Renders a D3 Pack layout.

```javascript
import { Pack } from '@potion/layout';
```

### Usage

```javascript
<Svg width={400} height={400}>
  <Pack
    data={{
      children: [
        { value: 1, key: '1' },
        { value: 2, key: '2' },
        { value: 3, key: '3' },
      ],
    }}
    sum={datum => datum.value}
    size={[400, 400]}
    includeRoot={false}
    nodeEnter={d => ({ ...d, r: 0 })}
    animate
  >{nodes => nodes.map(({ x, y, r, key }) => (
    <Circle
      key={key}
      cx={x}
      cy={y}
      r={r}
      fill="black"
    />
  ))}</Pack>
</Svg>
```

### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| data (required) | array of objects |  | data that gets optionally animated and passed on to children. Each datum must have a unique `key` property. |
| children (required) | func |  | Function as Child that recieves one param: `nodes`. Each node has `x`, `y`, `r`, key` and `data` properties. The `data` property value resembles the original input datum. Must return a valid React node. |
| radius |  |  | |
| size |  |  | |
| padding |  |  | |
| includeRoot |  |  | |
| sum |  |  | |
| animate | boolean |  | animate children values on enter, update and exit |
| nodeEnter | func | `(datum) => datum` | accessor function for getting a datum before it enters - used for animations. TODO: document `datum` signature |
| nodeExit | func | `(datum) => datum` | accessor function for getting a datum before it exits - used for animations. TODO: document `datum` signature |
| component | element/string | `'g'` | component type that wraps children |
              
## Partition<a class="anchor" name="layouts__partition"></a>

Renders a D3 Partition layout.

```javascript
import { Partition } from '@potion/layout';
```

### Usage

```javascript
<Svg width={400} height={400}>
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
    size={[400, 400]}
    nodeEnter={d => ({ ...d, r: 0 })}
    animate
  >{nodes => nodes.map(({ key, x0, y0, x1, y1 }) => (
    <Rect
      key={key}
      x={x0}
      y={y0}
      width={x1 - x0}
      height={y1 - y0}
      fill="black"
      stroke="white"
    />
  ))}</Partition>
</Svg>
```

### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| data (required) | array of objects |  | data that gets optionally animated and passed on to children. Each datum must have a unique `key` property. |
| children (required) | func |  | Function as Child that recieves one param: `nodes`. Each node has `x0`, `y0`, `x1`, `y1`, `key` and `data` properties. The `data` property value resembles the original input datum. Must return a valid React node. |
| separation |  |  | |
| size |  |  | |
| round |  |  | |
| includeRoot |  |  | |
| sum |  |  | |
| animate | boolean |  | animate children values on enter, update and exit |
| nodeEnter | func | `(datum) => datum` | accessor function for getting a datum before it enters - used for animations. TODO: document `datum` signature |
| nodeExit | func | `(datum) => datum` | accessor function for getting a datum before it exits - used for animations. TODO: document `datum` signature |
| component | element/string | `'g'` | component type that wraps children |
              
## Pie<a class="anchor" name="layouts__pie"></a>

Renders a D3 Pie layout.

```javascript
import { Pie } from '@potion/layout';
```

### Usage

```javascript
<Svg width={400} height={400}>
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
    <Arc
      key={key}
      innerRadius={0}
      outerRadius={100}
      startAngle={startAngle}
      endAngle={endAngle}
      fill="black"
      stroke="white"
      strokeWidth={1}
    />
  ))}</Pie>
</Svg>
```

### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| data (required) | array of objects |  | data that gets optionally animated and passed on to children. Each datum must have a unique `key` property. |
| children (required) | func |  | Function as Child that recieves one param: `nodes`. Each node has `startAngle`, `endAngle`, `key` and `data` properties. The `data` property value resembles the original input datum. Must return a valid React node. |
| value |  |  | |
| sort |  |  | |
| sortValues |  |  | |
| startAngle |  |  | |
| endAngle |  |  | |
| padAngle |  |  | |
| id |  |  | |
| animate | boolean |  | animate children values on enter, update and exit |
| nodeEnter | func | `(datum) => datum` | accessor function for getting a datum before it enters - used for animations. TODO: document `datum` signature |
| nodeExit | func | `(datum) => datum` | accessor function for getting a datum before it exits - used for animations. TODO: document `datum` signature |
| component | element/string | `'g'` | component type that wraps children |
              
## Stack<a class="anchor" name="layouts__stack"></a>

Renders a D3 Stack layout.

```javascript
import { Stack } from '@potion/layout';
```

### Usage

```javascript
<Svg width={400} height={400}>
  <Stack
    data={[
      { a: 0.1, b: 0.1, c: 0.2, key: '1' },
      { a: 0.2, b: 0.1, c: 0.2, key: '2' },
      { a: 0.3, b: 0.1, c: 0.2, key: '3' },
    ]}
    keys={['a', 'b', 'c']}
    animate
  >{nodes => nodes.map((node, i) => (
    <Group transform={{ rotate: [180, 200, 200] }} key={node.key}>
      <Rect
        x={40}
        y={node[0][0] * 400}
        width={80}
        height={(node[0][1] - node[0][0]) * 400}
        fill="black"
        stroke="white"
      />
      <Rect
        x={160}
        y={node[1][0] * 400}
        width={80}
        height={(node[1][1] - node[1][0]) * 400}
        fill="black"
        stroke="white"
      />
      <Rect
        x={280}
        y={node[2][0] * 400}
        width={80}
        height={(node[2][1] - node[2][0]) * 400}
        fill="black"
        stroke="white"
      />
    </Group>
  ))}</Stack>
</Svg>
```

### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| data (required) | array of objects |  | data that gets optionally animated and passed on to children. Each datum must have a unique `key` property. |
| children (required) | func |  | Function as Child that recieves one param: `nodes`. Each node is a series returned for the D3 Stack generator with additional `key` and `data` properties. The `data` property value resembles the original input datum. Must return a valid React node. |
| value |  |  | |
| keys |  |  | |
| order |  |  | |
| offset |  |  | |
| animate | boolean |  | animate children values on enter, update and exit |
| nodeEnter | func | `(datum) => datum` | accessor function for getting a datum before it enters - used for animations. TODO: document `datum` signature |
| nodeExit | func | `(datum) => datum` | accessor function for getting a datum before it exits - used for animations. TODO: document `datum` signature |
| component | element/string | `'g'` | component type that wraps children |
              
## Treemap<a class="anchor" name="layouts__treemap"></a>

Renders a D3 Treemap layout.

```
import { Treemap } from '@potion/layout';
```

### Usage

```javascript
<Svg width={400} height={400}>
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
    size={[400, 400]}
    nodeEnter={d => ({ ...d, r: 0 })}
    animate
  >{nodes => nodes.map(({ key, x0, y0, x1, y1 }) => (
    <Rect
      key={key}
      x={x0}
      y={y0}
      width={x1 - x0}
      height={y1 - y0}
      fill="black"
      stroke="white"
    />
  ))}</Treemap>
</Svg>
```

### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| data (required) | array of objects |  | data that gets optionally animated and passed on to children. Each datum must have a unique `key` property. |
| children (required) | func |  | Function as Child that recieves one param: `nodes`. Each node has `x0`, `y0`, `x1`, `y1`, `key` and `data` properties. The `data` property value resembles the original input datum. Must return a valid React node. |
| tile |  |  | |
| size |  |  | |
| round |  |  | |
| padding |  |  | |
| paddingInner |  |  | |
| paddingOuter |  |  | |
| paddingTop |  |  | |
| paddingRight |  |  | |
| paddingBottom |  |  | |
| paddingLeft |  |  | |
| includeRoot |  |  | |
| sum |  |  | |
| animate | boolean |  | animate children values on enter, update and exit |
| nodeEnter | func | `(datum) => datum` | accessor function for getting a datum before it enters - used for animations. TODO: document `datum` signature |
| nodeExit | func | `(datum) => datum` | accessor function for getting a datum before it exits - used for animations. TODO: document `datum` signature |
| component | element/string | `'g'` | component type that wraps children |