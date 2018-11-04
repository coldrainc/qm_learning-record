const url  = 'https://www.toutiao.com/a6618043663106703875/'

const got = require('got');

got(url)
    .then((res) => {
        console.log(res)
    })