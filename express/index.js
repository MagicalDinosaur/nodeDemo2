//Express
let express = require('express')
//创建一个APP实例
let app = express()

// 设置 404
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
})

// 路由
//建一个项目根目录的get请求路由，回调方法中直接输出字符串Hello World!
app.get('/', function (req, res) {
    res.send('Hello World! from Express!')
});

// 托管静态文件
// express.static 内置中间件，托管图像、css文件、js文件等静态文件
app.use(express.static('public')) // 这样就可以访问public文件夹下的文件了，比如：http://localhost:3000/demo.png
app.use('/static', express.static('public')) // http://localhost:3000/static/demo.png

// 设置错错误处理器
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

//监听端口，启动服务
app.listen(3000);