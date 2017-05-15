# Number Picture

Number Picture is a collection of React components for declaratively constructing animated, interactive SVG visualizations.
React handles the DOM structure wherease D3 handles the animations and math.

Normally, a charting library will give you a collection of high-level chart components (eg. Bar, Pie, Scatter...) but Number Picture instead gives you the low-level building blocks (Circle, Arc, Force Layout) so that you can build your own visualizations.

The library is part of a bigger project which aims to list, categorize and rank every single available chart - there are over [450 charts which you can see here](http://numberpicture.com/browse).

## Shapes

Number Picture provides several primitive shapes for constructing visualizations. They all render SVG elements and come animation-ready. You just need to configure them correctly (ie. pass the correct props to them) and they will just work.

### Circle

Renders an svg `<circle cx='10' cy='20' r='30' fill='black' />`.

```xml
<Circle
  cx={10)
  cy={20}
  r={30}
  fill='black'
/>
```

Prop | Type | Default | Description
--- | --- | --- | ---
cx | number\|function | undefined | x coordinate of circle. Either a number or a function that receives one argument (the props of the component) and returns a number.
cy | number\|function | undefined | y coordinate of circle. Either a number or a function that receives one argument (the props of the component) and returns a number.
r | number\|function | undefined | radius of circle. Either a number or a function that receives one argument (the props of the component) and returns a number.
fill | string\|function | undefined | fill of circle. Either a number or a function that receives one argument (the props of the component) and returns a color string.
stroke | string\|function | undefined | fill of circle. Either a number or a function that receives one argument (the props of the component) and returns a color string.
enterDatum | object\|function | {} | The datum (when Circle is nested within a Collection or Layout) that it uses to render itself when it enters the DOM.
enterEase | string | 'linearEasing' | D3 easing function name used to tween the shape on enter
enterDuration | number | 0 | duration of shape tween on enter
updateEase | string | 'linearEasing' | D3 easing function name used to tween the shape on update
updateDuration | number | 0 | duration of shape tween on update
exitDatum | object\|function | {} | The datum (when Circle is nested within a Collection or Layout) that it uses to render itself when it leaves the DOM.
exitEase | string | 'linearEasing' | D3 easing function name used to tween the shape on exit
exitDuration | number | 0 | duration of shape tween on exit
