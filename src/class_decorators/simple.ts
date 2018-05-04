export function Serializable (constructor: Function) {
  constructor.prototype.toString = function () {
    return JSON.stringify(this)
  }
}

@Serializable
class Person {
  public name = 'First Last'
  public age = 20

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

let p = new Person('John Cena', 40)
console.log(p.toString())
