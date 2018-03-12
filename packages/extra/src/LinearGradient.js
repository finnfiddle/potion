import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import gradients from '../node_modules/uigradients/gradients.json';

import { types } from '@potion/util';

const GRADIENTS_HASH = gradients.reduce((acc, g) => ({
  ...acc,
  [g.name.toLowerCase()]: g.colors,
}), {});

const GRADIENT_NAMES = Object.keys(GRADIENTS_HASH);

const randomGradientName = () => {
  const index = Math.floor(Math.random() * GRADIENT_NAMES.length);
  return GRADIENT_NAMES[index];
};

export default class LinearGradient extends Component {

  static propTypes = {
    components: PropTypes.shape({
      linearGradient: PropTypes.node,
      stop: PropTypes.node,
    }),
    name: PropTypes.oneOf(GRADIENT_NAMES),
    colors: PropTypes.array,
    offsets: PropTypes.arrayOf(PropTypes.string),
  }

  static defaultProps = {
    offsets: [],
  };

  static contextTypes = {
    components: types.components,
  }

  render() {
    const { name, colors, components, offsets, ...rest } = this.props;
    const finalColors = colors || GRADIENTS_HASH[name || randomGradientName()];
    const numColors = finalColors.length;
    const the = {
      linearGradient: get(this, 'context.components.linearGradient') ||
        get(components, 'linearGradient') ||
        'linearGradient',
      stop: get(this, 'context.components.stop') ||
        get(components, 'stop') ||
        'stop',
    };

    return (
      <the.linearGradient {...rest}>
        {
          finalColors.map((color, i) => (
            <the.stop
              key={color}
              stopColor={color}
              // offset={offsets[i]}
              offset={offsets[i] || `${(100 / numColors) * i}%`}
            />
          ))
        }
      </the.linearGradient>
    );
  }
}
