const Router = require('koa-router');
const home = new Router();

home.get('/', async(ctx) => {
  const title = '首页';
  // 给浏览器设置cookie
  ctx.cookies.set('username', 'lisa', {
    domain: 'localhost',
    path: '/',
    // maxAge: 1000,
    expires: new Date('2019-10-1'), // 设置cookie过期时间 比如登录后一个星期都不需要登录
    httpOnly: false,
    overwrite: false // 是否允许覆盖
  });
  ctx.cookies.set('uid', '1000', {
    domain: 'localhost', // 作用域名
    maxAge: 6000,// 最多使用时间
    path: '/register',// 作用路径
    httpOnly: true // 前端是否可以获取cookie
  });
  ctx.body = title;
})

const router = new Router();
router.use('/', home.routes(), home.allowedMethods())

module.exports = router;
