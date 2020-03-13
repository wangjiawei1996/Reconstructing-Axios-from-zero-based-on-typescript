function join<T, P>(first: T, second: P) {
  return `${first}${second}`;
}
function map<ABC>(params: ABC) {
  return params;
}
join<string, number>("1 ", 1);
map<number>(1);
