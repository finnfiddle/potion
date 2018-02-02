import PropTypes from 'prop-types';
import { pack, hierarchy } from 'd3-hierarchy';
import itsSet from 'its-set';
import { spring } from 'react-motion';

import { flattenHierarchy } from './util';
import Layout from './Layout';

const unpackHierarchyList = (hierarchy) =>
  hierarchy.map(d => ({ key: d.data.key, data: d, style: { r: d.r, x: d.x, y: d.y } }));

export default class Pack extends Layout {

  static displayName = 'Pack';

  static propTypes = {
    radius: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    size: PropTypes.arrayOf(PropTypes.number),
    padding: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    data: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.func,
    ]),
    includeRoot: PropTypes.bool,
    sum: PropTypes.func,
  };

  static defaultProps = {
    ...Layout.defaultProps,
    includeRoot: true,
    sum: d => d.value,
  };

  getAnimatedData() {
    return unpackHierarchyList(this.getFlattenedHierarchy());
  }

  getStaticData() {
    return this.getFlattenedHierarchy();
  }

  getPack(customProps) {
    const props = customProps || this.props;
    let p = pack();
    [
      'radius',
      'size',
      'padding',
    ].forEach((key) => {
      if (itsSet(props[key])) p = p[key](props[key]);
    });
    return p;
  }

  getFlattenedHierarchy() {
    const { data, sum, includeRoot } = this.props;
    return flattenHierarchy(
      this.getPack(this.props)(
        hierarchy(data).sum(sum)
      )
    )
    .slice(includeRoot ? 0 : 1);
  }
}
