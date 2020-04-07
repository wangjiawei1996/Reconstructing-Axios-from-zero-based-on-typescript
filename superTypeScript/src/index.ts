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

function visitDecorator(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {}
class Test {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  @visitDecorator
  set name(name: string) {
    this._name = name;
  }
}

// const test = new Test("Jiawei");
// console.log(test.getName());
