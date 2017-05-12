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
    const { data, children, id } = this.props;
    const pieData = this.getPie()(data);
    console.log({ data, pieData });
    return pieData.reduce((acc, datum, index) =>
      acc.concat(Children.map(children, (child, c) => {
        const key = id(datum.data);
        return cloneElement(child, {
          datum,
          index,
          data: pieData,
          key,
          _key: key,
        });
      }))
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
