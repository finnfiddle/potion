# Number Picture

Number Picture is a collection of **React** components for declaratively composing animated, interactive SVG visualizations.
**React** handles the DOM structure and **D3** handles the animations + math.

Normally, a charting library will give you a collection of high-level chart components (eg. Bar, Pie, Scatter...) but Number Picture instead gives you the low-level building blocks (Circle, Arc, Force Layout, Axis...) so that you can build your own visualizations.

The library is part of a bigger project by the same name which aims to list, categorize and rank every single available chart - there are over [450 charts which you can see here](http://numberpicture.com/browse).

> **Important:** This project is still in active development and it is possible that we will be making breaking changes as we go. Use in production with caution before we release v1.

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

Number Picture provides several shape primitives for constructing visualizations. They all render SVG elements and come animation-ready. The prop names are designed to be as similar to the API of D3 so if you know how to use D3 you will know how to use the components.

> **Important:** every single prop for Shapes/Elements can either be passed a constant value, a variable, or a function that takes one argument - an object containing the props for the component - and returns the desired value. This becomes useful when we want to do animations and set values according to sibling items in collections.

#### For example:

```javascript
<Circle
  propA={ownProps => ownProps.propB}
  propB={20}
/>
```

#### Will evaluate to:

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

Renders an svg `path` element using the `d3.symbol()` generator for the `d` attribute.

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
    cx={ownProps => ownProps.datum.x}
    cy={ownProps => ownProps.datum.y}
    r={ownProps => ownProps.datum.r}
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
`datum` | mutated item from the `data` input array
`data` | the whole `data` input array
`index` | index of the `datum` in the `data` input array

#### Child Prop `datum` Signature

Key | Value
--- | ---
`x` | X coordinate of item
`y` | Y coordinate of item
`r` | radius of item
`data` | original datum from input `data`

### Stack

`// TODO: implement`

### Pie

`// TODO: description`

```javascript
import { Pie, Arc } from 'number-picture';
```

#### Usage

```javascript
<Pie
  data={[
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
  ]}
  value={datum => datum.value}
  id={datum => datum.id}
  sort={(a, b) => a.id - b.id}
>
  <Arc
    innerRadius={0}
    outerRadius={200}
    startAngle={ownProps => ownProps.datum.startAngle}
    endAngle={ownProps => ownProps.datum.endAngle}
    fill='black'
  />
</Pie>
```

#### Result

```javascript
<g>
  <path d={...} fill='black' />
  <path d={...} fill='black' />
  <path d={...} fill='black' />
</g>
```

Prop | Type | Default | Description
--- | --- | --- | ---
`data` | array | {} | array that gets iterated over and renders one child node for each item
`value` | function | datum => datum.value | Pie Layout value accessor
`id` | function | datum => datum.id | Pie Layout id accessor used for adding and removing items from the collection
`sort` | function | datum => datum.sort | Pie Layout data comparator
`sortValues` | function | undefined | Pie Layout value comparator
`startAngle` | function | undefined | overall start angle of the pie in radians
`endAngle` | number | undefined | overall end angle of the pie in radians
`padAngle` | number | undefined | pad angle of Pie Layout in radians
`singularChildren` | node | undefined | React children nodes that will only be rendered once - not per each datum

#### Child Props

Passed Prop | Value
--- | ---
`datum` | mutated item from the `data` input array
`data` | the whole mutated `data` input array
`index` | index of the `datum` in the `data` input array

#### Child Prop `datum` Signature

Key | Value
--- | ---
`startAngle` | start angle of item arc in radians
`endAngle` | start angle of item arc in radians
`innerRadius` | inner radius of item arc
`outerRadius` | outer radius of item arc
`value` | resolved value of datum (from the Pie `value` prop function)
`data` | original datum from input `data`

#### Singular Child Props

Passed Prop | Value
--- | ---
`data` | the whole mutated `data` input array
`index` | index of the `datum` in the `data` input array


### Area

`// TODO: implement`

### RadialArea

`// TODO: implement`

## Animation

All Shapes/Elements components are built with animation capabilities as a high priority. By default shapes are not animated but if they are nested within Collections or TransitionGroups (below) they become activated and will animate on update if you pass an `updateDuration` prop.

They can also be animated when they enter and exit the DOM by passing `enterDatum` + `enterDuration`, and `exitDuration` + `exitDatum` props respectively.

Easing can also be accomplished by passing `updateEase`, `enterEase` and `exitEase` props (see below).

### Lifecycle Hooks

#### Enter

When a Shape/Element enters or appears within a Collection/TransitionGroup it will attempt to animate itself. First, it will check that the `enterDatum` and `enterDuration` props are set.

If they are set then it will calculate its props using the `enterDatum` instead of the usual `datum` prop. In other words it will substitute `datum` with the `enterDatum` prop when evaluating all other props accessor functions. And then it will tween to the actual prop values using D3 to handle the animations.

So say for example we have an Collection with an unanimated Circle child:

```javascript
<Collection data={[1, 2, 3]}>
  <Circle
    cx={ownProps => ownProps.datum * 100}
    cy={100}
    r={20}
    fill='black'
  />
</Collection>
```

And we wanted to animate it on enter. We would pass added `enterDatum` and `enterDuration` props:

```javascript
<Collection data={[1, 2, 3]}>
  <Circle
    cx={ownProps => ownProps.datum * 100}
    cy={100}
    r={20}
    fill='black'
    enterDatum={ownProps => 0}
    enterDuration={5000}
  />
</Collection>
```

This would result in each circle animating on enter for 5 seconds from 0 `cx` to its proper `cx` value.

Notice that we do not need to change the `cx` prop accessor function. `ownProps.datum` is substituted with `ownProps.enterDatum` on enter.

#### Update

Shapes/Elements nested in Collections/TransitionGroups can be animated when they receive new props by passing an `updateDuration` prop.

Using our previous example:

```javascript
<Collection data={[1, 2, 3]}>
  <Circle
    cx={ownProps => ownProps.datum * 100}
    cy={100}
    r={20}
    fill='black'
    updateDuration={5000}
  />
</Collection>
```

This would result in the circles animating for 5 seconds to new `cx` positions every time they receive a new `datum` prop.

#### Exit

Shapes/Elements nested in Collections/TransitionGroups can be animated on exit in exactly the same way as on enter (above).

### TransitionGroup

Sometimes we do not want to have a Shape/Element nested within a Collection but we still want to trigger the animation hooks. Say for example we just want to render one animated Circle. We need to wrap it in an TransitionGroup in order to trigger the animation hooks on enter, update and exit.

The TransitionGroup will wrap the rendered children in an svg `g` element.

#### Example

```javascript
import { Circle, TransitionGroup } from 'number-picture';

<TransitionGroup>
  <Circle
    cx={ownProps => ownProps.datum * 100}
    cy={100}
    r={20}
    fill='black'
    enterDatum={ownProps => 0}
    enterDuration={5000}
    updateDuration={5000}
    exitDatum={ownProps => 400}
    exitDuration={5000}
  />
</TransitionGroup>
```

### Easing

Each Shape/Element when animating can be eased using [D3 easing functions](https://github.com/d3/d3-ease) by passing the name of the easing function to the `enterEase`, `updateEase` and `exitEase` props.

Available values are:

* 'easeLinear' (default)
* 'easePolyIn'
* 'easePolyOut'
* 'easePoly'
* 'easePolyInOut'
* 'easeQuadIn'
* 'easeQuadOut'
* 'easeQuad'
* 'easeQuadInOut'
* 'easeCubicIn'
* 'easeCubicOut'
* 'easeCubic'
* 'easeCubicInOut'
* 'easeSinIn'
* 'easeSinOut'
* 'easeSin'
* 'easeSinInOut'
* 'easeExpIn'
* 'easeExpOut'
* 'easeExp'
* 'easeExpInOut'
* 'easeCircleIn'
* 'easeCircleOut'
* 'easeCircle'
* 'easeCircleInOut'
* 'easeElasticIn'
* 'easeElastic'
* 'easeElasticOut'
* 'easeElasticInOut'
* 'easeBackIn'
* 'easeBackOut'
* 'easeBack'
* 'easeBackInOut'
* 'easeBounceIn'
* 'easeBounce'
* 'easeBounceOut'
* 'easeBounceInOut'

#### Example:

```javascript
import { Circle, TransitionGroup } from 'number-picture';

<TransitionGroup>
  <Circle
    cx={ownProps => ownProps.datum * 100}
    cy={100}
    r={20}
    fill='black'
    enterDatum={ownProps => 0}
    enterDuration={5000}
    enterEase='easeBounce'
    updateDuration={5000}
    enterEase='easeBack'
    exitDatum={ownProps => 400}
    exitDuration={5000}
    enterEase='easeElastic'
  />
</TransitionGroup>
```

## Interaction

`// TODO: implement`

## Axes

`// TODO: document`

### AxisTop

`// TODO: document`

```javascript
import { AxisTop } from 'number-picture';

const scale = scaleLinear()
  .domain([0, 100])
  .range([0, 400]);

<AxisTop scale={scale} />
```

### AxisRight

`// TODO: document`

```javascript
import { AxisRight } from 'number-picture';

const scale = scaleLinear()
  .domain([0, 100])
  .range([0, 400]);

<AxisRight scale={scale} />
```

### AxisBottom

`// TODO: document`

```javascript
import { AxisBottom } from 'number-picture';

const scale = scaleLinear()
  .domain([0, 100])
  .range([0, 400]);

<AxisBottom scale={scale} />
```

### AxisLeft

`// TODO: document`

```javascript
import { AxisLeft } from 'number-picture';

const scale = scaleLinear()
  .domain([0, 100])
  .range([0, 400]);

<AxisLeft scale={scale} />
```

## Misc

`// TODO: document`

### Annotations

`// TODO: implement`

### Patterns

`// TODO: implement`

### Helpers

`// TODO: document`
