import { kebabCase } from 'lodash'
import { deepFieldTransformer } from './deepFieldTransformer'

export const transformAllFieldNamesToKebab: <T>(source: unknown) => T = deepFieldTransformer(kebabCase)