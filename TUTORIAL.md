# Number Picture Tutorial

Number Picture is a collection of **React** components for declaratively composing animated, interactive SVG visualizations.
**React** handles the DOM structure and **D3** handles the animations + math.

This is a step-by-step tutroial to show you the main features on the library and how it works.

For the tutorial we will use the Playground JSFiddle [here](https://fiddle.jshell.net/finnworks/fbjs3jkt/).

For the docs and installation instructions go to: [http://docs.numberpicture.com](http://docs.numberpicture.com).

## Basics

### Drawing a circle

Let's start with a miminal example to get started - drawing an SVG with a circle in it.

```javascript
<Svg width={500} height={500}>
  <Circle cx={250} cy={250} r={50} />
</Svg>
```

### Props can be functions

We could have written the previous example in the following way with function props.

```javascript
<Svg width={500} height={500}>
  <Circle
    cx={() => 250}
    cy={() => 250}
    r={() => 50}
  />
</Svg>
```

This will come in handy soon when we start driving the visualization with data.

### Function props get passed the component's own props

Props that are functions are evaluated by passing all of the props of the component to them.
For example the previous example could be rewritten like the following:

```javascript
<Svg width={500} height={500}>
  <Circle
    datum={{ radius: 50 }}
    cx={() => 250}
    cy={() => 250}
    r={ownProps => ownProps.datum.radius}
  />
</Svg>
```

### Animating shapes

Let's introduce two special props used for animation: `datum` which you've seen already, `enterDatum` and `enterDuration`. (There are also similarly `exitDatum` and `exitDuration` props which we will get to later).

When a shape enters its `enterDatum` prop is evaluated as well as the `datum` prop. Then it proceeds to tween the values of both from the former to the latter and respectively animate the component.

For example the following would result in the radius being animated from 0 to 50 over a period of 3 seconds:

```javascript
<Svg width={500} height={500}>
  <Circle
    enterDatum={{ radius: 0 }}
    enterDuration={3000}
    datum={{ radius: 50 }}
    cx={() => 250}
    cy={() => 250}
    r={ownProps => ownProps.datum.radius}
  />
</Svg>
```

## Collections/Layouts

Collections and Layouts take data collections and map them to shapes. For example if we had an array of objects representing circles we could pass them to a collection and for each item a `Circle` would be rendered.

```javascript
<Svg width={500} height={500}>
  <Collection
    data={[
      { radius: 40, x: 40 },
      { radius: 50, x: 130 },
      { radius: 60, x: 240 },
    ]}
  >
    <Circle
        cx={ownProps => ownProps.datum.x}
        cy={() => 250}
        r={ownProps => ownProps.datum.radius}
    />
  </Collection>
</Svg>
```

Notice that we do not manually set the `datum` prop for each child. It is automatically passed from the `Collection`.

### Animating children

In exactly the same way that we animated the circle in the first animation example we can animate the items in the `Collection`:

```javascript
<Svg width={500} height={500}>
  <Collection
    data={[
      { radius: 40, x: 40 },
      { radius: 50, x: 130 },
      { radius: 60, x: 240 },
    ]}
  >
    <Circle
        enterDatum={{ x: 0, radius: 0 }}
        enterDuration={3000}
        cx={ownProps => ownProps.datum.x}
        cy={() => 250}
        r={ownProps => ownProps.datum.radius}
    />
  </Collection>
</Svg>
```

## More to come...