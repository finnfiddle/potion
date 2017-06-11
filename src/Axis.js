import React, { PropTypes } from 'react';
import stamp from 'react-stamp';
import * as d3Axis from 'd3-axis';
import { interpolate } from 'd3-interpolate';
import omit from 'lodash.omit';

import { cap } from './helpers';
import SelectSelfMixin from './mixins/SelectSelfMixin';

export default stamp(React).compose(SelectSelfMixin, {

  displayName: 'Axis',

  propTypes: {
    placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    scale: PropTypes.func.isRequired,
  },

  defaultProps: {
    placement: 'top',
  },

  state: {},

  init() {
    this.state.scale = this.props.scale;
  },

  componentDidMount() {
    this.renderAxis(this.props.scale);
  },

  renderAxis(scale) {
    const { placement } = this.props;
    const axis = d3Axis[`axis${cap(placement)}`](scale);
    this.selectSelf().call(axis);
  },

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
  },

  render() {
    return (
      <g {...omit(this.props, ['scale', 'placement', 'datum', 'index'])} />
    );
  },

});
