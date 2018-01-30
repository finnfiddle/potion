import React, { Children, cloneElement, Component } from 'react';
import PropTypes from 'prop-types';
import { pack as d3Pack } from 'd3-hierarchy';
import itsSet from 'its-set';
import isEqual from 'deep-equal';

import TransitionGroup from './TransitionGroup';
import { flattenHierarchy, isFunction } from './util';

export default class Pack extends Component {
  
  static defaultProps = {
    includeRoot: true,
    component: 'g',
  }

  static propTypes = {
    radius: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    size: PropTypes.arrayOf(PropTypes.number),
    padding: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    // packSiblings: PropTypes.arrayOf(
    //  PropTypes.shape({ x: PropTypes.number, y: PropTypes.number })
    // ),
    // packEnclose: PropTypes.number,
    data: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.func,
    ]),
    children: PropTypes.node,
    includeRoot: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  }

  constructor(props) {
    super(props);
    this.displayName = 'Pack';
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.calculateData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.radius !== nextProps.radius ||
      !isEqual(this.props.size, nextProps.size) ||
      this.props.padding !== nextProps.padding ||
      !isEqual(this.props.data.data, nextProps.data.data)
    ) {
      this.calculateData(nextProps);
    }
  }

  calculatePack(props) {
    let pack = d3Pack();
    [
      'radius',
      'size',
      'padding',
      // 'packSiblings',
      // 'packEnclose',
    ].forEach((key) => {
      if (itsSet(props[key])) pack = pack[key](props[key]);
    });
    return pack;
  }

  calculateData(props) {
    const { data, includeRoot } = props;

    const packData = this.calculatePack(props)(isFunction(data) ? data(props) : data);
    const calculatedData = flattenHierarchy(packData)
      .slice(includeRoot ? 0 : 1)
      .map(datum => {
        console.log({ datum });
        const result = Object.assign({}, datum.data, datum);
        delete result.data;
        delete result.parent;
        return result;
      });
    this.setState({ data: calculatedData });
    return calculatedData;
  }

  renderChildren() {
    const { children } = this.props;
    return this.state.data.reduce((acc, datum, index) =>
      acc.concat(Children.map(children, (child, c) =>
        cloneElement(child, {
          datum,
          index,
          data: this.state.data,
          key: `${index}_${c}`,
          _key: `${index}_${c}`,
        })
      ))
    , []);
  }

  render() {
    return (
      <TransitionGroup component={this.props.component}>
        {this.renderChildren()}
      </TransitionGroup>
    );
  }
}
