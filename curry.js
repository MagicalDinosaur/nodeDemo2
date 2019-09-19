function max(a, b, fn) {
    return fn(a, b)
}
// console.log(max(2, 3, Math.max)) 

const curry = (fn) => {
    if (fn.length <= 1) return fn;
    const generator = (args, rest) => (!rest ? fn(...args) : arg => generator([...args, arg], rest - 1));
    return generator([], fn.length);
};

const sum = (a, b, c) => a + b + c;
const curriedSum = curry(sum);
const res = curriedSum(1)(2)(3)
console.log(res); // 6