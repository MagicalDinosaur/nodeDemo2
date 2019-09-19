function curry(fn, args = []) {
    return function () {
        // 积累每次的参数，...args上次的参数，...arguments本次的参数
        let rest = [...args, ...arguments];
        if (fn.length > rest.length) {
            return curry.call(this, fn, rest);
        } else {
            return fn.apply(this, rest);
        }
    }
}

function sum(a, b, c) {
    return a + b + c
}

const sums = curry(sum);
console.log(sums(1)(2)(3))