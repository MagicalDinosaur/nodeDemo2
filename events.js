const EventEmitter = require('events');

class MyEmitter extends EventEmitter {

}

const myEmitter = new MyEmitter()

myEmitter.on('event', (a) => console.log('Hello World! ' + a));
myEmitter.emit('event', 'Danny!');


// 用 once 注册方法，多次 emit 只触发第一次
myEmitter.once('once',()=>console.log('only can emit once'));
myEmitter.emit('once');
myEmitter.emit('once');// 这一次不触发