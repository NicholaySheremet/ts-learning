interface iPerson {
  name: string
  age: number
}

type PersonKeys = keyof iPerson;

let key: PersonKeys = 'name'
key = 'age'

type User = {
  _id: number
  name: string
  email: string
  createdAt: Date
}

type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'> // {name, email}
type UserKeysWithMeta = Pick<User, 'name' | 'email'> // {name, email}


