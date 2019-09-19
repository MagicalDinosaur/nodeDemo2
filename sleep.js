// function sleep(timeout) {
//     return new Promise(resolve => {
//         setTimeout(() => { resolve() }, timeout)
//     })
// }

// (async function () {
//     await sleep(1000)
//     // 'run after 1000ms'
// })()


function sleep(g, timeout) {
    setTimeout(g.next(), timeout)
}

(function* gen() {

})()