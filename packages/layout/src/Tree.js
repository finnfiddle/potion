import React from 'react';
import PropTypes from 'prop-types';
import { tree, hierarchy } from 'd3-hierarchy';

import { flattenHierarchy } from '@potion/util';
import Layout from './Layout';

export default class Tree extends Layout {

  static displayName = 'Tree';

  static propTypes = {
    separation: PropTypes.number,
    size: PropTypes.arrayOf(PropTypes.number),
    nodeSize: PropTypes.number,
    data: PropTypes.object.isRequired,
    includeRoot: PropTypes.bool,
    sum: PropTypes.func,
    links: PropTypes.func,
    children: PropTypes.func,
  };

  static defaultProps = {
    ...Layout.defaultProps,
    includeRoot: true,
    sum: d => d.value,
  };

  getSchema() {
    return {
      layout: tree,
      layoutProps: ['nodeSize', 'size', 'separation'],
      selectStylesToTween: d => ({
        x: d.x,
        y: d.y,
      }),
    };
  }

  getData() {
    const { data, sum, includeRoot } = this.props;
    return flattenHierarchy(
      this.getLayout()(
        hierarchy(data).sum(sum)
      )
    )
    .slice(includeRoot ? 0 : 1);
  }

  // getData() {
  //   const { data, sum, includeRoot } = this.props;
  //   return this.getLayout()(
  //     hierarchy(data).sum(sum)
  //   )
  //   .nodes()
  //   .slice(includeRoot ? 0 : 1);
  // }

  renderChildren(data) {
    return (
      <this.props.component>
        {this.props.children(data.nodes())}
        {this.props.links(data.links())}
      </this.props.component>
    );
  }
}
