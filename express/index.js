//Express
let express = require('express')
//创建一个APP实例
let app = express()

/**
 * 路由
 */
//建一个项目根目录的get请求路由，回调方法中直接输出字符串Hello World!
app.get('/', function (req, res) {
    res.send('Hello World! from Express!')
});

// .all 所有类型的http请求都会执行
app.all('/secret', function (req, res, next) {
    console.log('Accessing the secret section ...')
    res.send('Its a secret!')
    next() // pass control to the next handler
})
// app.route 创建链式路由
app.route('/book')
    .get(function (req, res) {
        res.send('Get a random book')
    })
    .post(function (req, res) {
        res.send('Add a book')
    })
    .put(function (req, res) {
        res.send('Update the book')
    })

/**
 * 托管静态文件
 */
// express.static 内置中间件，托管图像、css文件、js文件等静态文件
app.use(express.static('public')) // 这样就可以访问public文件夹下的文件了，比如：http://localhost:3000/demo.png
app.use('/static', express.static('public')) // http://localhost:3000/static/demo.png

/**
 * Response methods
 * res.download()
 * res.end()
 * res.json()
 * res.jsonp()
 * res.redirect()
 * res.render()
 * res.send()
 * res.sendFile()
 * res.sendStatus()
 */

/**
 * template engine 模版引擎
 * pug 模版默认目录在 views 文件夹
 */
app.set('view engine', 'pug')
app.get('/pug', function (req, res) {
    // views 文件夹下的index.pug
    res.render('index', { title: 'Hey', message: 'Hello there!' })
})

/**
 * 设置错错误处理器
 * 设置四个传参时，第一个时error
 * 该中间件要放在最后面，在其他的 app.use 之后
 */
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

//监听端口，启动服务
app.listen(3000);