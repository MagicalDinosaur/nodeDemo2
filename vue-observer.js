
function defineReactive(obj, key, val) {
    // 创建一个Dep实例
    var dep = new Dep()

    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            if (Dep.target) {
                dep.add(Dep.target)
            }
            // console.log(dep)
            return val
        },
        set: function (newval) {
            if (newval == val) return;
            // cb(key, newval);
            dep.notify();
        }
    })
}

// 数据更新时的回调函数
function cb(key, val) {
    /* 渲染视图 */
    console.log("属性：" + key + "更新为：" + val);
}

function observer(data) {
    Object.keys(data).forEach((key) => {
        defineReactive(data, key, data[key])
    })
}

// 依赖收集，当数据更新时通知所有Watcher更新
class Dep {
    constructor() {
        // 存放所有的Watcher对象
        this.subs = [];
    }
    // 添加一个watcher对象
    add(sub) {
        this.subs.push(sub)
    }
    // 通知所有的视图更新
    notify() {
        this.subs.map((sub) => {
            sub.update();
        })
    }
}

// 观察者，当数据更新时需要收到通知
class Watcher {
    constructor(vm, expOrFn, cb, options) {
        // this.vm = vm; // vue实例
        // this.expOrFn = expOrFn; //要被订阅的属性
        // this.cb = cb; //回调函数
        // Dep.target指向创建当前的watcher实例
        Dep.target=this;
    }
    update() {
        // this.cb()
        console.log('视图更新啦！')
    }
}

class Vue {
    constructor(options) {
        this._data = options.data;
        this.$watch = new Watcher();
        observer(this._data)
        // 这里为了触发 get 函数，读取一下num
        this._data.num
    }
}

let global = {
    num: 2
}

var vue = new Vue({
    data: global
})
global.num = 10



