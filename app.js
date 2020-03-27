const Koa = require("koa");
const staticFiles = require('./static-files');

const app = new Koa();

app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    var
        start = new Date().getTime(),
        execTime;
    await next();
    execTime = new Date().getTime() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`);
});


app.use(staticFiles('/static/', __dirname + '/static'));

app.listen(3000);
console.log('app started at port 3000...');