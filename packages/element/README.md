# Shapes/Elements<a class="anchor" name="elements"></a>

Potion provides several shape primitives for constructing visualizations. They all render SVG by default but this can be overridden using component injection. The prop names are designed to be as similar to the API of native SVG and D3 generators.

## Arc<a class="anchor" name="elements__arc"></a>

Renders an arc shape using the D3 Arc generator.

![Arc](https://raw.githubusercontent.com/finnfiddle/potion/lego/__screenshots__/Element-Arc.png "Arc")

```javascript
import { Arc } from '@potion/element';
```

### Usage

```javascript
<Arc
  innerRadius={150}
  outerRadius={200}
  startAngle={0}
  endAngle={Math.PI * 3 / 2}
  fill='black'
/>
```

### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| innerRadius | number |  | inner radius of arc |
| outerRadius | number |  | outer radius of arc |
| startAngle | number |  | start angle of arc in radians |
| endAngle | number |  | end angle of arc in radians |
| component | element/string | path | component type that gets rendered |

## Area<a class="anchor" name="elements__area"></a>

Renders an area shape using the D3 Area generator.

![Area](https://raw.githubusercontent.com/finnfiddle/potion/lego/__screenshots__/Element-Area.png "Area")

```javascript
import { Area } from '@potion/element';
```

### Usage

```javascript
<Area
  x={d => d.x}
  y1={d => d.y1}
  y0={80}
  points={[
    { x: 10, y1: 20 },
    { x: 30, y1: 40 },
    { x: 40, y1: 30 },
    { x: 50, y1: 70 },
    { x: 70, y1: 40 },
    { x: 90, y1: 50 },
  ]}
  fill='black'
/>```

```javascript
// TODO: document
```

## AreaRadial<a class="anchor" name="elements__areaRadial"></a>

Renders a radial area shape using the D3 Radial Area generator.

<!-- ![AreaRadial](https://raw.githubusercontent.com/finnfiddle/potion/lego/__screenshots__/Element-AreaRadial.png "AreaRadial") -->

```javascript
import { RadialArea } from '@potion/element';
```

```javascript
// TODO: document
```

## Circle<a class="anchor" name="elements__circle"></a>

Renders a circle.

![Circle](https://raw.githubusercontent.com/finnfiddle/potion/lego/__screenshots__/Element-Circle.png "Circle")

```javascript
import { Circle } from '@potion/element';
```

### Usage

```javascript
<Circle cx={100} cy={100} r={30} fill='black' />
```

### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| cx | number |  | x position of circle center | 
| cy | number |  | y position of circle center | 
| r | number |  | circle radius |
| component | element/string | `'circle'` | component type that gets rendered |
              
## Group<a class="anchor" name="elements__group"></a>

Renders a symbol shape using the D3 Symbol generator.

```javascript
import { Group } from '@potion/element';
```

### Usage

```javascript
<Group transform={{ translate: [100, 50], rotate: [45] }}>
  <Rect width={50} height={10} />
</Group>
```

### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| component | element/string | `'g'` | component type that gets rendered |
              
## Line<a class="anchor" name="elements__line"></a>

Renders a line.

![Line](https://raw.githubusercontent.com/finnfiddle/potion/lego/__screenshots__/Element-Line.png "Line")

```javascript
import { Line } from '@potion/element';
```

### Usage

```javascript
<Line x1={50} y1={50} x2={150} y2={150} stroke='black' strokeWidth={2} />
```

### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| x1 | number |  | starting x coordinate of line |
| y1 | number |  | starting y coordinate of line |
| x2 | number |  | ending x coordinate of line |
| y2 | number |  | ending y coordinate of line |
| component | element/string | `'line'` | component type that gets rendered |
              
## LineRadial<a class="anchor" name="elements__lineRadial"></a>

Renders a radial line using the D3 radial line generator.

![LineRadial](https://raw.githubusercontent.com/finnfiddle/potion/lego/__screenshots__/Element-LineRadial.png "LineRadial")

```javascript
import { LineRadial } from '@potion/element';
```

### Usage

```javascript
<LineRadial
  radius={50}
  angle={({ angle }) => angle}
  fill="none"
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
/>
```

### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| points | array |  | array of points |
| angle | number/func | `(point) => point[0]` | either a number setting the angle for each point or an accessor function to get the angle from each point |
| radius | number/func | `(point) => point[1]` | either a number setting the radius for each point or an accessor function to get the radius from each point |
| component | element/string | `'path'` | component type that gets rendered |
              
## Rect<a class="anchor" name="elements__rect"></a>

Renders a rectangle.

![Rect](https://raw.githubusercontent.com/finnfiddle/potion/lego/__screenshots__/Element-Rect.png "Rect")

```javascript
import { Rect } from '@potion/element';
```

### Usage

```javascript
<Rect x={100} y={100} width={200} height={300} fill='black' />
```

### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| x | number |  | x position of rectangle |
| cy | number |  | y position of rectangle |
| width | number |  | rectangle width |
| height | number |  | rectangle height |
| component | element/string | `'rect'` | component type that gets rendered |
              
## Ribbon<a class="anchor" name="elements__ribbon"></a>

Renders a ribbon using the D3 Ribbon generator.

![Ribbon](https://raw.githubusercontent.com/finnfiddle/potion/lego/__screenshots__/Element-Ribbon.png "Ribbon")

```javascript
import { Ribbon } from '@potion/element';
```

### Usage

```javascript
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
  fill="black"
/>
```

### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| source |  |  | TODO |
| target |  |  | TODO |
| radius |  |  | TODO |
| startAngle |  |  | TODO |
| endAngle |  |  | TODO |
| component | element/string | `'path'` | component type that gets rendered |
              
## Svg<a class="anchor" name="elements__svg"></a>

Renders an Svg element.

```javascript
import { Svg } from '@potion/element';
```

### Usage

```javascript
<Svg width={400} height={400}>
  <circle r='100' cx='200' cy='200' />
</Svg>
```

### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| component | element/string | `'svg'` | component type that gets rendered |
              
## SymbolShape<a class="anchor" name="elements__symbolShape"></a>

Renders a symbol shape using the D3 symbol generator.

![SymbolShape](https://raw.githubusercontent.com/finnfiddle/potion/lego/__screenshots__/Element-SymbolShape.png "SymbolShape")

```javascript
import { SymbolShape } from '@potion/element';
```

### Usage

```javascript
<SymbolShape size={500} type='symbolCross' fill='black' />
```

### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| size | number |  | area of SymbolShape shape |
| type | string |  | name of D3 SymbolShape generator function. Possible values: `symbolShapeCircle`, `symbolShapeCross`, `symbolShapeDiamond`, `symbolShapeSquare`, `symbolShapeStar`, `symbolShapeTriangle`, `symbolShapeWye` |
| component | element/string | `'path'` | component type that gets rendered |
              
## Text<a class="anchor" name="elements__text"></a>

Renders text.

![Text](https://raw.githubusercontent.com/finnfiddle/potion/lego/__screenshots__/Element-Text.png "Text")

```javascript
import { Text } from '@potion/element';
```

### Usage
```javascript
<Text dx={100} stroke='black'>Lorem ipsum</Text>
```

### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| component | element/string | `'text'` | component type that gets rendered |
