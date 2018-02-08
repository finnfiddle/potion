import PropTypes from 'prop-types';
import { pie } from 'd3-shape';

import Layout from './Layout';

export default class Pie extends Layout {

  static displayName = 'Pie';

  static propTypes = {
    ...Layout.propTypes,
    value: PropTypes.func,
    sort: PropTypes.func,
    sortValues: PropTypes.func,
    startAngle: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    endAngle: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    padAngle: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    data: PropTypes.array.isRequired,
    id: PropTypes.func,
  };

  getSchema() {
    return {
      layout: pie,
      layoutProps: [
        'value',
        'sort',
        'sortValues',
        'startAngle',
        'endAngle',
        'padAngle',
      ],
      selectStylesToTween: d => ({
        startAngle: d.startAngle,
        endAngle: d.endAngle,
      }),
    };
  }

  getData() {
    return this.getLayout()(this.props.data);
  }
}
