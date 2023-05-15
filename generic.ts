const arrayOfNumbers: Array<number> = [3,5,6,7]
const arrayOfStrings: Array<string> = ['3,5,6,7', 'for', 'test']


function reverse<T>(array: T[]): T[] {
  return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)