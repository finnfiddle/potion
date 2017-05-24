import React, { Children, cloneElement } from 'react';
import stamp from 'react-stamp';
import { forceSimulation } from 'd3-force';
import itsSet from 'its-set';

import TransitionGroup from './TransitionGroup';
import SelectSelfMixin from './mixins/SelectSelfMixin';

export default stamp(React).compose(SelectSelfMixin, {

  displayName: 'ForceSimulation',

  propTypes: {
    // nodes
    // links
    // forces
    // node
    // link
    // alpha
    // alphaMin
    // alphaDecay
    // alphaTarget
    // velocityDecay
    // onTick
    // onEnd
    // running
  },

  defaultProps: {},

  state: {},

  init() {
    this.forces = this.props.forces;
  },

  componentWillReceiveProps(nextProps) {
    this.forces = nextProps.forces;
    this.getSimulation();
  },

  getSimulation(callback = () => {}) {
    const {
      nodes,
      links,
      forces,
      // node,
      // link,
      // alpha,
      // alphaMin,
      // alphaDecay,
      // alphaTarget,
      // velocityDecay,
      // onTick,
      // onEnd,
      // running,
    } = this.props;

    this.simulation = forceSimulation();
    this.simulation.nodes(nodes);

    this.applyForces(forces, this.simulation);

    const graphNodes = this.selectSelf()
      .selectAll('.node')
      .data(this.simulation.nodes());

    const graphLinks = this.selectSelf()
      .selectAll('.link')
      .data(links);

    this.simulation.on('tick', () => {
      graphNodes.attr('cx', d => d.x);
      graphNodes.attr('cy', d => d.y);
      graphLinks.attr('x1', d => d.source.x);
      graphLinks.attr('y1', d => d.source.y);
      graphLinks.attr('x2', d => d.target.x);
      graphLinks.attr('y2', d => d.target.y);
      // graphNodes.attr('r', d => d.r);
    });

    this.simulation.on('end', () => {
      console.log('callback');
      callback();
    });

    this.simulation.restart();
  },

  applyForces(forces, simulation) {
    Object
      .keys(forces)
      .concat(
        Object.keys(this.forces)
      )
      .forEach(key => {
        if (itsSet(forces[key])) {
          simulation.force(key, forces[key]);
        }
        else {
          simulation.force(key, null);
        }
      });
  },

  componentDidMount(callback) {
    this.getSimulation(callback);
  },

  render() {

    return (
      <TransitionGroup>
        {this.renderChildren()}
      </TransitionGroup>
    );
  },

  renderChildren() {
    const { nodes, node, links, link } = this.props;

    return nodes.reduce((acc, datum, index) =>
      acc.concat(Children.map(node, child =>
        cloneElement(child, {
          datum,
          index,
          nodes,
          key: datum.id,
          _key: datum.id,
          className: `${node.className || ''} node`,
        })
      ))
    , links.reduce((acc, datum, index) =>
      acc.concat(Children.map(link, child =>
        cloneElement(child, {
          datum,
          index,
          links,
          key: datum.index || index,
          _key: datum.index || index,
          className: `${link.className || ''} link`,
        })
      ))
    , []));
  },

});
