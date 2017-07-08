import React, { PropTypes } from 'react';
import * as d3Axis from 'd3-axis';
import { interpolate } from 'd3-interpolate';

import { cap, omit } from './helpers';
import SelectSelf from './mixins/SelectSelf';

export default class Axis extends SelectSelf {

  constructor(props) {
    super(props);
    this.displayName = 'Axis';
    this.state = {
      scale: this.props.scale,
    };
  }

  componentDidMount() {
    this.renderAxis(this.props.scale);
  }

  componentWillReceiveProps(nextProps) {
    this.selectSelf()
      .transition()
      .duration(1000)
      .tween('axis', () => {
        if (!this.IsUnmounting) {
          const i = interpolate(this.state.scale.domain(), nextProps.scale.domain());
          this.setState({ scale: nextProps.scale });
          return t => {
            this.renderAxis(this.state.scale.domain(i(t)));
          };
        }
      });
  }

  renderAxis(scale) {
    const { placement } = this.props;
    const axis = d3Axis[`axis${cap(placement)}`](scale);
    this.selectSelf().call(axis);
  }

  render() {
    return (
      <g
        {...omit(this.props, [
          'scale',
          'placement',
          'datum',
          'index',
          'enterDatum',
          'exitDatum',
        ])}
      />
    );
  }

}

Axis.propTypes = {
  placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  scale: PropTypes.func.isRequired,
};

Axis.defaultProps = {
  placement: 'top',
};
