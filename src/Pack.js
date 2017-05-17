import React, { Children, cloneElement } from 'react';
import stamp from 'react-stamp';
import { pack } from 'd3-hierarchy';
import itsSet from 'its-set';

import TransitionGroup from './TransitionGroup';
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
      <TransitionGroup>
        {this.renderChildren()}
      </TransitionGroup>
    );
  },

  renderChildren() {
    const { data, children, includeRoot } = this.props;
    const packData = this.getPack()(data);

    return flattenHierarchy(packData).slice(includeRoot ? 0 : 1).reduce((acc, datum, index) =>
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
