# Guides<a class="anchor" name="guides"></a>

These guides cover specific goals or features you might want to implement when working with NumberPicture.

## Transforms<a class="anchor" name="guides__transforms"></a>

All elements can have transforms applied to them like translations, rotations, and so forth.

Every element/shape component accepts a `transform` prop which can either be an object or an array.

### Object example:

```javascript
<Group transform={{
  translate: [10, 20],
  rotate: [180, 50, 50],
  skewX: [20],
  skewY: [40],
  matrix: [1, 2, 3, 4, 5, 6],
  scale: [10, 20],
}} />
```

### Array example:

```javascript
<Group transform={[
  { type: 'translate': value: [10, 20] },
  { type: 'rotate': value: [90, 50, 50] },
  { type: 'skewX': value: [20] },
  { type: 'skewY': value: [40] },
  { type: 'matrix': value: [1, 2, 3, 4, 5, 6] },
  { type: 'scale': value: [10, 20] },
]} />
```

If you use the array syntax multiple transforms of the same type can be applied. Transforms are applied in the order from last to first.

## React Native<a class="anchor" name="guides__react_native"></a>

Potion works well with React Native with a slight bit of extra configuration. By injecting components from either [`Expo.Svg`](https://docs.expo.io/versions/latest/sdk/svg.html) or [`react-native-svg`](https://github.com/react-native-community/react-native-svg) we are able to render our Potion charts in mobile environments.

See a demo [here](https://expo.io/@finnfiddle/number-picture-rn-demo).

<a href="http://www.youtube.com/watch?feature=player_embedded&v=-4eXEGJyOU8
" target="_blank"><img src="http://img.youtube.com/vi/-4eXEGJyOU8/0.jpg" 
alt="Potion - React Native Demo" width="240" height="180" border="10" /></a>

**Note:** Patterns are not supported yet on React Native.

There are two options for injecting components - either we can inject all components at the root of the heirarchy into the `Svg` Potion component, or we can inject into each individual Potion component that we use.

### Injecting into the `Svg` component

We can inject all components to be used at once into the `Svg` Potion component through the `components` prop in the following way:

```javascript
import { Svg as PotionSvg, Circle as PotionCircle } from '@potion/element`;
import { Svg } from 'expo';

const {
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text,
  Use,
  Defs,
  Stop,
} = RNSvg;

<PotionSvg
  height={500}
  width={500}
  components={{
    circle: Circle,
    ellipse: Ellipse,
    g: G,
    lineargradient: LinearGradient,
    radialgradient: RadialGradient,
    line: Line,
    path: Path,
    polygon: Polygon,
    polyline: Polyline,
    rect: Rect,
    symbol: Symbol,
    text: Text,
    use: Use,
    defs: Defs,
    stop: Stop,
    svg: Svg,
  }}
>
  <PotionCircle cx={250} cy={250} r={100} fill="black" />
</PotionSvg>
```

### Injecting per component

Another approach is the manually inject the foreign components into each Potion component we use through its `component` prop:

```javascript
import { Svg, Circle } from '@potion/element`;
import { Svg as RNSvg } from 'expo';

<PotionSvg
  height={500}
  width={500}
  component={RNSvg}
>
  <PotionCircle
    cx={250}
    cy={250}
    r={100}
    fill="black"
    component={RNCircle}
  />
</PotionSvg>
```

### Transforms

`react-nativ-svg` doesn't completely comply to the SVG spec and handles transforms in a slightly different way. Instead of a `transform` prop on elements, `react-native-svg` uses several props instead: `x`, `y`, `rotation`, `scale`, `origin`, `originX` and `originY`.

This means that in order for Potion to be able to apply transforms correctly to rendered elements it needs to be able to know which environment it is operating in. Otherwise, we would need to apply different props manually in different environments which is not ideal. We can tell Potion the environment through the `env` prop on elements.

Currently, Potion supports two environments: `web` or `react-native-svg`.

Example:

```javascript
import { Svg, Circle } from '@potion/element`;
import { Svg as RNSvg } from 'expo';

<PotionSvg
  height={500}
  width={500}
  component={RNSvg}
>
  <PotionCircle
    cx={0}
    cy={0}
    r={100}
    fill="black"
    component={RNCircle}
    transform={{ translate: [250, 250] }}
    env="react-native-svg"
  />
</PotionSvg>
```

We can also set the environment on the `Svg` Potion component which will automatically set the environment for all its child Potion components through the context. The above example can be rewritten as follows:

```javascript
import { Svg, Circle } from '@potion/element`;
import { Svg as RNSvg } from 'expo';

<PotionSvg
  height={500}
  width={500}
  component={RNSvg}
  env="react-native-svg"
>
  <PotionCircle
    cx={0}
    cy={0}
    r={100}
    fill="black"
    component={RNCircle}
    transform={{ translate: [250, 250] }}
  />
</PotionSvg>
```

Compare the above to the approach in the web environment and you will see that the way we have applied our transforms is identical:

```javascript
import { Svg, Circle } from '@potion/element`;

<Svg
  height={500}
  width={500}
>
  <Circle
    cx={0}
    cy={0}
    r={100}
    fill="black"
    transform={{ translate: [250, 250] }}
  />
</Svg>
```
