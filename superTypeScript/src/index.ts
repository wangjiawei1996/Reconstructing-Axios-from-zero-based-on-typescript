//原型、方法名、参数所在的位置
function paramDecorator(target: any, key: string, paramIndex: number): any {
  console.log(target, key, paramIndex);
}

class Test {
  getinfo(@paramDecorator name: string, age: number) {
    console.log(name, age);
  }
}

const test = new Test();
console.log(test.getinfo("123", 24));
