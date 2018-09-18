//男主角
//json对象 object 对象字面量
var arr = [true, false];
var isHappy = arr[Math.floor(Math.random()*arr.length)];
var xiaoming = {
    name: '小明',
    sex: '男',
    single: true,
    classroom: '116',
    hometown: '赣州',
    sendflower: function(target){
        target.receiveFlower(this);
    }
};

//女主角
//json构建连个对象，实现世界中具有的属性，描述出来了,送花>?

//js 动态语言，很简单，随意，表现力
var xiaohong = {
    name: '小红',
    sex: '女',
    single: true,
    classroom: '161',
    receiveFlower: function(sender){
        console.log('小红收到鲜花');
        //扔了
        //看个电影试试
        if(sender.name == '小明'){
            console.log('扔了鲜花');
        }else{
           console.log('去看电影');
        }
    },
    listenGoodMod: function(sender){
        console.log('查看小红心情');
            setTimeout(() => {
                if(isHappy==true){
                    console.log('小红心情好');
                    this.receiveFlower(sender);
                }else{
                    console.log('小红心情不好');
                    console.log('不送花');
                    console.log('等待心情好再送花');
                }
            }, 10000);
    }
};

//小明找小丽代为给小红送花
//又要有一个对象 小丽 JSON
//对象的复杂关系，设计模式
//小明先送给小丽 代理 Proxy
//小丽了解小红的情况，有无朋友，心情如何？
// 小明 -> 小红 = 小明 -> 小丽 小丽 -> 小红 ,小丽 is proxy
var xiaoli = {
    name: '小丽',
    sex: '女',
    single: true,
    classroom: '161',

    hometown: '赣州',
    //自己收花，实现用一个接口
    receiveFlower: function(sender){
        // if(sender.name != '小明'){
        //     console.log('gun');
        // }else{
        //     console.log('小明我们在一起吧');
        // }


        //小丽应该怎么办？
        //把花转给小红
        //如何优化？ 小红心情不好，
        //小红的心情好再去送花, 10s,监听心情
        //心情好（10s），在送花
        // xiaohong.receiveFlower(sender);
        xiaohong.listenGoodMod(this);
    }

};

// console.log(xiaoming.name);
// console.log(xiaohong.name);
// console.log(xiaoli.name);
//送花对象就变了，只要实现同样的方法(接口)，实现对象的互换

xiaoming.sendflower(xiaohong);//直接扔了鲜花

xiaoming.sendflower(xiaoli);//心情好，先看个电影试试吧，心情不好等心情好

