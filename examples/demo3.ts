function add(first: number, second: number): number {
  return first + second
}
const count = add(1, 2)
function sayHello(): void {
  //return ''    void类型指函数不应该有返回值
}
function errEmit(): never {
  throw new Error()
  // never指函数永远不可能执行完
}
function fix({ first, second }: { first: number, second: number }): number {
  return first + second
}
const add1 = fix({ first: 1, second: 2 })