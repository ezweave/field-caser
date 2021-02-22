import { transformAllFieldNamesToSnake } from './transformAllFieldNamesToSnake'
import * as jsonWithCamelCaseFields from './__fixtures/jsonWithCamelCaseFields.json'
import * as jsonWithKebabCaseFields from './__fixtures/jsonWithKebabCaseFields.json'

describe('transformAllFieldNamesToSnake', () => {
  it('transforms camel field names to snakecase', () => {
    expect(transformAllFieldNamesToSnake(jsonWithCamelCaseFields)).toMatchSnapshot()
  })
  it('transforms kebab field names to snakecase', () => {
    expect(transformAllFieldNamesToSnake(jsonWithKebabCaseFields)).toMatchSnapshot()
  })
})