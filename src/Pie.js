import React, { Children, cloneElement } from 'react';
import stamp from 'react-stamp';
import { pie } from 'd3-shape';
import itsSet from 'its-set';
import ReactTransitionGroup from 'react-addons-transition-group';

export default stamp(React).compose({

  displayName: 'Pie',

  propTypes: {
    // value
    // sort
    // sortValues
    // startAngle
    // endAngle
    // padAngle
    // data
  },

  render() {
    return (
      <ReactTransitionGroup component='g'>
        {this.renderChildren()}
      </ReactTransitionGroup>
    );
  },

  renderChildren() {
    const { data, children } = this.props;
    return this.getPie()(data).reduce((acc, datum, index) =>
      acc.concat(Children.map(children, (child, c) =>
        cloneElement(child, { datum, index, key: `${index}_${c}`, _key: `${index}_${c}` })
      ))
    , []);
  },

  getPie() {
    let p = pie();
    [
      'value',
      'sort',
      'sortValues',
      'startAngle',
      'endAngle',
      'padAngle',
    ].forEach((key) => {
      if (itsSet(this.props[key])) p = p[key](this.props[key]);
    });
    return p;
  },

});
