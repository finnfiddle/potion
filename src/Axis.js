import React from 'react';
import stamp from 'react-stamp';
import * as d3Axis from 'd3-axis';
import { select } from 'd3-selection';
import { interpolate } from 'd3-interpolate';

import { cap } from './helpers';
import SelectSelfMixin from './mixins/SelectSelfMixin';

export default stamp(React).compose(SelectSelfMixin, {

  displayName: 'Axis',

  propTypes: {
    // placement,
    // scale,
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

  // componentDidMount() {
  //   this.renderAxis(this.props);
  // },
  //
  // componentWillReceiveProps(nextProps) {
  //   this.renderAxis(this.props);
  // },

  render() {
    const { scale, placement, ...props } = this.props;
    return (
      <g {...props} />
    );
  },

  // renderAxis(props) {
  //   const { placement, scale } = props;
  //   d3Axis[`axis${cap(placement)}`](scale)(select(this.container));
  // },

});
