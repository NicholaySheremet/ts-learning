const isFetching: boolean = true;
const isLoading: boolean = false;

let int: number = 42;
const float: number = 3.3;
const num: number = 3e1;

const message: string = 'Test string';

const numberArray1: number[] = [1,3,4,5];
const numberArray2: Array<number> = [2,3,4,5];

const words: string[] = ['test', 'string'];

//
const contact: [string, number] = ['test', 1]

//any
let variable: any = 22;
variable = 'string';



function sayName(name: string): void {
  console.log(name);
}
sayName('User')


//never
function throwErr(message: string): never {
  throw new Error(message);
}


function infinite(): never {
  while (true) {
    console.log(1);
  }
}

//new type
type Login = string;

const login1: Login = 'admin'
// err
// const login2: Login = 2

type ID = string | number;
const id1: ID = '321'
const id2: ID = 321
// err
// const id3: ID = true

// Null && undefined
type SomeType = string | null | undefined;

