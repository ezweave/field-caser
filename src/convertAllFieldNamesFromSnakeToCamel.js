import { camelCase } from 'lodash';
import { deepFieldTransformer } from './deepFieldTransformer';
export const convertAllFieldNamesFromSnakeToCamel = deepFieldTransformer(camelCase);