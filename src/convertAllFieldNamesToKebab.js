import { kebabCase } from 'lodash';
import { deepFieldTransformer } from './deepFieldTransformer';
export const convertAllFieldNamesToKebab = deepFieldTransformer(kebabCase);