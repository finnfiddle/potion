# Extras<a class="anchor" name="extras"></a>

Extra elements/effects used when visualizing data like gradients, patterns, axes and legends to name a few.

## Patterns<a class="anchor" name="extras__patterns"></a>

Potion provides the ability to fill shapes with patterns using the third-party library [react-svg-textures](https://github.com/finnfiddle/react-svg-textures).

![Pattern](https://raw.githubusercontent.com/finnfiddle/potion/master/__screenshots__/Extra-Pattern.png "Pattern")

### Example:

```javascript
import { Svg } from '@potion/element';
import { Pattern } from '@potion/extra';

<Svg width={400} height={400}>
  <Pattern.Paths
    id='my-pattern'
    d='waves'
    stroke='black'
  />
  <circle cx={100} cy={100} r={5} fill='url(#my-pattern)' />
</Svg>
```

## Gradients<a class="anchor" name="extras__gradients"></a>

Potion provides the ability to fill shapes with linear and radial gradients. Many preset gradients are provided by [uiGradients](https://uigradients.com).

![LinearGradient](https://raw.githubusercontent.com/finnfiddle/potion/master/__screenshots__/Extra-LinearGradient.png "LinearGradient")

### Example:

```javascript
import { Svg, Circle } from '@potion/element';
import { LinearGradient } from '@potion/extra';

<Svg width={400} height={400}>
   <LinearGradient
    id="my-gradient"
    x1="0%"
    y1="0%"
    x2="0%"
    y2="100%"
    name="argon"
  />
  <Circle cx={100} cy={100} r={5} fill='url(#my-gradient)' />
</Svg>
```