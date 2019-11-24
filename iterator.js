let obj = {
    name: 'Dinosaur',
    age: 23
}

obj[Symbol.iterator] = function () {
    let keys = Object.keys(this);
    let index = 0;
    return {
        next: () => {
            return { value: this[keys[index++]], done: index > keys.length };
        }
    }
}
for (let value of obj) {
    console.log(value) // Dinosaur 23
}
