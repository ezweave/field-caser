import { transformAllFieldNamesToSnake } from 'field-caser'

const kebabCaseObject = {
  first_name: 'Homer',
  last_name: 'Simpson'
}

interface User  {
  firstName: string,
  lastName: string
}

const user: User = <User>transformAllFieldNamesToSnake(kebabCaseObject)

console.warn('User is now', user)