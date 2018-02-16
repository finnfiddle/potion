import PropTypes from 'prop-types';
import grid from 'd3-v4-grid';

import Layout from './Layout';

export default class Grid extends Layout {

  static displayName = 'Grid';

  static propTypes = {
    size: PropTypes.arrayOf(PropTypes.number),
    nodeSize: PropTypes.arrayOf(PropTypes.number),
    rows: PropTypes.number,
    cols: PropTypes.number,
    bands: PropTypes.bool,
    padding: PropTypes.arrayOf(PropTypes.number),
    data: PropTypes.array,
    children: PropTypes.func,
    singularChildren: PropTypes.node,
  };

  getSchema() {
    return {
      layout: grid,
      layoutProps: [
        'size',
        'nodeSize',
        'rows',
        'cols',
        'bands',
        'padding',
        'data',
      ],
      selectStylesToTween: d => ({
        x: d.x,
        y: d.y,
        nodeWidth: d.nodeWidth,
        nodeHeight: d.nodeHeight,
      }),
    };
  }

  getData() {
    const layout = this.getLayout();

    layout.layout();

    const size = layout.size();
    const nodeSize = layout.nodeSize();
    const padding = layout.padding();
    const meta = {
      nodeWidth: nodeSize[0],
      nodeHeight: nodeSize[1],
      size,
      padding,
      // width: size[0],
      // height: size[1],
      // paddingHorizontal: padding[0],
      // paddingVertical: padding[1],
      rows: layout.rows(),
      cols: layout.cols(),
      bands: layout.bands(),
    };

    return layout.nodes().map(node => ({ ...node, ...meta }));
  }
}
