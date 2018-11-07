# Promise的使用和理解

- 多个Promise 对象如何只用一条then链 ，解决异步问题， 让代码同步执行
    new promise((resolve, reject) => {
        异步执行代码， resolve， reject
        resolve(123)
    })
    每个promise对象都是可以thenable的
    在then的函数里
    then(res => res.json())
    res.json()将结果json化，也是promise对象, 继续执行下去
    不如await优雅