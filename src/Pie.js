import React, { Children, cloneElement } from 'react';
import stamp from 'react-stamp';
import { pie } from 'd3-shape';
import itsSet from 'its-set';

import TransitionGroup from './TransitionGroup';

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
    // id
  },

  render() {
    const { data, sort } = this.props;
    const pieData = this.getPie()(data).sort((a, b) => sort(a.data, b.data));

    return (
      <TransitionGroup>
        {this.renderSingularChildren(pieData)}
        {this.renderChildren(pieData)}
      </TransitionGroup>
    );
  },

  renderSingularChildren(pieData) {
    const { singularChildren } = this.props;
    return Children.map(singularChildren, child =>
      cloneElement(child, { data: pieData })
    );
  },

  renderChildren(pieData) {
    const { data, children, id } = this.props;
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
