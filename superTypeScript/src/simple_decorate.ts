function testDecorator() {
  return function<T extends new (...args: any[]) => any>(constructor: T) {
    return class extends constructor {
      name = "123";
      getName() {
        this.name = name;
      }
    };
  };
}
const Test = testDecorator()(
  class {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
);

const test = new Test("Jiawei");
console.log(test.getName());
