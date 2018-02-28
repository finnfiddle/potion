import PropTypes from 'prop-types';
import { treemap, hierarchy } from 'd3-hierarchy';

import { flattenHierarchy } from '@potion/util';
import Layout from './Layout';

export default class Pack extends Layout {

  static displayName = 'Tree';

  static propTypes = {
    data: PropTypes.object.isRequired,
    includeRoot: PropTypes.bool,
    sum: PropTypes.func,
    size: PropTypes.arrayOf(PropTypes.number),
    tile: PropTypes.func,
    round: PropTypes.bool,
    padding: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    paddingInner: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    paddingOuter: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    paddingTop: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    paddingRight: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    paddingBottom: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    paddingLeft: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  };

  static defaultProps = {
    ...Layout.defaultProps,
    includeRoot: true,
    sum: d => d.value,
  };

  getSchema() {
    return {
      layout: treemap,
      layoutProps: [
        'tile',
        'size',
        'round',
        'padding',
        'paddingInner',
        'paddingOuter',
        'paddingTop',
        'paddingRight',
        'paddingBottom',
        'paddingLeft',
      ],
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
