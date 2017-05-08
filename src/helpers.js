import isArray from 'lodash/isArray';
import isObject from 'lodash/isObject';
import itsSet from 'its-set';

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
