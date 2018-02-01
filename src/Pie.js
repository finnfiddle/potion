import React, { Children, cloneElement, Component } from 'react';
import PropTypes from 'prop-types';
import { pie } from 'd3-shape';
import itsSet from 'its-set';

import TransitionGroup from './TransitionGroup';
import { isFunction } from './util';

export default class Pie extends Component {

  static displayName = 'Pie';

  static propTypes = {
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
    singularChildren: PropTypes.node,
    children: PropTypes.node,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
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

  renderSingularChildren(pieData) {
    const { singularChildren } = this.props;
    return Children.map(singularChildren, child =>
      cloneElement(child, { data: pieData })
    );
  }

  renderChildren(pieData) {
    const { children, id } = this.props;
    // TODO: throw error if non unique ids
    return pieData.reduce((acc, datum, index) =>
      acc.concat(Children.map(children, child => {
        const key = id(datum.data);
        return cloneElement(child, {
          datum,
          index,
          data: pieData,
          key,
          _key: key,
        });
      }))
    , []);
  }

  render() {
    const { data, sort } = this.props;
    let pieData = this.getPie()((isFunction(data) ? data(this.props) : data));
    if (itsSet(sort)) pieData = pieData.sort((a, b) => sort(a.data, b.data));

    return (
      <TransitionGroup component={this.props.component}>
        {this.renderChildren(pieData)}
        {this.renderSingularChildren(pieData)}
      </TransitionGroup>
    );
  }

}
