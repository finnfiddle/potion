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
cx | number\|function | undefined | x coordinate of circle. Either a number or a function that receives on argument, the props of the component, and returns a number.
cy |
r |
fill |
stroke |
enterDatum |
enterEase | 
enterDuration| 
updateEase |
updateDuration |
exitDatum |
exitEase |
exitDuration |
