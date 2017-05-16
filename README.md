# Number Picture

Number Picture is a collection of **React** components for declaratively constructing animated, interactive SVG visualizations.
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
  - [Symbol](#symbol)
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

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Circle, Group } from 'number-picture';

ReactDOM.render(
  <svg width='400' height='400'>
    <Circle cx={200} cy={200} r={40} fill='black' />
  </svg>
, 'body');
```

## Shapes/Elements

Number Picture provides several shape primitives for constructing visualizations. They all render SVG elements and come animation-ready which cover in the [Animation](#animation) section. The prop names are designed to be as similar to the API of D3 so if you know how to use D3 you will know how to use the components.

> **Inportant:** every single prop can either be defined as a constant value (String, Number, etc...) or as a function that takes one argument - an object containing the props for the component - and returns the desired value. This becomes useful when we want to do animations and set values according to sibling items in collections.

For example:

```xml
<Circle
  propA={ownProps => ownProps.propB}
  propB={20}
/>
```

Will evaluate to:

```xml
<Circle
  propA={20}
  propB={20}
/>
```

### Circle

Renders an svg `circle` element.

```xml
import { Circle } from 'number-picture';
// usage:
<Circle cx={10) cy={20} r={30} fill='black' />
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

```xml
import { Arc } from 'number-picture';
// usage:
<Arc innerRadius={50) outerRadius={100} startAngle={0} endAngle={Math.PI} fill='black' />
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

```xml
import { Rect } from 'number-picture';
// usage:
<Rect x={50) y={100} width={100} height={40} fill='black' />
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

```xml
import { Text } from 'number-picture';
// usage:
<Text x={50) y={100} width={100} height={40} fill='black'>
  My text goes here...
</Text>
```

Prop | Type | Default | Description
--- | --- | --- | ---
`x` | number | undefined | x coordinate of top left corner of text
`y` | number | undefined | y coordinate of top left corner of text
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

### Symbol

`// TODO: document`

### Group

`// TODO: document`

## Collections & Layouts

`// TODO: document`

### Collection

`// TODO: document`

### TransitionGroup

`// TODO: document`

### Pack

`// TODO: document`

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
