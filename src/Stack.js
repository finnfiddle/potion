import PropTypes from 'prop-types';
import { stack } from 'd3-shape';

import Layout from './Layout';

export default class Stack extends Layout {

  static displayName = 'Stack';

  static propTypes = {
    data: PropTypes.array.isRequired,
    keys: PropTypes.array,
    value: PropTypes.func,
    order: PropTypes.array,
    offset: PropTypes.func,
  };

  static defaultProps = {
    ...Layout.defaultProps,
  };

  getSchema() {
    return {
      layout: stack,
      layoutProps: [
        'keys',
        'value',
        'order',
        'offset',
      ],
      selectStylesToTween: d => d.reduce((acc, child, index) => ({
        ...acc,
        [`${index}_0`]: child[0],
        [`${index}_1`]: child[1],
      }), {}),
    };
  }

  transformInterpolatedStyles(data) {
    return data.map(d => {
      const { data, style } = d;
      const result = [...data];
      Object.keys(style).forEach(key => {
        const [row, col] = key.split('_');
        result[row][col] = style[key];
      });
      return result;
    });
  }

  getData() {
    return this.getLayout()(this.props.data);
  }
}
