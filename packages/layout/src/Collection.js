import PropTypes from 'prop-types';

import Layout from './Layout';
import { isNumber } from '@potion/util';

export default class Collection extends Layout {

  static displayName = 'Collection';

  static propTypes = {
    data: PropTypes.array.isRequired,
    children: PropTypes.func.isRequired,
  };

  getSchema() {
    return {
      selectStylesToTween: d => Object.keys(d).reduce((acc, key) => {
        const result = { ...acc };
        if (isNumber(d[key])) result[key] = d[key];
        return result;
      }, {}),
    };
  }

  getData() {
    return this.props.data;
  }
}
