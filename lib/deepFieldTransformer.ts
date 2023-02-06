import { isArray, isObject, map, reduce } from 'lodash'

export type StringTransformer = (string) => string

export const deepFieldTransformer = <T extends any>(
  stringTransformer: StringTransformer
) => (
  source: any
) => {
    if (isObject(source)) {
      return reduce(source, (result, value, key) => ({
        ...result,
        [stringTransformer(key)]: isArray(value)
          ? map(value, (entry) => deepFieldTransformer(stringTransformer)(entry))
          : isObject(value)
            ? deepFieldTransformer(stringTransformer)(value)
            : value,
      }),
        {})
    }
    if (isArray(source)) {
      return map(source, deepFieldTransformer(stringTransformer))
    }
    return source as unknown as T
  }
