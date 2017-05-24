'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStamp = require('react-stamp');

var _reactStamp2 = _interopRequireDefault(_reactStamp);

var _d3Force = require('d3-force');

var _itsSet = require('its-set');

var _itsSet2 = _interopRequireDefault(_itsSet);

var _TransitionGroup = require('./TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _SelectSelfMixin = require('./mixins/SelectSelfMixin');

var _SelectSelfMixin2 = _interopRequireDefault(_SelectSelfMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStamp2.default)(_react2.default).compose(_SelectSelfMixin2.default, {

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

  init: function init() {
    this.forces = this.props.forces;
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.forces = nextProps.forces;
    this.getSimulation();
  },
  getSimulation: function getSimulation() {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
    var _props = this.props,
        nodes = _props.nodes,
        links = _props.links,
        forces = _props.forces;


    this.simulation = (0, _d3Force.forceSimulation)();
    this.simulation.nodes(nodes);

    this.applyForces(forces, this.simulation);

    var graphNodes = this.selectSelf().selectAll('.node').data(this.simulation.nodes());

    var graphLinks = this.selectSelf().selectAll('.link').data(links);

    this.simulation.on('tick', function () {
      graphNodes.attr('cx', function (d) {
        return d.x;
      });
      graphNodes.attr('cy', function (d) {
        return d.y;
      });
      graphLinks.attr('x1', function (d) {
        return d.source.x;
      });
      graphLinks.attr('y1', function (d) {
        return d.source.y;
      });
      graphLinks.attr('x2', function (d) {
        return d.target.x;
      });
      graphLinks.attr('y2', function (d) {
        return d.target.y;
      });
      // graphNodes.attr('r', d => d.r);
    });

    this.simulation.on('end', function () {
      console.log('callback');
      callback();
    });

    this.simulation.restart();
  },
  applyForces: function applyForces(forces, simulation) {
    (0, _keys2.default)(forces).concat((0, _keys2.default)(this.forces)).forEach(function (key) {
      if ((0, _itsSet2.default)(forces[key])) {
        simulation.force(key, forces[key]);
      } else {
        simulation.force(key, null);
      }
    });
  },
  componentDidMount: function componentDidMount(callback) {
    this.getSimulation(callback);
  },
  render: function render() {

    return _react2.default.createElement(
      _TransitionGroup2.default,
      null,
      this.renderChildren()
    );
  },
  renderChildren: function renderChildren() {
    var _props2 = this.props,
        nodes = _props2.nodes,
        node = _props2.node,
        links = _props2.links,
        link = _props2.link;


    return nodes.reduce(function (acc, datum, index) {
      return acc.concat(_react.Children.map(node, function (child) {
        return (0, _react.cloneElement)(child, {
          datum: datum,
          index: index,
          nodes: nodes,
          key: datum.id,
          _key: datum.id,
          className: (node.className || '') + ' node'
        });
      }));
    }, links.reduce(function (acc, datum, index) {
      return acc.concat(_react.Children.map(link, function (child) {
        return (0, _react.cloneElement)(child, {
          datum: datum,
          index: index,
          links: links,
          key: datum.index || index,
          _key: datum.index || index,
          className: (link.className || '') + ' link'
        });
      }));
    }, []));
  }
});