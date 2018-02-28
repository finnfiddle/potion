'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Hierarchy = require('d3-hierarchy');

var _util = require('@potion/util');

var _Layout2 = require('./Layout');

var _Layout3 = _interopRequireDefault(_Layout2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tree = function (_Layout) {
  _inherits(Tree, _Layout);

  function Tree() {
    _classCallCheck(this, Tree);

    return _possibleConstructorReturn(this, (Tree.__proto__ || Object.getPrototypeOf(Tree)).apply(this, arguments));
  }

  _createClass(Tree, [{
    key: 'getSchema',
    value: function getSchema() {
      return {
        layout: _d3Hierarchy.tree,
        layoutProps: ['nodeSize', 'size', 'separation'],
        selectStylesToTween: function selectStylesToTween(d) {
          return {
            x: d.x,
            y: d.y
          };
        }
      };
    }
  }, {
    key: 'getData',
    value: function getData() {
      var _props = this.props,
          data = _props.data,
          sum = _props.sum,
          includeRoot = _props.includeRoot;

      return (0, _util.flattenHierarchy)(this.getLayout()((0, _d3Hierarchy.hierarchy)(data).sum(sum))).slice(includeRoot ? 0 : 1);
    }

    // getData() {
    //   const { data, sum, includeRoot } = this.props;
    //   return this.getLayout()(
    //     hierarchy(data).sum(sum)
    //   )
    //   .nodes()
    //   .slice(includeRoot ? 0 : 1);
    // }

  }, {
    key: 'renderChildren',
    value: function renderChildren(data) {
      return _react2.default.createElement(
        this.props.component,
        null,
        this.props.children(data.nodes()),
        this.props.links(data.links())
      );
    }
  }]);

  return Tree;
}(_Layout3.default);

Tree.displayName = 'Tree';
Tree.propTypes = {
  separation: _propTypes2.default.number,
  size: _propTypes2.default.arrayOf(_propTypes2.default.number),
  nodeSize: _propTypes2.default.number,
  data: _propTypes2.default.object.isRequired,
  includeRoot: _propTypes2.default.bool,
  sum: _propTypes2.default.func,
  links: _propTypes2.default.func,
  children: _propTypes2.default.func
};
Tree.defaultProps = _extends({}, _Layout3.default.defaultProps, {
  includeRoot: true,
  sum: function sum(d) {
    return d.value;
  }
});
exports.default = Tree;