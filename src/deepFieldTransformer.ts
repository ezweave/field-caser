import { isArray, isObject, map, partialRight, reduce } from 'lodash'
/**
 * This version of lodash/fp seems to muck up the arguments for reduce.  It does
 * not pass the key.
 *
 * @param identitee
 * @returns {*}
 */

const reduceFP = (func, collector) => partialRight(reduce, func, collector)

export interface StringTransformer {
  (string): string
}

export interface DeepFieldTransformer<T, O> {
  (stringTransformer: StringTransformer): (T) => O
}

export const deepFieldTransformer: DeepFieldTransformer<{}, {}> = stringTransformer => reduceFP((result, value, key) => ({ ...result,
  [stringTransformer(key)]: isObject(value) ? deepFieldTransformer(stringTransformer)(value) : isArray(value) ? map(value, deepFieldTransformer(stringTransformer)) : value
}), {})