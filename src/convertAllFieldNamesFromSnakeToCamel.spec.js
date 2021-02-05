import { convertAllFieldNamesFromSnakeToCamel } from './convertAllFieldNamesFromSnakeToCamel';

const jsonWithSnakeCaseFields = require('./__fixtures/jsonWithSnakeCaseFields.json');

describe('convertAllFieldNamesFromSnakeToCamel', () => {
  it('converts nested field names to camelcase', () => {
    expect(convertAllFieldNamesFromSnakeToCamel(jsonWithSnakeCaseFields)).toMatchSnapshot();
  });
});