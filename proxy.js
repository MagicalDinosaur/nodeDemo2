let handler = {
    // 获取属性时执行的回调函数
    get: function (target, name) {
        console.log('get')
        console.log(target, name)
        return name;
    },
    // 设置属性时执行的回调函数
    set: function (obj, prop, value) {
        console.log('set');
    }
};

let p = new Proxy([1,2], handler); // 第一个参数为被包装的目标对象，第二个参数为各种操作回调函数的集合

p.push(1);

console.log(p)

