# Installation<a class="anchor" name="installation"></a>

Potion provides several modules for construction visualizations: `@potion/element@next`, `@potion/layout@next`, `@potion/extra@next` and `@potion/util@next`.

This enables you to install only the modules you need. However, if you would like to install all modules you can do so by running:

```bash
npm install @potion/main@next
```

<h1>&nbsp;</h1>

# Hello World<a class="anchor" name="helloWorld"></a>

A basic example to get you up and running.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Svg, Circle } from '@potion/element';

ReactDOM.render(
  <Svg width={400} height={400}>
    <Circle cx={200} cy={200} r={40} fill='black' />
  </Svg>
, 'body');
```