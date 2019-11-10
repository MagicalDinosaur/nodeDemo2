// process.nextTick(() => console.log(1));
// Promise.resolve().then(() => console.log(2));
// setImmediate(() => { console.log(3) });
// setTimeout(() => {
//     // console.log(4);
//     setImmediate(() => { console.log(5) });
//     // process.nextTick(() => console.log(6));
//     // Promise.resolve().then(() => console.log(7));
//     setTimeout(()=>{console.log(8)})
// },100);
// console.log(9);

// setTimeout(()=>{
//     setImmediate(() => { console.log(1) });
//     setTimeout(() => { console.log(2) });
// })