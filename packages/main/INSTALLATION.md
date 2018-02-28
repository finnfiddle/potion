# Installation<a class="anchor" name="installation"></a>

To install React with Yarn, run:

```bash
yarn add potion@next
```

To install React with npm, run:

```bash
npm install potion@next
```

<h1>&nbsp;</h1>

# Hello World<a class="anchor" name="helloWorld"></a>

A basic example to get you up and running.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Svg, Circle } from 'potion';

ReactDOM.render(
  <Svg width={400} height={400}>
    <Circle cx={200} cy={200} r={40} fill='black' />
  </Svg>
, 'body');
```