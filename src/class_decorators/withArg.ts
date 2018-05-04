export interface SerializationOptions {
  serializationType: 'json' | 'table'
}
export function Serializable (options: SerializationOptions) {
  return function (constructor: Function) {
    constructor.prototype.toString = function () {
      switch (options.serializationType) {
        case 'table': {
          let table = "PROPERTY \t\t VALUE\n"
          for (let k in this) {
            if (this.hasOwnProperty(k)) {
              table += `${k} \t\t\t ${this[k]}\n`
            }

          }
          return table
        }

        case 'json': default: {
          return JSON.stringify(this)
        }

      }
    }
  }
}

@Serializable({serializationType: 'table'})
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
