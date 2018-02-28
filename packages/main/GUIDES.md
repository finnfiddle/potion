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
