const html = `
    <view>
        <text>{{username}}</text>
    </view>
`;
let obj = {
    "username": "唐唐"
}
// let username = "唐唐";
// {{}}
// 在模板中，查找{{value}} 读取里面的值
// 替换成 username 变量的值

function compile (html) {
    var reg = /\{\{(.*?)\}\}/;
    if(reg.test(html)){
        let key = RegExp.$1;
        html = html.replace(reg, obj[key]);
    }
    return html;
}

const compiledHTML = compile(html);
console.log(compiledHTML);