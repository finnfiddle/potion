import PropTypes from 'prop-types';
import { cluster, hierarchy } from 'd3-hierarchy';

import { flattenHierarchy } from '@potion/util';
import Layout from './Layout';

export default class Cluster extends Layout {

  static displayName = 'Cluster';

  static propTypes = {
    separation: PropTypes.number,
    size: PropTypes.arrayOf(PropTypes.number),
    nodeSize: PropTypes.number,
    data: PropTypes.object.isRequired,
    includeRoot: PropTypes.bool,
    sum: PropTypes.func,
  };

  static defaultProps = {
    ...Layout.defaultProps,
    includeRoot: true,
    sum: d => d.value,
  };

  getSchema() {
    return {
      layout: cluster,
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
}
