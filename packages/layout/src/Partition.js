import PropTypes from 'prop-types';
import { partition, hierarchy } from 'd3-hierarchy';

import { flattenHierarchy } from '@potion/util';
import Layout from './Layout';

export default class Pack extends Layout {

  static displayName = 'Partition';

  static propTypes = {
    separation: PropTypes.number,
    size: PropTypes.arrayOf(PropTypes.number),
    round: PropTypes.number,
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
      layout: partition,
      layoutProps: ['round', 'size', 'separation'],
      selectStylesToTween: d => ({
        x0: d.x0,
        y0: d.y0,
        x1: d.x1,
        y1: d.y1,
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
