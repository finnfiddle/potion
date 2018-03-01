import React, { Component } from 'react';
import PropTypes from 'prop-types';
import gradients from '../node_modules/uigradients/gradients.json';

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
    components: {
      linearGradient: 'linearGradient',
      stop: 'stop',
    },
    offsets: [],
  };

  render() {
    const { name, colors, components, offsets, ...rest } = this.props;
    const finalColors = colors || GRADIENTS_HASH[name || randomGradientName()];
    const numColors = finalColors.length;

    return (
      <components.linearGradient {...rest}>
        {
          finalColors.map((color, i) => (
            <components.stop
              key={color}
              stopColor={color}
              // offset={offsets[i]}
              offset={offsets[i] || `${(100 / numColors) * i}%`}
            />
          ))
        }
      </components.linearGradient>
    );
  }
}
