import isArray from 'lodash/isArray';

// convert first letter of word to uppercase
export function cap(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function mapObject(object, iterator) {
  return (isArray(object) ? object : Object.keys(object)).reduce((acc, key) =>
    Object.assign({}, acc, { [key]: iterator(object[key], key) })
  , {});
}
