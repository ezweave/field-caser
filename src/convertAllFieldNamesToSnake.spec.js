import { convertAllFieldNamesToSnake } from './convertAllFieldNamesToSnake';

const jsonWithCamelCaseFields = require('./__fixtures/jsonWithCamelCaseFields.json');

const jsonWithKebabCaseFields = require('./__fixtures/jsonWithKebabCaseFields.json');

describe('convertAllFieldNamesToSnake', () => {
  it('converts camel field names to snakecase', () => {
    expect(convertAllFieldNamesToSnake(jsonWithCamelCaseFields)).toMatchSnapshot();
  });
  it('converts kebab field names to snakecase', () => {
    expect(convertAllFieldNamesToSnake(jsonWithKebabCaseFields)).toMatchSnapshot();
  });
});