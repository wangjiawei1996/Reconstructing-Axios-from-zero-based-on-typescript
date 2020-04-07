// function testDecorator(flag: boolean) {
//   if (flag) {
//     return function(constructor: any) {
//       constructor.prototype.getName = () => {
//         console.log("welcome Alipay");
//       };
//     };
//   } else {
//     return function(constructor: any) {};
//   }
// }

// @testDecorator(true)
// class Test {}

// const test = new Test();
// (test as any).getName();

function getNameDecorator(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  descriptor.value = () => {
    return "decorate";
  };
}
class Test {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  @getNameDecorator
  getName() {
    return this.name;
  }
}

const test = new Test("Jiawei");
console.log(test.getName());
