import { snakeCase } from 'lodash'
import { deepFieldTransformer } from './deepFieldTransformer'

export const transformAllFieldNamesToSnake = deepFieldTransformer(snakeCase)