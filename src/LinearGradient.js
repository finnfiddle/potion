import React, { Component } from 'react';
import PropTypes from 'prop-types';
import gradients from '../node_modules/uigradients/src/gradient_list.json';

const randomGradientName = () => {
  const keys = Object.keys(gradients);
  const index = Math.floor(Math.random() * keys.length);
  return keys[index];
};

export default class LinearGRadient extends Component {

  static propTypes = {
    components: PropTypes.shape({
      linearGradient: PropTypes.node,
      stop: PropTypes.node,
    }),
    name: PropTypes.oneOf(Object.keys(gradients)),
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

    const finalColors = colors || gradients[name || randomGradientName()];
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
