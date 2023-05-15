class TypeScript {
  version: string
  constructor(version: string) {
    this.version = version
  }

  info(name: string): string {
    return `${name}: TS version is ${this.version}`
  }
}

class Car {
  readonly model: string
  readonly wheelsCount: number = 4

  constructor(carModel: string) {
    this.model = carModel
  }
}

class CarType {
  readonly wheelsCount: number = 4

  constructor(readonly model: string) {}
}


//---------------------------

class Animal {
  protected voice: string = ''
  public color: string = 'black'

  private go(): void {
    console.log('Go');
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice
  }
}

const cat = new Cat()
cat.setVoice('Uwf')

//--------------------------------------

abstract class Component {
  abstract render(): void
  abstract info(): string
}

class AppComponent extends Component {
  render(): void {
    console.log('I`m rendering');
  }

  info(): string {
    return 'Some info'
  }
}