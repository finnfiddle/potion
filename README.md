# Number Picture

Number Picture is a collection of **React** components for declaratively composing animated, interactive SVG visualizations.
React handles the DOM structure and **D3** handles the animations + math.

Normally, a charting library will give you a collection of high-level chart components (eg. Bar, Pie, Scatter...) but Number Picture instead gives you the low-level building blocks (Circle, Arc, Force Layout, Axis...) so that you can build your own visualizations.

The library is part of a bigger project by the same name which aims to list, categorize and rank every single available chart - there are over [450 charts which you can see here](http://numberpicture.com/browse).

## Contents

- [Installation](#installation)
- [Shapes/Elements](#shapes-elements)
  - [Circle](#circle)
  - [Arc](#arc)
  - [Line](#line)
  - [RadialLine](#radialline)
  - [Curve](#curve)
  - [Rect](#rect)
  - [Text](#text)
  - [SymbolShape](#SymbolShape)
  - [Group](#group)
- [Collections & Layouts](#collections-layouts)
  - [Collection](#collection)
  - [TransitionGroup](#transitiongroup)
  - [Pack](#pack)
  - [Stack](#stack)
  - [Pie](#pie)
  - [Area](#area)
  - [RadialArea](#radialarea)
- [Animation](#animation)
  - [Easing](#easing)
- [Interaction](#interaction)
- [Axes](#axes)
  - [Axis](#axis)
  - [AxisTop](#axistop)
  - [AxisRight](#axisright)
  - [AxisBottom](#axisbottom)
  - [AxisLeft](#axisleft)
- [Misc](#misc)
  - [Annotations](#annotations)
  - [Patterns](#patterns)
  - [Helpers](#helpers)
- [Contributing/Issues](#contibuting-issues)

## Installation

```shell
npm install number-picture
```

## Hello World

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Circle } from 'number-picture';

ReactDOM.render(
  <svg width='400' height='400'>
    <Circle cx={200} cy={200} r={40} fill='black' />
  </svg>
, 'body');
```

## Shapes/Elements

Number Picture provides several shape primitives for constructing visualizations. They all render SVG elements and come animation-ready which cover in the [Animation](#animation) section. The prop names are designed to be as similar to the API of D3 so if you know how to use D3 you will know how to use the components.

> **Inportant:** every single prop for Shapes/Elements can either be passed a constant value, a variable, or a function that takes one argument - an object containing the props for the component - and returns the desired value. This becomes useful when we want to do animations and set values according to sibling items in collections.

#### For example

```javascript
<Circle
  propA={ownProps => ownProps.propB}
  propB={20}
/>
```

#### Will evaluate to

```javascript
<Circle
  propA={20}
  propB={20}
/>
```

### Circle

Renders an svg `circle` element.

```javascript
import { Circle } from 'number-picture';
```

#### Usage:

 ```javascript
<Circle cx={10) cy={20} r={30} fill='black' />
```

#### Result:

```javascript
<circle cx='10' cy='20' r='30' fill='black' />
```

Prop | Type | Default | Description
--- | --- | --- | ---
`cx` | number | undefined | X coordinate of center of circle
`cy` | number | undefined | Y coordinate of center of circle
`r` | number | undefined | radius of circle
`fill` | string | undefined | fill color of circle
`stroke` | string | undefined | stroke color of circle
`strokeWidth` | number | undefined | stroke width of circle
`style` | object | {} | css style to be applied to circle
`datum` | object | {} | The datum (when Circle is nested within a Collection or Layout) that it uses to render itself.
`enterDatum` | object | {} | The datum (when Circle is nested within a Collection or Layout) that it uses to render itself when it enters the DOM.
`enterEase` | string | 'linearEasing' | D3 easing function name used to tween the shape on enter
`enterDuration` | number | 0 | duration of shape tween on enter in milliseconds
`updateEase` | string | 'linearEasing' | D3 easing function name used to tween the shape on update
`updateDuration` | number | 0 | duration of shape tween on update in milliseconds
`exitDatum` | object | {} | The datum (when Circle is nested within a Collection or Layout) that it uses to render itself when it leaves the DOM.
`exitEase` | string | 'linearEasing' | D3 easing function name used to tween the shape on exit
`exitDuration` | number | 0 | duration of shape tween on exit in milliseconds

### Arc

Renders an svg `path` element and generates the `d` attribute from props to draw an arc shape.

```javascript
import { Arc } from 'number-picture';
```

#### Usage:

 ```javascript
<Arc innerRadius={50) outerRadius={100} startAngle={0} endAngle={Math.PI} fill='black' />
```

#### Result:

```javascript
<path d='...' fill='black' />
```

Prop | Type | Default | Description
--- | --- | --- | ---
`innerRadius` | number | undefined | inner radius of arc
`outerRadius` | number | undefined | outer radius of arc
`startAngle` | number | undefined | start angle of arc in radians
`endAngle` | number | undefined | end angle of arc in radians
`fill` | string | undefined | fill color of arc
`stroke` | string | undefined | stroke color of arc
`strokeWidth` | number | undefined | stroke width of arc
`style` | object | {} | css style to be applied to arc
`datum` | object | {} | The datum (when Arc is nested within a Collection or Layout) that it uses to render itself.
`enterDatum` | object | {} | The datum (when Arc is nested within a Collection or Layout) that it uses to render itself when it enters the DOM.
`enterEase` | string | 'linearEasing' | D3 easing function name used to tween the shape on enter
`enterDuration` | number | 0 | duration of shape tween on enter in milliseconds
`updateEase` | string | 'linearEasing' | D3 easing function name used to tween the shape on update
`updateDuration` | number | 0 | duration of shape tween on update in milliseconds
`exitDatum` | object | {} | The datum (when Arc is nested within a Collection or Layout) that it uses to render itself when it leaves the DOM.
`exitEase` | string | 'linearEasing' | D3 easing function name used to tween the shape on exit
`exitDuration` | number | 0 | duration of shape tween on exit in milliseconds

### Line

`// TODO: implement`

### RadialLine

`// TODO: implement`

### Curve

`// TODO: implement`

### Rect

Renders an svg `rect` element.

```javascript
import { Rect } from 'number-picture';
```

#### Usage:

 ```javascript
<Rect x={50} y={100} width={100} height={40} fill='black' />
```

#### Result:

```javascript
<rect x='50' y='100' width='100' height='40' fill='black' />
```

Prop | Type | Default | Description
--- | --- | --- | ---
`x` | number | undefined | x coordinate of top left corner of rect
`y` | number | undefined | y coordinate of top left corner of rect
`width` | number | undefined | width of rect
`height` | number | undefined | height of rect
`fill` | string | undefined | fill color of rect
`stroke` | string | undefined | stroke color of rect
`strokeWidth` | number | undefined | stroke width of rect
`style` | object | {} | css style to be applied to rect
`datum` | object | {} | The datum (when Rect is nested within a Collection or Layout) that it uses to render itself.
`enterDatum` | object | {} | The datum (when Rect is nested within a Collection or Layout) that it uses to render itself.
`enterEase` | string | 'linearEasing' | D3 easing function name used to tween the shape on enter
`enterDuration` | number | 0 | duration of shape tween on enter in milliseconds
`updateEase` | string | 'linearEasing' | D3 easing function name used to tween the shape on update
`updateDuration` | number | 0 | duration of shape tween on update in milliseconds
`exitDatum` | object | {} | The datum (when Rect is nested within a Collection or Layout) that it uses to render itself when it leaves the DOM.
`exitEase` | string | 'linearEasing' | D3 easing function name used to tween the shape on exit
`exitDuration` | number | 0 | duration of shape tween on exit in milliseconds

### Text

Renders an svg `text` element.

```javascript
import { Text } from 'number-picture';
```

#### Usage:

 ```javascript
<Text dx={10} stroke='black'>
  My text goes here...
</Text>
```

#### Result:

```javascript
<text dx='10' stroke='black'>
  My text goes here...
</text>
```

Prop | Type | Default | Description
--- | --- | --- | ---
`dx` | number | undefined | dx of text
`dy` | number | undefined | dy of text
`textAnchor` | string | undefined | text-anchor of text
`transform` | string | undefined | transformation (translation/rotation) of text
`alignmentBaseline` | string | undefined | alignment-baseline of text
`dominantBaseline` | string | undefined | dominant-baseline of text
`fill` | string | undefined | fill color of text
`stroke` | string | undefined | stroke color of text
`strokeWidth` | number | undefined | stroke width of text
`style` | object | {} | css style to be applied to text
`datum` | object | {} | The datum (when Text is nested within a Collection or Layout) that it uses to render itself.
`enterDatum` | object | {} | The datum (when Text is nested within a Collection or Layout) that it uses to render itself.
`enterEase` | string | 'linearEasing' | D3 easing function name used to tween the shape on enter
`enterDuration` | number | 0 | duration of shape tween on enter in milliseconds
`updateEase` | string | 'linearEasing' | D3 easing function name used to tween the shape on update
`updateDuration` | number | 0 | duration of shape tween on update in milliseconds
`exitDatum` | object | {} | The datum (when Text is nested within a Collection or Layout) that it uses to render itself when it leaves the DOM.
`exitEase` | string | 'linearEasing' | D3 easing function name used to tween the shape on exit
`exitDuration` | number | 0 | duration of shape tween on exit in milliseconds

### SymbolShape

Renders an svg `path` element using the `d3.SymbolShape()` generator for the `d` attribute.

```javascript
import { SymbolShape } from 'number-picture';
```

#### Usage:

 ```javascript
<SymbolShape size={200) type='symbolShapeCross' fill='black' />
```

#### Result:

```javascript
<path d='...' fill='black' />
```

Prop | Type | Default | Description
--- | --- | --- | ---
`size` | number | undefined | area of SymbolShape shape
`type` | string | undefined | name of D3 SymbolShape generator function. Possible values: 'symbolShapeCircle', 'symbolShapeCross', 'symbolShapeDiamond', 'symbolShapeSquare', 'symbolShapeStar', 'symbolShapeTriangle', 'symbolShapeWye'.
`fill` | string | undefined | fill color of path
`stroke` | string | undefined | stroke color of path
`strokeWidth` | number | undefined | stroke width of path
`style` | object | {} | css style to be applied to path
`datum` | object | {} | The datum (when SymbolShape is nested within a Collection or Layout) that it uses to render itself.
`enterDatum` | object | {} | The datum (when SymbolShape is nested within a Collection or Layout) that it uses to render itself when it enters the DOM.
`enterEase` | string | 'linearEasing' | D3 easing function name used to tween the shape on enter
`enterDuration` | number | 0 | duration of shape tween on enter in milliseconds
`updateEase` | string | 'linearEasing' | D3 easing function name used to tween the shape on update
`updateDuration` | number | 0 | duration of shape tween on update in milliseconds
`exitDatum` | object | {} | The datum (when SymbolShape is nested within a Collection or Layout) that it uses to render itself when it leaves the DOM.
`exitEase` | string | 'linearEasing' | D3 easing function name used to tween the shape on exit
`exitDuration` | number | 0 | duration of shape tween on exit in milliseconds

### Group

Renders an svg `g` element.

```javascript
import { Group } from 'number-picture';
```

#### Usage:

 ```javascript
<Group x={100) y={100} rotation={45}>
  xyz
<Group
```

#### Result:

```javascript
<g transform='translate(100, 100) rotate(45)'>
  xyz
</g>
```

Prop | Type | Default | Description
--- | --- | --- | ---
`x` | number | undefined | X coordinate of group
`y` | string | undefined | Y coordinate of group
`rotation` | string | undefined | rotation transform of group
`rotationOriginX` | number | undefined | X coordinate of rotation origin relative to `x` prop
`rotationOriginY` | object | {} | Y coordinate of rotation origin relative to `y` prop
`datum` | object | {} | The datum (when Group is nested within a Collection or Layout) that it uses to render itself.
`enterDatum` | object | {} | The datum (when Group is nested within a Collection or Layout) that it uses to render itself when it enters the DOM.
`enterEase` | string | 'linearEasing' | D3 easing function name used to tween the shape on enter
`enterDuration` | number | 0 | duration of shape tween on enter in milliseconds
`updateEase` | string | 'linearEasing' | D3 easing function name used to tween the shape on update
`updateDuration` | number | 0 | duration of shape tween on update in milliseconds
`exitDatum` | object | {} | The datum (when Group is nested within a Collection or Layout) that it uses to render itself when it leaves the DOM.
`exitEase` | string | 'linearEasing' | D3 easing function name used to tween the shape on exit
`exitDuration` | number | 0 | duration of shape tween on exit in milliseconds

## Collections & Layouts

The purpose of Collections is to combine the Shapes/Elements above with datasets. If you wanted you could manually iterate over a dataset array and for example create a Circle element for each datum - but the benefit of letting Collections do it for you is that they also trigger animation hooks on the children when they enter and exit.

Layouts are Collections that have the added benefit of mutating the input data in useful ways. For example the Pie Layout will calculate metadata from the input dataset and pass it on to the children along with the original data so that you can use it to draw a pie chart.

### Collection

```javascript
import { Collection } from 'number-picture';
```

#### Usage:

 ```javascript
<Collection data={[1, 2, 3]}>
  <Circle cx={ownProps => ownProps.datum * 100} cy={100} r={20} fill='black' />
</Collection>
```

#### Result:

```javascript
<g>
  <circle cx={100} y={100} r={20} fill='black' />
  <circle cx={200} y={100} r={20} fill='black' />
  <circle cx={300} y={100} r={20} fill='black' />
</g>
```

Prop | Type | Default | Description
--- | --- | --- | ---
`data` | array | [] | array of data that gets iterated over and renders one child node for each item

#### Child Props:

You'll notice that the circle gets passed a `datum` prop from the Collection. It also receives `data` and `index` props.

Passed Prop | Value
--- | ---
`datum` | item from the `data` input array
`data` | the whole `data` input array
`index` | index of the `datum` in the `data` input array

### Pack

`// TODO: description`

```javascript
import { Pack } from 'number-picture';
```

#### Usage

```javascript
const hierarchy = d3.hierarchy({
  children: [
    { value: 1 },
    { value: 2 },
    { value: 3 },
  ],
})
.sum(datum => datum.value);

<Pack
  data={ownProps => ownProps.hierarchy}
  size={[400, 400]}
  includeRoot={false}
>
  <Circle
    cx={ownProps => ownProps.x}
    cy={ownProps => ownProps.y}
    r={ownProps => ownProps.r}
    fill='black'
  />
</Pack>
```

#### Result

```javascript
<g>
  <circle cx={...} y={...} r={...} fill='black' />
  <circle cx={...} y={...} r={...} fill='black' />
  <circle cx={...} y={...} r={...} fill='black' />
</g>
```

Prop | Type | Default | Description
--- | --- | --- | ---
`data` | array | {} | D3 Hierarchy that gets iterated over and renders one child node for each item

#### Child Props

Passed Prop | Value
--- | ---
`datum` | item from the `data` input array
`data` | the whole `data` input array
`index` | index of the `datum` in the `data` input array

#### Child Prop `datum` Signature

Key | Value
--- | ---
`x` | X coordinate of item
`y` | Y coordinate of item
`r` | radius of item
`data` | original datum from input data

### Stack

`// TODO: implement`

### Pie

`// TODO: document`

### Area

`// TODO: implement`

### RadialArea

`// TODO: implement`

## Animation

`// TODO: document`

### Lifecycle Hooks

`// TODO: document`

### TransitionGroup

`// TODO: document`

## Interaction

`// TODO: implement`

## Axes

`// TODO: document`

### Axis

`// TODO: document`

### AxisTop

`// TODO: document`

### AxisRight

`// TODO: document`

### AxisBottom

`// TODO: document`

### AxisLeft

`// TODO: document`

## Misc

`// TODO: document`

### Annotations

`// TODO: implement`

### Patterns

`// TODO: implement`

### Helpers

`// TODO: document`
