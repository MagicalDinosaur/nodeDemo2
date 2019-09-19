function compose(...args) {
    return (result) => {
        return args.reduce((result, fn) => {
            return fn(result)
        }, result)
    }
}


function toWordUp(str) {
    return str.toUpperCase()
}

function toWordReverse(str) {
    return str.split('').reverse().join('')
}

let madeNewWord = compose(toWordUp, toWordReverse);

console.log(madeNewWord('abc'))  // "CBA"


////////////////////////////////////////////////////////////////////////////////////////////////////////


function func() {
}


function pipe() {
    console.log(1)
    return (result) => {
        console.log(result)
    }
}
let newFunc = pipe()
newFunc(2)


