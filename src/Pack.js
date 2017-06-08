import React, { Children, cloneElement, PropTypes } from 'react';
import stamp from 'react-stamp';
import { pack } from 'd3-hierarchy';
import itsSet from 'its-set';

import TransitionGroup from './TransitionGroup';
import { flattenHierarchy } from './helpers';

export default stamp(React).compose({

  displayName: 'Pack',

  propTypes: {
    radius: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    size: PropTypes.arrayOf(PropTypes.number),
    padding: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    // packSiblings: PropTypes.arrayOf(
    //  PropTypes.shape({ x: PropTypes.number, y: PropTypes.number })
    // ),
    // packEnclose: PropTypes.number,
    data: PropTypes.object.isRequired,
  },

  defaultProps: {
    datumPropsToTween: ['x', 'y', 'r'],
  },

  render() {
    return (
      <TransitionGroup>
        {this.renderChildren()}
      </TransitionGroup>
    );
  },

  renderChildren() {
    const { data, children, includeRoot, datumPropsToTween } = this.props;

    const packData = this.getPack()(data);
    const filteredData = flattenHierarchy(packData)
      .slice(includeRoot ? 0 : 1)
      .map(datum => {
        const result = Object.assign({}, datum.data, datum);
        delete result.data;
        delete result.parent;
        return result;
      });

    return filteredData.reduce((acc, datum, index) =>
      acc.concat(Children.map(children, (child, c) =>
        cloneElement(child, {
          datum,
          index,
          data: filteredData,
          key: `${index}_${c}`,
          _key: `${index}_${c}`,
          datumPropsToTween,
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
      // 'packSiblings',
      // 'packEnclose',
    ].forEach((key) => {
      if (itsSet(this.props[key])) p = p[key](this.props[key]);
    });
    return p;
  },

});
