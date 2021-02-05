import { isArray, isObject, map, partialRight, reduce } from 'lodash';
/**
 * This version of lodash/fp seems to muck up the arguments for reduce.  It does
 * not pass the key.
 *
 * @param identitee
 * @returns {*}
 */

const reduceFP = (func, collector) => partialRight(reduce, func, collector);

export const deepFieldTransformer = fieldConverter => reduceFP((result, value, key) => ({ ...result,
  [fieldConverter(key)]: isObject(value) ? deepFieldTransformer(fieldConverter)(value) : isArray(value) ? map(value, deepFieldTransformer(fieldConverter)) : value
}), {});