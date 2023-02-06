import { snakeCase, toUpper } from 'lodash'
import { deepFieldTransformer } from './deepFieldTransformer'
import * as jsonWithSnakeCaseFields from './__fixtures/jsonWithSnakeCaseFields.json'
import arrayExample from './__fixtures/arrayExample.json'

describe('deepFieldTransformer', () => {
  it('converts nested field names to using a converter', () => {
    expect(deepFieldTransformer(toUpper)(jsonWithSnakeCaseFields)).toMatchSnapshot()
  })
  it.only('handles arrays', () => {
    const results = deepFieldTransformer(snakeCase)(arrayExample)
    expect(results).toMatchSnapshot()
  })
})