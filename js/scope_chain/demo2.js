globalContext = {
  VO: {
    data: [],
    i: 3
  }
}

var data = [];

for (var i = 0; i < 3; i++) {
  // data[i]Context = {
  //   Scope: [AO, globalContext]
  // }
  // 使用立即执行函数把i当做参数传过去 i 就不是自由变量每次的i都被保存进去了
  // let就是相同的原理，创建了块级作用域
  data[i] = (function(i) { // 当在使用i的时候，data[0],data[1]都已经出栈了
    return function() {
      console.log(i)
    }
  })(i);
}

data[0]();
data[1]();
data[2]();
