var co = require('co');

function* foo() {
    yield Promise.resolve(console.log('1'));
    yield Promise.resolve(console.log('2'));
}

// co(foo); // 1 2


function* a() {
    yield Promise.resolve(console.log('1'));
    yield Promise.resolve(console.log('2'));
}

console.log(a.call().next())