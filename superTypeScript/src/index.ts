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

//修改的并不是实例上的name,而是原型上的name
function nameDecorator(target: any, key: string): any {
  target[key] = "wang";
}

//name放在实例上
class Test {
  @nameDecorator
  name = "Jiawei";
}

const test = new Test();
console.log((test as any).__proto__.name);
