// interface Item {
//   name: string;
// }
class DataManager<T extends string | number> {
  constructor(private data: T[]) {}
  getItem(index: number): T {
    return this.data[index];
  }
}
// const data = new DataManager([
//   {
//     name: "Jiawei"
//   }
// ]);
// data.getItem(0);
// interface Test {
//   name: string
// }
function hello<T>(param: T) {
  return param;
}
const func: <T>(param: T) => T = hello;
