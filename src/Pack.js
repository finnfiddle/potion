import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { pack } from 'd3-hierarchy';
import itsSet from 'its-set';
import { TransitionMotion, spring } from 'react-motion';

import { flattenHierarchy, wrapIfOutdated } from './util';

export default class Pack extends Component {

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
    children: PropTypes.func.isRequired,

    // enterDatum
    // exitDatum
    // enterEase
    // updateEase
    // exitEase
  };

  static defaultProps = {
    includeRoot: true,
  };

  constructor() {
    super();
    this.handleWillEnter = this.handleWillEnter.bind(this);
  }

  componentDidMount() {
    if (this.props.animate) {
      this.setState({ });
    }
  }

  getPack() {
    let p = pack();
    [
      'radius',
      'size',
      'padding',
    ].forEach((key) => {
      if (itsSet(this.props[key])) p = p[key](this.props[key]);
    });
    return p;
  }

  handleWillEnter(styleThatWillEnter) {
    console.log(styleThatWillEnter);
    return null;
  }

  renderStatic() {
    const { data, includeRoot, children } = this.props;
    return wrapIfOutdated(
      children(
        flattenHierarchy(this.getPack()(data)).slice(includeRoot ? 0 : 1)
      ),
      'g'
    );
  }

  renderAnimated() {
    const { data, includeRoot, children, enterDatum, exitDatum } = this.props;
    console.log(flattenHierarchy(this.getPack()(data)).slice(includeRoot ? 0 : 1).map(d => ({ key: d.data.key, style: enterDatum(d) })));
    return (
      <TransitionMotion
        defaultStyles={flattenHierarchy(this.getPack()(data)).slice(includeRoot ? 0 : 1).map(d => ({ key: d.data.key, style: enterDatum(d) }))}
        // willEnter={this.handleWillEnter}
        willLeave={exitDatum}
        styles={
          flattenHierarchy(this.getPack()(data)).slice(includeRoot ? 0 : 1).map(d => ({ key: d.data.key, style: d }))
        }
      >
        {interpolatedStyles => {
          console.log(interpolatedStyles);
          return (
            <g>
              {children(interpolatedStyles)}
            </g>
          );
        }}
      </TransitionMotion>
    );
  }

  render() {
    return this.props.animate ? this.renderAnimated() : this.renderStatic();
  }

}
