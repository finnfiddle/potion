'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.cap = cap;
exports.mapObject = mapObject;

var _isArray = require('lodash/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// convert first letter of word to uppercase
function cap(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function mapObject(object, iterator) {
  return ((0, _isArray2.default)(object) ? object : (0, _keys2.default)(object)).reduce(function (acc, key) {
    return (0, _assign2.default)({}, acc, (0, _defineProperty3.default)({}, key, iterator(object[key], key)));
  }, {});
}