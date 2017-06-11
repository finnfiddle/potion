import isArray from 'lodash.isarray';
import intersection from 'lodash.intersection';
import itsSet from 'its-set';
import without from 'lodash.without';

import { MOUSE_EVENTS } from './constants';

// convert first letter of word to uppercase
export function cap(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

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

export function radiansToDegrees(radians) {
  return radians * 180 / Math.PI;
}

export function bindMouseEvents(props) {
  const setProps = intersection(Object.keys(props), MOUSE_EVENTS);
  return setProps.reduce((acc, key) =>
    Object.assign({}, acc, { [key]: () => props[key](props) })
  , {});
}

export function filter(array, whiteList = [], blackList = []) {
  return whiteList.length ?
    without(intersection(array, whiteList), blackList) :
    without(array, blackList);
}

export default {
  cap,
  mapObject,
  flattenHierarchy,
  radiansToDegrees,
};
