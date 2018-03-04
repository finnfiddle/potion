// import React, { Children, cloneElement } from 'react';
// import PropTypes from 'prop-types';
// import { forceSimulation } from 'd3-force';
// import itsSet from 'its-set';

// import { isObject } from '@potion/util';
// import TransitionGroup from './TransitionGroup';
// import SelectSelf from './mixins/SelectSelf';

// export default class ForceSimulation extends SelectSelf {

//   constructor(props) {
//     super(props);
//     this.displayName = 'ForceSimulation';
//     this.state = {};
//     this.forces = this.props.forces;
//   }

//   componentWillReceiveProps(nextProps) {
//     this.forces = nextProps.forces;
//   }

//   componentDidUpdate() {
//     setTimeout(() => {
//       this.getSimulation();
//     });
//   }

//   getSimulation(callback = () => {}) {
//     const {
//       nodes,
//       links,
//       forces,
//       onTick,
//       onEnd,
//       running,
//     } = this.props;

//     this.simulation = forceSimulation();
//     this.simulation.nodes(nodes);

//     [
//       'alpha',
//       'alphaMin',
//       'alphaDecay',
//       'alphaTarget',
//       'velocityDecay',
//     ].forEach(key => {
//       if (itsSet(this.props[key])) this.simulation[key](this.props[key]);
//     });

//     this.applyForces(forces, this.simulation);

//     const graphNodes = this.selectSelf()
//       .selectAll('.node')
//       .data(this.simulation.nodes());

//     const graphLinks = this.selectSelf()
//       .selectAll('.link')
//       .data(links);

//     this.simulation.on('tick', () => {
//       onTick({ nodes: this.simulation.nodes(), links });
//       graphNodes.attr('cx', d => d.x);
//       graphNodes.attr('cy', d => d.y);
//       graphLinks.attr('x1', d => d.source.x);
//       graphLinks.attr('y1', d => d.source.y);
//       graphLinks.attr('x2', d => d.target.x);
//       graphLinks.attr('y2', d => d.target.y);
//       // graphNodes.attr('r', d => d.r);
//     });

//     this.simulation.on('end', () => {
//       onEnd({ nodes: this.simulation.nodes(), links });
//       callback();
//     });

//     if (!running) {
//       this.simulation.stop();
//     }
//   }

//   applyForces(forces, simulation) {
//     Object
//       .keys(forces)
//       .concat(
//         Object.keys(this.forces)
//       )
//       .forEach(key => {
//         if (itsSet(forces[key])) {
//           simulation.force(key, forces[key]);
//         }
//         else {
//           simulation.force(key, null);
//         }
//       });
//   }

//   componentDidMount(callback) {
//     this.getSimulation(callback);
//   }

//   componentWillUnmount() {
//     this.simulation.stop();
//   }

//   render() {
//     return (
//       <TransitionGroup>
//         {this.renderChildren()}
//       </TransitionGroup>
//     );
//   }

//   renderChildren() {
//     const { nodes, node, links, link, id } = this.props;
//     return nodes.reduce((acc, datum, index) => {
//       const key = id(datum);
//       return acc.concat(Children.map(node, child =>
//         cloneElement(child, {
//           datum,
//           index,
//           data: nodes,
//           key,
//           _key: key,
//           className: `${node.className || ''} node`,
//         })
//       ));
//     }, links.reduce((acc, datum, index) => {
//       const key = `${datum.source.id}_${datum.target.id}`;
//       return acc.concat(Children.map(link, child =>
//         cloneElement(child, {
//           datum,
//           index,
//           data: links,
//           key,
//           _key: key,
//           className: `${link.className || ''} link`,
//         })
//       ));
//     }, []));
//   }

//   normalizeLinks(links) {
//     return isObject(links[links.length - 1].source) ?
//       links :
//       links.map(link => ({
//         source: {
//           id: link.source,
//           x: 0,
//           y: 0,
//           vx: 0,
//           vy: 0,
//         },
//         target: {
//           id: link.target,
//           x: 0,
//           y: 0,
//           vx: 0,
//           vy: 0,
//         },
//       }));
//   }

//   stop() {
//     this.simulation.stop();
//   }

//   restart() {
//     this.simulation.restart();
//   }

//   tick() {
//     this.simulation.tick();
//   }
// }

// ForceSimulation.propTypes = {
//   nodes: PropTypes.array.isRequired,
//   links: PropTypes.array,
//   forces: PropTypes.object,
//   node: PropTypes.node.isRequired,
//   link: PropTypes.node,
//   alpha: PropTypes.number,
//   alphaMin: PropTypes.number,
//   alphaDecay: PropTypes.number,
//   alphaTarget: PropTypes.number,
//   velocityDecay: PropTypes.number,
//   onTick: PropTypes.func,
//   onEnd: PropTypes.func,
//   running: PropTypes.bool,
// };

// ForceSimulation.defaultProps = {
//   onTick: () => {},
//   onEnd: () => {},
//   id: datum => datum.index,
//   nodes: [],
//   links: [],
//   forces: {},
//   node: null,
//   link: null,
//   running: true,
// };
"use strict";