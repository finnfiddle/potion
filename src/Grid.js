import React, { Children, cloneElement } from 'react';
import stamp from 'react-stamp';
import itsSet from 'its-set';
import grid from 'd3-v4-grid';

import TransitionGroup from './TransitionGroup';

export default stamp(React).compose({

  displayName: 'Grid',

  propTypes: {
    // size
    // nodeSize
    // rows
    // cols
    // bands
    // points
    // padding
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
    const { children } = this.props;
    const gridData = this.getGrid();
    const meta = {
      size: gridData.size(),
      nodeSize: gridData.nodeSize(),
      rows: gridData.rows(),
      cols: gridData.cols(),
      bands: gridData.bands(),
      padding: gridData.padding(),
    };

    return gridData.nodes().reduce((acc, datum, index) =>
      acc.concat(Children.map(children, (child, c) =>
        cloneElement(child, {
          datum: Object.assign({}, meta, datum),
          index,
          data: gridData,
          key: `${index}_${c}`,
          _key: `${index}_${c}`,
        })
      ))
    , []);
  },

  getGrid() {
    let p = grid();

    [
      'size',
      'nodeSize',
      'rows',
      'cols',
      'bands',
      'padding',
      'data',
    ].forEach((key) => {
      if (itsSet(this.props[key])) p = p[key](this.props[key]);
    });

    p.layout();

    return p;
  },

});
