const http = require('http');
const fs = require('fs');
const querystring = require('querystring')
const infos = {
    "123":{
        username:"999",
        sex:"男"
    },
    "888":{
        username:"小七",
        sex:"男"
    }
}
// web server
// node 如何提供http服务？
const server = http.createServer((req,res)=>{
    // req 请求对象 request URL querystring query body
    // res 服务结果对象  response 
    if(req.url ==='/rhino.png'){
        const png = fs.readFileSync('./rhino.png');
        res.statusCode=200;
        res.setHeader('Container-Type','image/png');
        res.end(png);
        return;
    }
    if (req.url.indexOf('/getInfo')>=0){
        const qs = req.url.split('?')[1];
        console.log(qs);
        const params = querystring.parse(qs);
        console.log(parmas);
        const id = parmas.id;
        console.log(id);

        const info =infos[id]|| {};
        res.statusCode=200;
        
        res.end(JSON.stringify(info));
        return;
    }
    const index = 
    fs.readFileSync('./index.html','utf8');
    res.statusCode = 200;
    res.setHeader('Content-Tyoe','text/html');
    res.end(index);

});
//addEventListener
server.listen(3000,'127.0.0.1',()=>{
    console.log('服务器跑起来');
})