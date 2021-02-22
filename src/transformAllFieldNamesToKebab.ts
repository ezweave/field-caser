import { kebabCase } from 'lodash'
import { deepFieldTransformer } from './deepFieldTransformer'

export const transformAllFieldNamesToKebab = deepFieldTransformer(kebabCase)