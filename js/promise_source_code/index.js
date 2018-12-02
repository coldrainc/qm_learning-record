const Promise = require('./promise.js');

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('b');
    resolve('执行了A');
  }, 2000);
});

p.then((res) =>{
  console.log('a');
  console.log(res);
})