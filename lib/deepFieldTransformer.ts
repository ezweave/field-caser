import { isArray, isObject, map, partialRight, reduce } from 'lodash'
/**
 * This version of lodash/fp seems to muck up the arguments for reduce.  It does
 * not pass the key.
 *
 * @param identitee
 * @returns {*}
 */

const reduceFP = (func, collector) => partialRight(reduce, func, collector)

export type StringTransformer = (string) => string

export type DeepFieldTransformer = <T>(stringTransformer: StringTransformer) => (source: unknown) => T

export const deepFieldTransformer: DeepFieldTransformer = (stringTransformer) =>
  reduceFP(
    (result, value, key) => ({
      ...result,
      [stringTransformer(key)]: isArray(value)
        ? map(value, (entry) => deepFieldTransformer(stringTransformer)(entry))
        : isObject(value)
        ? deepFieldTransformer(stringTransformer)(value)
        : value,
    }),
    {}
  )
