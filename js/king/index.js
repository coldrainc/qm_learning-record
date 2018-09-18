/*jshint esversion: 6 */

// 鸡的国王 召集1000只鸡,组成乐队。

// 只能找到999只

// 乐队? 内存中表达？

// chior 乐队

// chicken 乐队

const chior = [];

// 只有会嘎嘎叫的才要 check?
// 代码 流程 组成乐队 办事流程
var duck = {
    duckSing: function(){
        console.log('嘎嘎嘎');
    }
};

var chicken = {
    chickSing: function(){
        console.log('咯咯咯');
    },
    duckSing: function(){
        console.log('嘎嘎嘎');
    }
};
// 如果它走起来想像鸭子，叫起来也是鸭子，
// 那么就是鸭子, duck typing js弱类型

// 1000 要求， 999只duck
/*
* 功能： 加入合唱团
* params：animal 动物对象
*choir 加入新成员
*/
function joinChior(animal){
    if(animal && typeof animal.duckSing == 'function'){
        chior.push(animal);
    }
}

// 函数式编程
for(var i = 0; i < 999; i++){
    joinChior(duck);
}

// 现学 js类， 对象， 动态的
chicken.duckSing = function(){
    console.log('嘎嘎嘎');
}


joinChior(chicken);
console.log(chior.length);