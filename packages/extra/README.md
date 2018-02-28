# Extras<a class="anchor" name="extras"></a>

Extra elements/effects used when visualizing data like gradients, patterns, axes and legends to name a few.

## Patterns<a class="anchor" name="extras__patterns"></a>

Potion provides the ability to fill shapes with patterns using the third-party library [react-svg-textures](https://github.com/finnfiddle/react-svg-textures).

### Example:

```javascript
import { Svg, Rect } from '@potion/element';
import { Pattern } from '@potion/extra';

<Svg width={400} height={400}>
  <Pattern.Lines
    id='my-pattern'
    strokeWidth={10}
    stroke='purple'
    size={10}
    orientation='diagonal'
    background='blue'
  />
  <circle cx={100} cy={100} r={5} fill='url(#my-pattern)' />
</Svg>
```

## Gradients<a class="anchor" name="extras__gradients"></a>