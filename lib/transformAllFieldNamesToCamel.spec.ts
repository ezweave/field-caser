import { transformAllFieldNamesToCamel } from './transformAllFieldNamesToCamel'
import * as jsonWithSnakeCaseFields from './__fixtures/jsonWithSnakeCaseFields.json'
import * as jsonWithKebabCaseFields from './__fixtures/jsonWithKebabCaseFields.json'

describe('transformAllFieldNamesToCamel', () => {
  it('transform snake field names to camelcase', () => {
    expect(transformAllFieldNamesToCamel(jsonWithSnakeCaseFields)).toMatchSnapshot()
  })
  it('transform kebab field names to camelcase', () => {
    expect(transformAllFieldNamesToCamel(jsonWithKebabCaseFields)).toMatchSnapshot()
  })
})
