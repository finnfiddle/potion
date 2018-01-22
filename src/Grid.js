import React, { Children, cloneElement, Component } from 'react';
import PropTypes from 'prop-types';
import itsSet from 'its-set';
import grid from 'd3-v4-grid';

import TransitionGroup from './TransitionGroup';
import { isFunction } from './helpers';

export default class Grid extends Component {

  constructor(props) {
    super(props);
    this.displayName = 'Grid';
  }

  getGrid() {
    let gridData = grid();

    [
      'size',
      'nodeSize',
      'rows',
      'cols',
      'bands',
      'padding',
      'data',
    ].forEach((key) => {
      if (itsSet(this.props[key])) {
        gridData = gridData[key](
          (isFunction(this.props[key]) ? this.props[key](this.props) : this.props[key])
        );
      }
    });

    gridData.layout();

    const meta = {
      size: gridData.size(),
      nodeSize: gridData.nodeSize(),
      rows: gridData.rows(),
      cols: gridData.cols(),
      bands: gridData.bands(),
      padding: gridData.padding(),
    };

    return gridData.nodes().map(d => Object.assign({}, d, meta));
  }

  renderChildren(gridData) {
    const { children } = this.props;

    return gridData.reduce((acc, datum, index) =>
      acc.concat(Children.map(children, (child, c) =>
        cloneElement(child, {
          datum,
          index,
          data: gridData,
          key: `${index}_${c}`,
          _key: `${index}_${c}`,
        })
      ))
    , []);
  }

  renderSingularChildren(gridData) {
    const { singularChildren } = this.props;
    return Children.map(singularChildren, child =>
      cloneElement(child, { data: gridData })
    );
  }

  render() {
    const gridData = this.getGrid();
    return (
      <TransitionGroup>
        {this.renderChildren(gridData)}
        {this.renderSingularChildren(gridData)}
      </TransitionGroup>
    );
  }
}

Grid.propTypes = {
  size: PropTypes.arrayOf(PropTypes.number),
  nodeSize: PropTypes.arrayOf(PropTypes.number),
  rows: PropTypes.number,
  cols: PropTypes.number,
  bands: PropTypes.bool,
  padding: PropTypes.arrayOf(PropTypes.number),
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.func,
  ]),
  children: PropTypes.node,
  singularChildren: PropTypes.node,
};
