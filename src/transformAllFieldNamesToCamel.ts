import { camelCase } from 'lodash'
import { deepFieldTransformer } from './deepFieldTransformer'

export const transformAllFieldNamesToCamel = deepFieldTransformer(camelCase)