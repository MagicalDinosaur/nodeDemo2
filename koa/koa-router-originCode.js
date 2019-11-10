class Layer {
    constructor(path, cb) {
        this.path = path;
        this.cb = cb;
    }
}

class Router {
    constructor() {
        // 存放路由对象数组
        this.layers = []
    }
    get(path, cb) {
        // 将app.get()方法配置的新路由push到数组
        this.layers.push(new Layer(path, cb))
    }
    // 该方法，在koa源码中用于串联中间件
    // 主要思想是 递归 dispatch 函数
    compose(ctx, next, handlers) {
        function dispatch(index) {
            if (index >= handlers.length) {
                // 最后没有执行的路由cb了，返回next()
                return next()
            }
            handlers[index].cb(ctx, () => dispatch(index + 1))
        }
        dispatch(0)
    }
    routes() {
        return async (ctx, next) => {
            // 筛选路径匹配的路由
            let handlers = this.layers.filter(layer => layer.path === ctx.path)
            this.compose(ctx, next, handlers)
        }
    }
}
module.exports = Router