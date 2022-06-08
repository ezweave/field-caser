import { camelCase } from 'lodash'
import { deepFieldTransformer } from './deepFieldTransformer'

export const transformAllFieldNamesToCamel: <T>(source: unknown) => T = deepFieldTransformer(camelCase)
