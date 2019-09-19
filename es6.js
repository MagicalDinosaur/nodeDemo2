// function* gen(x){
//     yield 1 
//     yield 2
//     yield 3 + x
//     return 4
// }

// let g = gen("abc")
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())

// function* gen(x) {
//     yield yield x ? x : 0 + 2;
// }

// var g = gen();
// console.log(g.next())  // { value: 3, done: false }
// console.log(g.next(1))  // { value: 1, done: false }


// var myIterable = {}
// myIterable[Symbol.iterator] = function* () {
//     yield 1;
//     yield 2;
//     yield 3;
// };
// console.log([...myIterable])

const obj = { a: 1, b: 2 }

const obj2 = { c: 1, ...obj }

console.log(obj2)


