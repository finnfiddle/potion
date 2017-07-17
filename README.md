# Number Picture

[http://docs.numberpicture.com](http://docs.numberpicture.com)

Number Picture is a collection of **React** components for declaratively composing animated, interactive SVG visualizations.
**React** handles the DOM structure and **D3** handles the animations + math.

Normally, a charting library will give you a collection of high-level chart components (eg. Bar, Pie, Scatter...) but Number Picture instead gives you the low-level building blocks (Circle, Arc, Force Layout, Axis...) so that you can build your own visualizations.

The library is part of a bigger project by the same name which aims to list, categorize and rank every single available chart - there are over [450 charts which you can see here](http://numberpicture.com/browse).

There is a JSFiddle playground that you can use to test out the library [here](https://fiddle.jshell.net/finnworks/fbjs3jkt/).

There is also a tutorial [here](http://docs.numberpicture.com?route=tutorial) which guides you through the basics of using the library.

> **Important:** This project is still in active development and we are still refining the API.

## Contents

- [Installation](#_installation)
- [Hello World](#_hello-world)
- [Shapes/Elements](#_shapes-elements)
  - [Circle](#_circle)
  - [Arc](#_arc)
  - [Line](#_line)
  - [RadialLine](#_radialline)
  - [Curve](#_curve)
  - [Rect](#_rect)
  - [Text](#_text)
  - [SymbolShape](#_symbolshape)
  - [Group](#_group)
- [Collections & Layouts](#_collections-layouts)
  - [Collection](#_collection)
  - [TransitionGroup](#_transitiongroup)
  - [Pack](#_pack)
  - [Stack](#_stack)
  - [Pie](#_pie)
  - [Area](#_area)
  - [RadialArea](#_radialarea)
  - [Grid](#_grid)
  - [Force Simulation](#_force-simulation)
- [Animation](#_animation)
  - [Lifecycle Hooks](#_lifecycle-hoks)
    - [Enter](#_enter)
    - [Update](#_update)
    - [Exit](#_exit)
  - [TransitionGroup](#_transitiongroup)
  - [Easing](#_easing)
- [Interaction](#_interaction)
- [Axes](#_axes)
  - [Axis](#_axis)
  - [AxisTop](#_axistop)
  - [AxisRight](#_axisright)
  - [AxisBottom](#_axisbottom)
  - [AxisLeft](#_axisleft)
- [Misc](#_misc)
  - [Optimization](#_optimization)
  - [Gotchas](#_gotchas)
  - [Annotations](#_annotations)
  - [Patterns](#_patterns)
  - [Helpers](#_helpers)
- [Credits](#_credits)
- [Contributing/Issues](#_contibuting-issues)

<div id='_installation'></div>

## Installation

```shell
npm install number-picture
```

<div id='_hello-world'></div>

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

<div id='_shapes-elements'></div>

## Shapes/Elements

Number Picture provides several shape primitives for constructing visualizations. They all render SVG elements and come animation-ready. The prop names are designed to be as similar to the API of D3 so if you know how to use D3 you will know how to use the components.

<div id='_circle'></div>

### Circle

Renders an svg `circle` element.

```javascript
import { Circle } from 'number-picture';
```

#### Usage:

 ```javascript
<Circle cx={100} cy={100} r={30} fill='black' />
```

<!--#### Result:

```javascript
<circle cx='10' cy='20' r='30' fill='black' />
```-->

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

<div id='_arc'></div>

### Arc

Renders an svg `path` element and generates the `d` attribute from props to draw an arc shape.

```javascript
import { Arc } from 'number-picture';
```

#### Usage:

 ```javascript
<Arc innerRadius={50} outerRadius={100} startAngle={0} endAngle={Math.PI} fill='black' />
```

<!--#### Result:

```javascript
<path d='...' fill='black' />
```-->

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

<div id='_line'></div>

### Line

`// TODO: document`

<div id='_radialline'></div>

### RadialLine

`// TODO: implement`

<div id='_curve'></div>

### Curve

`// TODO: implement`

<div id='_rect'></div>

### Rect

Renders an svg `rect` element.

```javascript
import { Rect } from 'number-picture';
```

#### Usage:

 ```javascript
<Rect x={50} y={100} width={100} height={40} fill='black' />
```

<!--#### Result:

```javascript
<rect x='50' y='100' width='100' height='40' fill='black' />
```-->

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

<div id='_text'></div>

### Text

Renders an svg `text` element.

```javascript
import { Text } from 'number-picture';
```

#### Usage:

 ```javascript
<Text dx={100} stroke='black'>
  My text goes here...
</Text>
```

<!--#### Result:

```javascript
<text dx='10' stroke='black'>
  My text goes here...
</text>
```-->

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

<div id='_symbolshape'></div>

### SymbolShape

Renders an svg `path` element using the `d3.symbol()` generator for the `d` attribute.

```javascript
import { SymbolShape } from 'number-picture';
```

#### Usage:

 ```javascript
<SymbolShape size={500} type='symbolCross' fill='black' />
```

<!--#### Result:

```javascript
<path d='...' fill='black' />
```-->

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

<div id='_group'></div>

### Group

Renders an svg `g` element.

```javascript
import { Group } from 'number-picture';
```

#### Usage:

 ```javascript
<Group x={100} y={100} rotation={45}>
  <Rect width={50} height={10} />
</Group>
```

<!--#### Result:

```javascript
<g transform='translate(100, 100) rotate(45)'>
  xyz
</g>
```-->

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

<div id='_collections-layouts'></div>

## Collections & Layouts

The purpose of Collections is to combine the Shapes/Elements above with datasets. If you wanted you could manually iterate over a dataset array and for example create a Circle element for each datum - but the benefit of letting Collections do it for you is that they also trigger animation hooks on the children when they enter and exit.

Layouts are Collections that have the added benefit of mutating the input data in useful ways. For example the Pie Layout will calculate metadata from the input dataset and pass it on to the children along with the original data so that you can use it to draw a pie chart.

<div id='_collection'></div>

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

<!--#### Result:

```javascript
<g>
  <circle cx={100} y={100} r={20} fill='black' />
  <circle cx={200} y={100} r={20} fill='black' />
  <circle cx={300} y={100} r={20} fill='black' />
</g>
```-->

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

<div id='_pack'></div>

### Pack

`// TODO: description, datumPropsToTween`

```javascript
import { Pack } from 'number-picture';
```

#### Usage

```javascript
<Pack
  data={
    d3.hierarchy({
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
>
  <Group x={-100} y={-100}>
    <Circle
      cx={ownProps => ownProps.datum.x}
      cy={ownProps => ownProps.datum.y}
      r={ownProps => ownProps.datum.r}
      fill='black'
    />
  </Group>
</Pack>
```

<!--#### Result

```javascript
<g>
  <circle cx={...} y={...} r={...} fill='black' />
  <circle cx={...} y={...} r={...} fill='black' />
  <circle cx={...} y={...} r={...} fill='black' />
</g>-->
<!--```-->

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

<div id='_stack'></div>

### Stack

`// TODO: implement`

<div id='_pie'></div>

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
    outerRadius={100}
    startAngle={ownProps => ownProps.datum.startAngle}
    endAngle={ownProps => ownProps.datum.endAngle}
    fill='black'
    stroke='white'
    strokeWidth={1}
  />
</Pie>
```

<!--#### Result

```javascript
<g>
  <path d={...} fill='black' />
  <path d={...} fill='black' />
  <path d={...} fill='black' />
</g>
```-->

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

<div id='_area'></div>

### Area

`// TODO: implement`

<div id='_radialarea'></div>

### RadialArea

`// TODO: implement`

<div id='_grid'></div>

### Grid

`// TODO: document`

<div id='_force-simulation'></div>

### Force Simulation

`// TODO: document`

<div id='_animation'></div>

## Animation

All Shapes/Elements components are built with animation capabilities as a high priority. By default shapes are not animated but if they are nested within Collections or TransitionGroups (below) they become activated and will animate on update if you pass an `updateDuration` prop.

They can also be animated when they enter and exit the DOM by passing `enterDatum` + `enterDuration`, and `exitDuration` + `exitDatum` props respectively.

Easing can also be accomplished by passing `updateEase`, `enterEase` and `exitEase` props (see below).

<div id='_lifecycle-hooks'></div>

### Lifecycle Hooks

<div id='_enter'></div>

#### Enter

When a Shape/Element enters or appears within a Collection/TransitionGroup it will attempt to animate itself. First, it will check that the `enterDatum` and `enterDuration` props are set.

If they are set then it will calculate its props using the `enterDatum` instead of the usual `datum` prop. In other words it will substitute `datum` with the `enterDatum` prop when evaluating all other props accessor functions. And then it will tween to the actual prop values using D3 to handle the animations.

So say for example we have an Collection with an unanimated Circle child:

```javascript
<Collection
  data={[
    { value: 1 }, 
    { value: 2 }, 
    { value: 3 },
  ]}
>
  <Circle
    cx={ownProps => ownProps.datum.value * 100}
    cy={100}
    r={20}
    fill='black'
  />
</Collection>
```

And we wanted to animate it on enter. We would pass added `enterDatum` and `enterDuration` props:

```javascript
<Collection
  data={[
    { value: 1 }, 
    { value: 2 }, 
    { value: 3 },
  ]}
>
  <Circle
    cx={ownProps => ownProps.datum.value * 100}
    cy={100}
    r={20}
    fill='black'
    enterDatum={{ value: 0 }}
    enterDuration={5000}
  />
</Collection>
```

This would result in each circle animating on enter for 5 seconds from 0 `cx` to its proper `cx` value.

Notice that we do not need to change the `cx` prop accessor function. `ownProps.datum` is substituted with `ownProps.enterDatum` on enter.

<div id='_update'></div>

#### Update

Shapes/Elements nested in Collections/TransitionGroups can be animated when they receive new props by passing an `updateDuration` prop.

Using our previous example:

`// TODO: make data update periodically`

```javascript
<Collection
  data={[
    { value: 1 }, 
    { value: 2 }, 
    { value: 3 },
  ]}
>
  <Circle
    cx={ownProps => ownProps.datum.value * 100}
    cy={100}
    r={20}
    fill='black'
    updateDuration={5000}
  />
</Collection>
```

This would result in the circles animating for 5 seconds to new `cx` positions every time they receive a new `datum` prop.

<div id='_exit'></div>

#### Exit

Shapes/Elements nested in Collections/TransitionGroups can be animated on exit in exactly the same way as on enter (above).

<div id='_transitiongroup'></div>

### TransitionGroup

Sometimes we do not want to have a Shape/Element nested within a Collection but we still want to trigger the animation hooks. Say for example we just want to render one animated Circle. We need to wrap it in an TransitionGroup in order to trigger the animation hooks on enter, update and exit.

The TransitionGroup will wrap the rendered children in an svg `g` element.

#### Example

```javascript
import { Circle, TransitionGroup } from 'number-picture';
```

```javascript
<TransitionGroup>
  <Circle
    cx={ownProps => ownProps.datum.value}
    cy={100}
    r={20}
    fill='black'
    datum={{ value: 100 }}
    enterDatum={{ value: -100 }}
    enterDuration={5000}
  />
</TransitionGroup>
```

<div id='_easing'></div>

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
```

```javascript
<TransitionGroup>
  <Circle
    cx={ownProps => ownProps.datum.value}
    cy={0}
    r={20}
    fill='black'
    datum={{ value: 100 }}
    enterDatum={{ value: -100 }}
    enterEase='easeBounce'
    enterDuration={5000}
  />
</TransitionGroup>
```

<div id='_interaction'></div>

## Interaction

`// TODO: document`

<div id='_axes'></div>

## Axes

`// TODO: document`

<div id='_axistop'></div>

## Axis

`// TODO: document`

<div id='_axis'></div>

### AxisTop

`// TODO: document`

```javascript
import { AxisTop } from 'number-picture';
```

```javascript
<AxisTop
  scale={
    d3.scaleLinear()
      .domain([0, 100])
      .range([-200, 200])  
  }
/>
```

<div id='_axisright'></div>

### AxisRight

`// TODO: document`

```javascript
import { AxisRight } from 'number-picture';
```

```javascript
<AxisRight
  scale={
    d3.scaleLinear()
      .domain([0, 100])
      .range([-100, 100])  
  }
/>
```

<div id='_axisbottom'></div>

### AxisBottom

`// TODO: document`

```javascript
import { AxisBottom } from 'number-picture';
```

```javascript
<AxisBottom
  scale={
    d3.scaleLinear()
      .domain([0, 100])
      .range([-200, 200])  
  }
/>
```

<div id='_axisleft'></div>

### AxisLeft

`// TODO: document`

```javascript
import { AxisLeft } from 'number-picture';
```

```javascript
<AxisLeft
  scale={
    d3.scaleLinear()
      .domain([0, 100])
      .range([-100, 100])  
  }
/>
```

<div id='_misc'></div>

## Misc

`// TODO: document`

<div id='_optimization'></div>

### Optimization

`// TODO: document`

- datumPropsToTween
- datum filtering
- data count

<div id='_gotchas'></div>

### Gotchas

`// TODO: document`

- use Group component for transforms
- no stateless components (inside Group only?)
- datum values can only be objects in order for animations to work

<div id='_annotations'></div>

### Annotations

`// TODO: implement`

<div id='_patterns'></div>

### Patterns

`// TODO: implement`

<div id='_helpers'></div>

### Helpers

`// TODO: document`

<div id='_credits'></div>

### Credits

The strategy for combining React with D3 is very inspired by the work of [Swizec Teller](https://swizec.com/) and his book [Data Visualization with d3.js](https://www.packtpub.com/web-development/data-visualization-d3js).

<div id='_contibuting-issues'></div>

### Contributing/Issues

`// TODO: document`


