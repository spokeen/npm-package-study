const Koa = require('koa');

// 配置 app
const app = new Koa({
    keys: ['some secret key']
});


// 动态配置
app.proxy = true;

app.use(async (ctx, next) => {
    ctx.body = 'Hello Koa';
});

// 同时将服务挂在到多个端口上
app.listen(3000);
app.listen(8080);