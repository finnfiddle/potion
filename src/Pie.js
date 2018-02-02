import PropTypes from 'prop-types';
import { pie } from 'd3-shape';
import itsSet from 'its-set';

import Layout from './Layout';

const unpackHierarchyList = (hierarchy) =>
  hierarchy.map(d => ({
    key: d.data.key,
    data: d,
    style: {
      startAngle: d.startAngle,
      endAngle: d.endAngle,
    },
  }));

export default class Pie extends Layout {

  static propTypes = {
    ...Layout.propTypes,
    value: PropTypes.func,
    sort: PropTypes.func,
    sortValues: PropTypes.func,
    startAngle: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    endAngle: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    padAngle: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    data: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.func,
    ]),
    id: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.displayName = 'Pie';
  }

  getData() {
    return this.getPie()(this.props.data);
  }

  getAnimatedData() {
    return unpackHierarchyList(this.getData());
  }

  getStaticData() {
    return this.getData();
  }

  getPie() {
    let p = pie();
    [
      'value',
      'sort',
      'sortValues',
      'startAngle',
      'endAngle',
      'padAngle',
    ].forEach((key) => {
      if (itsSet(this.props[key])) p = p[key](this.props[key]);
    });
    return p;
  }
}
