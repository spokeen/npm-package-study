const Koa = require('koa');

const app = new Koa();


app.use(async (ctx, next) => {
    console.log(`${ctx.method} ${ctx.url} ${app.env} ${app.keys} ${app.proxy}`);
    console.log('This is a middleware 1 before');
    await next();
    console.log('This is a middleware 1 after');
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

app.use(async (ctx, next) => {
    console.log('This is a middleware 2 before');
    const start = Date.now();
    await next();
    console.log('This is a middleware 2 after');
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
  });


app.use(async ctx => {
    console.log('This is a middleware 3 before');
    ctx.body = 'Hello World';
  });


app.listen(3000);