import { toUpper } from 'lodash'
import { deepFieldTransformer } from './deepFieldTransformer'
import * as jsonWithSnakeCaseFields from './__fixtures/jsonWithSnakeCaseFields.json'

describe('deepFieldTransformer', () => {
  it('converts nested field names to using a converter', () => {
    expect(deepFieldTransformer(toUpper)(jsonWithSnakeCaseFields)).toMatchSnapshot()
  })
})