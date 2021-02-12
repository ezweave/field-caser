import { snakeCase } from 'lodash';
import { deepFieldTransformer } from './deepFieldTransformer';
export const convertAllFieldNamesFromCamelToSnake = deepFieldTransformer(snakeCase);