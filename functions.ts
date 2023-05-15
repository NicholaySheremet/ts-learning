function add(a: number, b:number): number {
  return a + b;
}


function toUpperCase(str: string): string {
  return str.trim().toUpperCase()
}

interface IPosition {
  x: number | undefined
  y: number | undefined
}

interface IPositionWithDefault extends IPosition {
  default: string
}

function position() : IPosition;
function position(a: number): IPositionWithDefault;
function position(a: number, b: number): IPosition;


function position(a?: number, b?:number): IPosition | IPositionWithDefault {
  if (!a && !b) {
    return {x: undefined, y: undefined}
  }

  if (a && !b) {
    return {x: a, y: undefined, default: a.toString()}
  }
  return {x: a, y: b}
}

console.log('empty', position());
console.log('empty', position(42));
console.log('empty', position(11, 44));
