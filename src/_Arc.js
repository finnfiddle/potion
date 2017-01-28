import React from 'react';
import stamp from 'react-stamp';
import itsSet from 'its-set';
import { arc } from 'd3-shape';

export default stamp(React).compose({

  displayName: 'Arc',

  propTypes: {
    // innerRadius
    // outerRadius
    // startAngle
    // endAngle
  },

  componentWillReceiveProps() {
    // if new whitelisted props
      // take control from react
      // get the differences
      // set up an interpolator for each
      // do a transition with attrTween that uses the interploator to generate arcs
      // remember to cancel transition if componentWillUnmount
  },

  render() {
    return (
      <path d={this.getArc()()} />
    );
  },

  getArc() {
    let a = arc();
    ['innerRadius', 'outerRadius', 'startAngle', 'endAngle'].forEach((key) => {
      if (itsSet(this.props[key])) a = a[key](this.props[key]);
    });
    return a;
  },

});
