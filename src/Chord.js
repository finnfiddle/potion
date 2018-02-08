import PropTypes from 'prop-types';
import { chord } from 'd3-chord';

import Layout from './Layout';

export default class Chord extends Layout {

  static displayName = 'Chord';

  static propTypes = {
    ...Layout.propTypes,
    padAngle: PropTypes.func,
    sortGroups: PropTypes.func,
    sortSubgroups: PropTypes.func,
    sortChords: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    data: PropTypes.array,
  };

  getSchema() {
    return {
      layout: chord,
      layoutProps: [
        'padAngle',
        'sortGroups',
        'sortSubgroups',
        'sortChords',
      ],
      selectStylesToTween: d => ({
        sourceStartAngle: d.source.startAngle,
        sourceEndAngle: d.source.endAngle,
        sourceValue: d.source.value,
        targetStartAngle: d.target.startAngle,
        targetEndAngle: d.target.endAngle,
        targetValue: d.target.value,
      }),
    };
  }

  getData() {
    return this.getLayout()(this.props.data);
  }

  getAnimatedData() {
    return this.getData().map(d => ({
      key: `${d.source.index}_${d.source.subindex}_${d.target.index}_${d.target.subindex}`,
      data: d,
      style: this.schema.selectStylesToTween(d),
    }));
  }

  transformInterpolatedStyles(data) {
    return data.map(d => {
      const { key, data, style } = d;
      return {
        key,
        ...data,
        source: {
          ...data.source,
          startAngle: style.sourceStartAngle,
          endAngle: style.sourceEndAngle,
          value: style.sourceValue,
        },
        target: {
          ...data.target,
          startAngle: style.targetStartAngle,
          endAngle: style.targetEndAngle,
          value: style.targetValue,
        },
      };
    });
  }
}
