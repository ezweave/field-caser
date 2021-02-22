import { snakeCase } from 'lodash'
import { deepFieldTransformer } from './deepFieldTransformer'

export const transformAllFieldNamesToSnake: <T>(source: unknown) => T = deepFieldTransformer(snakeCase)