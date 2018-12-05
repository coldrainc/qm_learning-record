const fs = require('fs');
const path = require('path');

var fileFinder = (dir, cb) => {
  // console.log(dir)
  fs.readdir(dir, (err, files) => {
    // 怎么处理？
    if(err) {
      return cb(err);
      // dir不存在 怎么处理？
      // 要告诉cb
    }
    // 文件遍历时， 文件打开失败
    // 找到最大文件？ 算法
    // [] 所有文件大小， 最大的一个
    var counter = files.length;
    var errored = false; // 未出错
    var stats = [];
    files.forEach((file, index) => {
      // fs.stat 异步执行
      // ?谁最大
      fs.stat(path.join(dir, file), (err, stat) => {
        // 文件循环处理有先有后
        if(errored) return;
        if(err) {
          errored = true;
          return cb(err);
        }
        // 由于是异步的fs.stat所以可能最后顺序不一样，为了将stat放到对应的地方，所以直接放到对应的index里面
        stats[index] = stat;
        if(--counter == 0) {
          // 什么时候文件stat都获取完？
          var largest = stats
            .filter(stat => stat.isFile())
            .reduce((prev, next) => {
              if(prev.size > next.size)
                return prev;
              return next;
            })
          cb(null, files[stats.indexOf(largest)]);
        }
      });
    })
    // 什么时候是个尽头？ 拿到所有文件的stat
  })
}

// exports.findLargest = findLargest;
module.exports = fileFinder;
