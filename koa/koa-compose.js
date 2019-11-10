'use strict'

/**
 * Expose compositor.
 */

module.exports = compose

/**
 * Compose `middleware` returning
 * a fully valid middleware comprised
 * of all those which are passed.
 *
 * @param {Array} middleware
 * @return {Function}
 * @api public
 */

function compose(middleware) {
    /*
     如果中间件不是一个数组的话，就抛出错误，遍历中间件，如果中间件不是一个函数的话，抛出错误。
    */
    if (!Array.isArray(middleware)) throw new TypeError('Middleware stack must be an array!')
    for (const fn of middleware) {
        if (typeof fn !== 'function') throw new TypeError('Middleware must be composed of functions!')
    }

    /**
     * @param {Object} context
     * @return {Promise}
     * @api public
     */

    return function (context, next) {
        // last called middleware #
        let index = -1
        // 执行 dispath 函数，传参为 0
        return dispatch(0)
        // 递归执行 dispath 函数
        function dispatch(i) {
            if (i <= index) return Promise.reject(new Error('next() called multiple times'))
            index = i
            let fn = middleware[i]
            //  如果中间件执行完成 执行 next 
            if (i === middleware.length) fn = next
            if (!fn) return Promise.resolve()
            try {
                // 将下一个中间件传入 第二个参数
                return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
            } catch (err) {
                return Promise.reject(err)
            }
        }
    }
}