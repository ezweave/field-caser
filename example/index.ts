import { transformAllFieldNamesToCamel } from 'field-caser'

const snakeUser = {
  first_name: 'Homer',
  last_name: 'Simpson'
}

interface User  {
  firstName: string,
  lastName: string
}

const camelUser: User = <User>transformAllFieldNamesToCamel(snakeUser)

console.warn('User was', snakeUser, 'User is now', camelUser)