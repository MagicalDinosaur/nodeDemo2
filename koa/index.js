//Koa
var koa = require('koa');
var Router = require('koa-router');  //koa默认没有集成route功能，引入中间件
var app = new koa();  //创建一个APP实例

// app.context 是从其创建 ctx 的原型。您可以通过编辑 app.context 为 ctx 添加其他属性
app.context.db = "db!这是ctx原型上的属性值"

app.use(async (ctx, next) => {
    console.log(ctx.db);
    await next();
})

// logger
app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
})

// x-response-time
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

// set/get cookies
app.use(async (ctx, next) => {
    if (!ctx.cookies.get("cookie")) {
        ctx.cookies.set("cookie", Date.now(), { maxAge: 2000, path: ctx.url });
    }
    next();
});

// 如果不用 async/await 可以用 generator function 代替
app.use(function* (next) {
    console.log('generator 1');
    yield next;
    console.log('generator 2');
});

// 加载路由中间件
var home = new Router();
home.get('/', async (ctx) => {
    ctx.body = 'Hello World! from Koa!';
})
home.get('/api', async (ctx) => {
    ctx.body = 'API! from Koa!';
})
home.get('/error', async (ctx) => {
    throw new Error('抛出错误！');
})
app.use(home.routes());

//监听端口，启动服务
app.listen(3001);

// 错误处理
app.on('error', (err, ctx) => {
    console.error('server error', err)
});