//Express
let express = require('express')
let app = express()  //创建一个APP实例

//建一个项目根目录的get请求路由，回调方法中直接输出字符串Hello World!
app.get('/', function (req, res) {
    res.send('Hello World! from Express!')
});

//监听端口，启动服务
app.listen(3000);