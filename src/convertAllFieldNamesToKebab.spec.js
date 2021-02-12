import { convertAllFieldNamesToKebab } from './convertAllFieldNamesToKebab';

const jsonWithCamelCaseFields = require('./__fixtures/jsonWithCamelCaseFields.json');

const jsonWithSnakeCaseFields = require('./__fixtures/jsonWithSnakeCaseFields.json');

describe('convertAllFieldNamesToKebab', () => {
  it('converts camel field names to kebab', () => {
    expect(convertAllFieldNamesToKebab(jsonWithCamelCaseFields)).toMatchSnapshot();
  });
  it('converts snake field names to kebab', () => {
    expect(convertAllFieldNamesToKebab(jsonWithSnakeCaseFields)).toMatchSnapshot();
  });
});