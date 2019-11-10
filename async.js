function consoles() {
    return new Promise((resolve) => {
        setTimeout(() => { resolve() }, 10)
    })
}
let func = async () => await consoles()
console.log(func())

