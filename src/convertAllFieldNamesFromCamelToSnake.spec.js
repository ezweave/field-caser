import { convertAllFieldNamesFromCamelToSnake } from './convertAllFieldNamesFromCamelToSnake';

const jsonWithCamelCaseFields = require('./__fixtures/jsonWithCamelCaseFields.json');

describe('convertAllFieldNamesFromCamelToSnake', () => {
  it('converts nested field names to snakecase', () => {
    expect(convertAllFieldNamesFromCamelToSnake(jsonWithCamelCaseFields)).toMatchSnapshot();
  });
});