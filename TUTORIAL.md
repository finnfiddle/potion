# Number Picture Tutorial

Number Picture is a collection of **React** components for declaratively composing animated, interactive SVG visualizations.
**React** handles the DOM structure and **D3** handles the animations + math.

This is a step-by-step tutroial to show you the main features on the library and how it works.

View the docs here: [http://docs.numberpicture.com](http://docs.numberpicture.com).

## Installing the library

In an existing React project run the following command:

```
npm install number-picture
```

## Drawing a circle

Let's start with a miminal example to get started - drawing an SVG circle.

Firstly, import React and the `Svg` and `Circle` components from the number-picture library.

```javascript
import React from 'react';
import { Svg, Circle } from 'number-picture';
```

Next, let's use the components to create a new React component that renders an SVG with a circle in it.


```javascript
export default class extends React.Component {
    render () {
        return (
            <Svg width={500} height={500}>
                <Circle cx={250} cy={250} r={50} />
            </Svg>
        );
    }
}
```

<div
    class="rc"
    data-component="
        <Svg width={500} height={500}>
            <Circle cx={250} cy={250} r={50} />
        </Svg>
    "
>
</div>

