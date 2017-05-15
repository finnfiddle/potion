# Number Picture

Number Picture is a collection of React components for declaratively constructing animated, interactive SVG visualizations.
React handles the DOM structure wherease D3 handles the animations and math.

Normally, a charting library will give you a collection of high-level chart components (eg. Bar, Pie, Scatter...) but Number Picture instead gives you the low-level building blocks (Circle, Arc, Force Layout) so that you can build your own visualizations.

The library is part of a bigger project which aims to list, categorize and rank every single available chart - there are over [450 charts which you can see here](http://numberpicture.com/browse).

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

```
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

Number Picture provides several primitive shapes for constructing visualizations. They all render SVG elements and come animation-ready. You just need to configure them correctly (ie. pass the correct props to them) and they will just work.

### Circle

Renders an svg `circle` element.

```xml
<Circle cx={10) cy={20} r={30} fill='black' />
```

Prop | Type | Default | Description
--- | --- | --- | ---
cx | number OR function | undefined | x coordinate of circle. Either a number or a function that receives one argument (the props of the component) and returns a number.
cy | number OR function | undefined | y coordinate of circle. Either a number or a function that receives one argument (the props of the component) and returns a number.
r | number OR function | undefined | radius of circle. Either a number or a function that receives one argument (the props of the component) and returns a number.
fill | string OR function | undefined | fill of circle. Either a number or a function that receives one argument (the props of the component) and returns a color string.
stroke | string OR function | undefined | fill of circle. Either a number or a function that receives one argument (the props of the component) and returns a color string.
enterDatum | object OR function | {} | The datum (when Circle is nested within a Collection or Layout) that it uses to render itself when it enters the DOM.
enterEase | string | 'linearEasing' | D3 easing function name used to tween the shape on enter
enterDuration | number | 0 | duration of shape tween on enter
updateEase | string | 'linearEasing' | D3 easing function name used to tween the shape on update
updateDuration | number | 0 | duration of shape tween on update
exitDatum | object OR function | {} | The datum (when Circle is nested within a Collection or Layout) that it uses to render itself when it leaves the DOM.
exitEase | string | 'linearEasing' | D3 easing function name used to tween the shape on exit
exitDuration | number | 0 | duration of shape tween on exit

### Arc

Renders an svg `path` element and generates the `d` attribute from props to draw an arc shape.

```xml
<Arc innerRadius={50) outerRadius={100} startAngle={0} endAngle={Math.PI} fill='black' />
```

Prop | Type | Default | Description
--- | --- | --- | ---
innerRadius | number OR function | undefined | inner radius of arc. Either a number or a function that receives one argument (the props of the component) and returns a number.
outerRadius | number OR function | undefined | outer radius of arc. Either a number or a function that receives one argument (the props of the component) and returns a number.
startAngle | number OR function | undefined | start angle of arc in radians. Either a number or a function that receives one argument (the props of the component) and returns a number.
endAngle | number OR function | undefined | end angle of arc in radians. Either a number or a function that receives one argument (the props of the component) and returns a number.
fill | string OR function | undefined | fill of arc. Either a number or a function that receives one argument (the props of the component) and returns a color string.
stroke | string OR function | undefined | fill of arc. Either a number or a function that receives one argument (the props of the component) and returns a color string.
enterDatum | object OR function | {} | The datum (when Circle is nested within a Collection or Layout) that it uses to render itself when it enters the DOM.
enterEase | string | 'linearEasing' | D3 easing function name used to tween the shape on enter
enterDuration | number | 0 | duration of shape tween on enter
updateEase | string | 'linearEasing' | D3 easing function name used to tween the shape on update
updateDuration | number | 0 | duration of shape tween on update
exitDatum | object OR function | {} | The datum (when Circle is nested within a Collection or Layout) that it uses to render itself when it leaves the DOM.
exitEase | string | 'linearEasing' | D3 easing function name used to tween the shape on exit
exitDuration | number | 0 | duration of shape tween on exit

### Line

`// TODO`

### RadialLine

`// TODO`

### Curve

`// TODO`

### Rect

`// TODO`

### Text

`// TODO`

### Symbol

`// TODO`

### Group

`// TODO`

## Collections & Layouts

`// TODO`

### Collection

`// TODO`

### TransitionGroup

`// TODO`

### Pack

`// TODO`

### Stack

`// TODO`

### Pie

`// TODO`

### Area

`// TODO`

### RadialArea

`// TODO`

## Animation

`// TODO`

## Interaction

`// TODO`

## Axes

`// TODO`

### Axis

`// TODO`

### AxisTop

`// TODO`

### AxisRight

`// TODO`

### AxisBottom

`// TODO`

### AxisLeft

`// TODO`

## Misc

`// TODO`

### Annotations

`// TODO`

### Patterns

`// TODO`

### Helpers

`// TODO`
