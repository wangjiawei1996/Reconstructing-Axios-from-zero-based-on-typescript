const func = (str: string): number => {
  return parseInt(str, 10)
}
const func1: (str: string) => number = (str) => {
  return parseInt(str, 10)
}
interface Person {
  name: 'string'
}
const newData = '{"name": "Dell"}'
const rowData: Person = JSON.parse(newData)
let numer: number | string = 123
numer = '345'