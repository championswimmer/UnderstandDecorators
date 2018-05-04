
export function LogConstruct (constructor: Function) {
  const origCtor = constructor as typeof Object
  const newCtor: any = function (...args: any[]) {
    console.log(`Constructing ${origCtor.name} with ${args.toString()}`)
    return Object.assign(new origCtor(...args))
  }
  return newCtor
}

@LogConstruct
class Person {
  public name = 'First Last'
  public age = 20

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

let p = new Person('John Cena', 40)
console.log(p)
