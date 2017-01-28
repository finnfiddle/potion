"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cap = cap;
// convert first letter of word to uppercase
function cap(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}