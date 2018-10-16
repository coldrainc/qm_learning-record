// var str = "Visit Microsoft!";
// console.log(str.replace("Microsoft", "Alibaba"));
// var money = '$$';
// var pattern = /\$/g;
// console.log(money.replace(pattern, "￥"));
let html = `abc{{username}}edf{{logo}}cccc`;
let test = " test ";
let reg = /\{\{(.*?)\}\}/gm;
console.log(reg.test(html), RegExp.$1);