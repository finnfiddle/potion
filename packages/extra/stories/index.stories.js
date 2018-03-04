import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { initScreenshot, withScreenshot } from 'storybook-chrome-screenshot';

import { Pattern, LinearGradient } from '../src/index';

addDecorator(initScreenshot());

storiesOf('Extra', module)

  .add('Pattern', withScreenshot({ viewport: { width: 500, height: 500 } })(() => (
    <svg width={500} height={500}>
      <Pattern.Paths
        id='my-pattern'
        d='waves'
        stroke='black'
      />
      <circle
        cx={250}
        cy={250}
        r={100}
        fill='url(#my-pattern)'
      />
    </svg>
  )))

  .add('LinearGradient', withScreenshot({ viewport: { width: 500, height: 500 } })(() => (
    <svg width={500} height={500}>
      <LinearGradient
        id='my-gradient'
        x1='0%'
        y1='0%'
        x2='0%'
        y2='100%'
        name='argon'
      />
      <circle
        cx={250}
        cy={250}
        r={100}
        fill='url(#my-gradient)'
      />
    </svg>
  )));
