# 后端

跨域 A -> B
A 8080 index.html -> B 3000 /api
同一个冬眠 但是因为port不同， 跨域
js同源机制(前端跟后端 信任) 如果跨域请求， 不允许

连端口不一样， 都会跨域， 在一家公司， 因为提供的服务或部门项目不一样， 需要使用跨域，的能力来连调
waimian.eleme.com 子域名 外面部门
jiudian.eleme.com 酒店 跨部门的技术服务
music.qq.com 第三方api服务
同一个域名(一级，二级域名) 提供不同的服务
前端 8080（react client) 后端3000 （server koa）nginx
前后端分离并行开发