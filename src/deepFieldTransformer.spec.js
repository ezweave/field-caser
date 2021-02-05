import { toUpper } from 'lodash';
import { deepFieldTransformer } from './deepFieldTransformer';

const jsonWithSnakeCaseFields = require('./__fixtures/jsonWithSnakeCaseFields.json');

describe('deepFieldTransformer', () => {
  it('converts nested field names to using a converter', () => {
    expect(deepFieldTransformer(toUpper)(jsonWithSnakeCaseFields)).toMatchSnapshot();
  });
});