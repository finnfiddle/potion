import React, { Children, cloneElement, PropTypes, Component } from 'react';
import { pack } from 'd3-hierarchy';
import itsSet from 'its-set';

import TransitionGroup from './TransitionGroup';
import { flattenHierarchy, isFunction } from './helpers';

export default class Pack extends Component {

  constructor(props) {
    super(props);
    this.displayName = 'Pack';
  }

  getPack() {
    let p = pack();
    [
      'radius',
      'size',
      'padding',
      // 'packSiblings',
      // 'packEnclose',
    ].forEach((key) => {
      if (itsSet(this.props[key])) p = p[key](this.props[key]);
    });
    return p;
  }

  renderChildren() {
    const { data, children, includeRoot } = this.props;

    const packData = this.getPack()((isFunction(data) ? data(this.props) : data));
    const filteredData = flattenHierarchy(packData)
      .slice(includeRoot ? 0 : 1)
      .map(datum => {
        const result = Object.assign({}, datum.data, datum);
        delete result.data;
        delete result.parent;
        return result;
      });

    return filteredData.reduce((acc, datum, index) =>
      acc.concat(Children.map(children, (child, c) =>
        cloneElement(child, {
          datum,
          index,
          data: filteredData,
          key: `${index}_${c}`,
          _key: `${index}_${c}`,
        })
      ))
    , []);
  }

  render() {
    return (
      <TransitionGroup>
        {this.renderChildren()}
      </TransitionGroup>
    );
  }

}

Pack.propTypes = {
  radius: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  size: PropTypes.arrayOf(PropTypes.number),
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  // packSiblings: PropTypes.arrayOf(
  //  PropTypes.shape({ x: PropTypes.number, y: PropTypes.number })
  // ),
  // packEnclose: PropTypes.number,
  data: PropTypes.object.isRequired,
  children: PropTypes.node,
  includeRoot: PropTypes.bool,
};

Pack.defaultProps = {
  includeRoot: true,
};
