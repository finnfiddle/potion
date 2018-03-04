import PropTypes from 'prop-types';
import { pack, hierarchy } from 'd3-hierarchy';

import { flattenHierarchy } from '@potion/util';
import Layout from './Layout';

export default class Pack extends Layout {

  static displayName = 'Pack';

  static propTypes = {
    radius: PropTypes.number,
    size: PropTypes.arrayOf(PropTypes.number),
    padding: PropTypes.number,
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
      layout: pack,
      layoutProps: ['radius', 'size', 'padding'],
      selectStylesToTween: d => ({
        r: d.r,
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
