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

var _lodash = require('lodash.isobject');

var _lodash2 = _interopRequireDefault(_lodash);

var _TransitionGroup = require('./TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _SelectSelfMixin = require('./mixins/SelectSelfMixin');

var _SelectSelfMixin2 = _interopRequireDefault(_SelectSelfMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStamp2.default)(_react2.default).compose(_SelectSelfMixin2.default, {

  displayName: 'ForceSimulation',

  propTypes: {
    nodes: _react.PropTypes.array.isRequired,
    links: _react.PropTypes.array,
    forces: _react.PropTypes.object,
    node: _react.PropTypes.node.isRequired,
    link: _react.PropTypes.node,
    alpha: _react.PropTypes.number,
    alphaMin: _react.PropTypes.number,
    alphaDecay: _react.PropTypes.number,
    alphaTarget: _react.PropTypes.number,
    velocityDecay: _react.PropTypes.number,
    onTick: _react.PropTypes.func,
    onEnd: _react.PropTypes.func,
    running: _react.PropTypes.bool
  },

  defaultProps: {
    onTick: function onTick() {},
    onEnd: function onEnd() {},
    id: function id(datum) {
      return datum.index;
    },
    nodes: [],
    links: [],
    forces: {},
    node: null,
    link: null,
    running: true
  },

  state: {},

  init: function init() {
    this.forces = this.props.forces;
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.forces = nextProps.forces;
  },
  componentDidUpdate: function componentDidUpdate() {
    var _this = this;

    setTimeout(function () {
      _this.getSimulation();
    });
  },
  getSimulation: function getSimulation() {
    var _this2 = this;

    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
    var _props = this.props,
        nodes = _props.nodes,
        links = _props.links,
        forces = _props.forces,
        onTick = _props.onTick,
        onEnd = _props.onEnd,
        running = _props.running;


    this.simulation = (0, _d3Force.forceSimulation)();
    this.simulation.nodes(nodes);

    ['alpha', 'alphaMin', 'alphaDecay', 'alphaTarget', 'velocityDecay'].forEach(function (key) {
      if ((0, _itsSet2.default)(_this2.props[key])) _this2.simulation[key](_this2.props[key]);
    });

    this.applyForces(forces, this.simulation);

    var graphNodes = this.selectSelf().selectAll('.node').data(this.simulation.nodes());

    var graphLinks = this.selectSelf().selectAll('.link').data(links);

    this.simulation.on('tick', function () {
      onTick({ nodes: _this2.simulation.nodes(), links: links });
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
      onEnd({ nodes: _this2.simulation.nodes(), links: links });
      callback();
    });

    if (!running) {
      this.simulation.stop();
    }
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
  componentWillUnmount: function componentWillUnmount() {
    this.simulation.stop();
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
        link = _props2.link,
        id = _props2.id;

    return nodes.reduce(function (acc, datum, index) {
      var key = id(datum);
      return acc.concat(_react.Children.map(node, function (child) {
        return (0, _react.cloneElement)(child, {
          datum: datum,
          index: index,
          data: nodes,
          key: key,
          _key: key,
          className: (node.className || '') + ' node'
        });
      }));
    }, links.reduce(function (acc, datum, index) {
      var key = datum.source.id + '_' + datum.target.id;
      return acc.concat(_react.Children.map(link, function (child) {
        return (0, _react.cloneElement)(child, {
          datum: datum,
          index: index,
          data: links,
          key: key,
          _key: key,
          className: (link.className || '') + ' link'
        });
      }));
    }, []));
  },
  normalizeLinks: function normalizeLinks(links) {
    return (0, _lodash2.default)(links[links.length - 1].source) ? links : links.map(function (link) {
      return {
        source: {
          id: link.source,
          x: 0,
          y: 0,
          vx: 0,
          vy: 0
        },
        target: {
          id: link.target,
          x: 0,
          y: 0,
          vx: 0,
          vy: 0
        }
      };
    });
  },
  stop: function stop() {
    this.simulation.stop();
  },
  restart: function restart() {
    this.simulation.restart();
  },
  tick: function tick() {
    this.simulation.tick();
  }
});