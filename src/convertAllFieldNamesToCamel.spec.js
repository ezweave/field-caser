import { convertAllFieldNamesToCamel } from './convertAllFieldNamesToCamel';

const jsonWithSnakeCaseFields = require('./__fixtures/jsonWithSnakeCaseFields.json');

const jsonWithKebabCaseFields = require('./__fixtures/jsonWithKebabCaseFields.json');

describe('convertAllFieldNamesToCamel', () => {
  it('converts snake field names to camelcase', () => {
    expect(convertAllFieldNamesToCamel(jsonWithSnakeCaseFields)).toMatchSnapshot();
  });
  it('converts kebab field names to camelcase', () => {
    expect(convertAllFieldNamesToCamel(jsonWithKebabCaseFields)).toMatchSnapshot();
  });
});