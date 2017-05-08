import React, { Children, cloneElement } from 'react';
import stamp from 'react-stamp';
import { pack } from 'd3-hierarchy';
import itsSet from 'its-set';
import ReactTransitionGroup from 'react-addons-transition-group';

import { flattenHierarchy } from './helpers';

export default stamp(React).compose({

  displayName: 'Pack',

  propTypes: {
    // 'radius',
    // 'size',
    // 'padding',
    // 'packSiblings',
    // 'packEnclose',
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
    const packData = this.getPack()(data);

    return flattenHierarchy(packData).reduce((acc, datum, index) =>
      acc.concat(Children.map(children, (child, c) =>
        cloneElement(child, {
          datum,
          index,
          data: packData,
          key: `${index}_${c}`,
          _key: `${index}_${c}`,
        })
      ))
    , []);
  },

  getPack() {
    let p = pack();
    [
      'radius',
      'size',
      'padding',
      'packSiblings',
      'packEnclose',
    ].forEach((key) => {
      if (itsSet(this.props[key])) p = p[key](this.props[key]);
    });
    return p;
  },

});
