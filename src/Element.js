import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { omit, isArray, getTransformationsFromArray, getTransformationsFromObject } from './util';

export default class Element extends Component {

  static propTypes = {
    children: PropTypes.node,
    transform: PropTypes.object,
  }

  static defaultProps = {
    transform: {},
  }

  constructor() {
    super();
    this.schema = this.getSchema();
    this.privateProps = Object.keys(this.schema)
      .reduce((acc, key) =>
        acc.concat(this.schema[key].inputs)
      , [])
      .concat(['component']);
  }

  getSchema() {
    return {};
  }

  getDerivedAttrs() {
    return Object.keys(this.schema).reduce((acc, key) => ({
      ...acc,
      [key]: this.schema[key].calculation(),
    }), {});
  }

  getTransformations() {
    const { transform } = this.props;
    if (!transform) return undefined;
    return isArray(transform) ?
      getTransformationsFromArray(transform) :
      getTransformationsFromObject(transform);
  }

  render() {
    return (
      <this.props.component
        {...this.getDerivedAttrs()}
        {...omit(this.props, this.privateProps)}
        transform={this.getTransformations()}
      >
        {this.props.children}
      </this.props.component>
    );
  }
}
