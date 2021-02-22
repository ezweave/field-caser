import { transformAllFieldNamesToKebab } from './transformAllFieldNamesToKebab'
import * as jsonWithSnakeCaseFields from './__fixtures/jsonWithSnakeCaseFields.json'
import * as jsonWithCamelCaseFields from './__fixtures/jsonWithCamelCaseFields.json'

describe('transformAllFieldNamesToKebab', () => {
  it('transforms camel field names to kebab', () => {
    expect(transformAllFieldNamesToKebab(jsonWithCamelCaseFields)).toMatchSnapshot()
  })
  it('transforms snake field names to kebab', () => {
    expect(transformAllFieldNamesToKebab(jsonWithSnakeCaseFields)).toMatchSnapshot()
  })
})