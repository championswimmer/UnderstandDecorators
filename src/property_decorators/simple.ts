
export function Observable (target: Object, key: string | symbol): any {
  let privValue: any = null;
  return <PropertyDescriptor>{
    enumerable: true,
    get() {
      return privValue
    },
    set(val: any) {
      console.log(`Changing ${key} from ${privValue} to ${val}`)
      privValue = val
    }
  }
}

class Person {
  @Observable
  public name: string
  @Observable
  public age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

let p = new Person('John Cena', 40)
p.name = 'Harry Potter'
p.age = 25