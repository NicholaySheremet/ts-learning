interface Rect {
  readonly id: string
  color?: string
  size: {
    width: number
    height: number
  }
}

const rect1: Rect = {
  id: 'testId1',
  size: {
    width: 12,
    height: 33
  },
}

const rect2: Rect = {
  id: 'testId2',
  size: {
    width: 3,
    height: 22
  },
  color: 'black'
}

// type coercion
const rect3 = {} as Rect
const rect4 = <Rect>{}

interface RectWithArea extends Rect {
  getArea: () => number
}


const rect5: RectWithArea = {
  id: 'testId2',
  size: {
    width: 3,
    height: 22
  },
  getArea(): number {
    return this.size.width * this.size.height
  },
}


interface IClock {
  time: Date
  setTime(date: Date): void
}

class Clock implements IClock {
  time: Date = new Date()

  setTime(date: Date): void {
    this.time = date;
  }
}

//************************

interface IStyles {
  [key: string]: string
}

const css: IStyles = {
  width: '20px',
  color: 'black',
  'text-size': '111111111111px'
}