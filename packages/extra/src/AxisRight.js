import React, { Component } from 'react';

import Axis from './Axis';

export default class AxisBottom extends Component {

  render() {
    return (
      <Axis {...this.props} placement='right' />
    );
  }

}
