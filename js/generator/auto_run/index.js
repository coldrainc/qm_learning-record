var fetch = require('node-fetch');

function* gen() {
  var url = 'https://api.github.com/users/github';
  var result = yield fetch(url);
  console.log(result);
}

// const G = gen();

// G.next();
// G.next({ bio: '手持利剑, 学好Js闯天涯' });

const g = gen();
var result = g.next();
// console.log(result);
result.value.then(function(data) {
  return data.json();
}).then(data => {
  g.next(data);
})

