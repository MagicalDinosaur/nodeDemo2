const myPrivateProp = Symbol();
class People {
    constructor() {
        this[myPrivateProp] = 'Secret'
    }
    getValue() {
        return this[myPrivateProp]
    }
    setValue(val) {
        return this[myPrivateProp] = val
    }
}

let man = new People()
man.setValue(0)
console.log(man)

