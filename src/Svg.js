import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import isEqual from 'deep-equal';

import { TWEENABLE_SVG_PRESENTATION_ATTRS } from './constants';
import TransitionGroup from './TransitionGroup';
import Element from './Element';

export default class Svg extends Element {

  static displayName = 'Svg';

  static defaultProps = {
    ...Element.defaultProps,
    patterns: [],
    component: 'svg',
    groupComponent: 'g',
  }

  static propTypes = {
    patterns: PropTypes.array,
  }

  componentDidMount() {
    this.addPatterns(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.props.patterns, nextProps.patterns)) {
      this.addPatterns(nextProps);
    }
    super.componentWillReceiveProps(nextProps);
  }

  getAttrNames() {
    return ['width', 'height'].concat(TWEENABLE_SVG_PRESENTATION_ATTRS);
  }

  getPrivatePropNames() {
    return ['patterns'];
  }

  addPatterns(props) {
    console.log('add patterns', props.patterns);
    // const selection = this.selectSelf();
    // props.patterns.forEach(pattern => {
    //   selection.call(pattern);
    // });
  }

  render() {
    return this.state.el ? cloneElement(this.state.el, {
      children: (
        <TransitionGroup component={this.props.groupComponent}>
          {this.props.children}
        </TransitionGroup>
      ),
    }) : null;
  }

}
