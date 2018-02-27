import React, { version } from 'react';
import itsSet from 'its-set';
import intersection from 'intersect';

import { MOUSE_EVENTS } from './constants';

export const constants = { MOUSE_EVENTS };

// convert first letter of word to uppercase
export function cap(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export const isArray = val => Array.isArray(val);

export function mapObject(object, iterator) {
  return (isArray(object) ? object : Object.keys(object)).reduce((acc, key) =>
    Object.assign({}, acc, { [key]: iterator(object[key], key) })
  , {});
}

export function flattenHierarchy(object) {
  let result = [object];
  if (itsSet(object.children)) {
    result = result.concat(
      object.children.reduce((acc, child) =>
        acc.concat(flattenHierarchy(child))
      , [])
    );
  }
  return result;
}

// export function mapHierarchy(object, mapper, isRoot = true) {
//   const result = isRoot ? { ...object } : {
//     ...object,
//     ...mapper(object),
//   };
//   if (object.children) {
//     result.children = object.children.map(child => mapHierarchy(child, mapper, false));
//   }
//   return result;
// }

export function radiansToDegrees(radians) {
  return radians * 180 / Math.PI;
}

export function bindMouseEvents(props) {
  const setProps = intersection(Object.keys(props), MOUSE_EVENTS);
  return setProps.reduce((acc, key) =>
    Object.assign({}, acc, { [key]: () => props[key](props) })
  , {});
}

export const isString = val => typeof val === 'string';

export const isNumber = val => typeof val === 'number';

export const isFunction = val => typeof val === 'function';

export const isObject = val => ((typeof val === 'object') && (val !== null));

export const pick = (obj, keys) => {
  const result = {};
  keys.forEach(k => {
    result[k] = obj[k];
  });
  return result;
};

export const omit = (obj, keys) => {
  const result = Object.assign({}, obj);
  keys.forEach(key => delete result[key]);
  return result;
};

const getTranformation = meta => ({
  matrix: ([a, b, c, d, e, f]) => `matrix(${a}, ${b}, ${c}, ${d}, ${e}, ${f})`,
  translate: ([x, y]) => `translate(${x}${y ? `, ${y}` : ''})`,
  scale: ([x, y]) => `scale(${x}${y ? `, ${y}` : ''})`,
  rotate: ([a, x, y]) => `rotate(${a}${x ? `, ${x}` : ''}${y ? `, ${y}` : ''})`,
  skewX: ([a]) => `skewX(${a})`,
  skewy: ([a]) => `skewy(${a})`,
})[meta.type](meta.value);

export const getTransformationsFromArray = arr =>
  arr.reduce((acc, meta) =>
    `${acc} ${getTranformation(meta)}`
  , '');

export const getTransformationsFromObject = obj =>
  Object.keys(obj).reduce((acc, type) =>
    `${acc} ${getTranformation({ type, value: obj[type] })}`
  , '');

export const wrapIfOutdated = (inner, outer) => {
  const the = { outer };
  return version < 16 ? (
    <the.outer children={inner} />
  ) : inner;
};

export default {
  cap,
  mapObject,
  flattenHierarchy,
  radiansToDegrees,
};
