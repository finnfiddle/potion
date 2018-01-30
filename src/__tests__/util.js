import { Component } from 'react';
import PropTypes from 'prop-types';

export const ANIMATION_MARGIN_OF_ERROR = 0.05;

export class Feeder extends Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return this.props.children(this.props);
  }
}
