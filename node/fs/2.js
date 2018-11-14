const fs = require('fs');

// try{
//     fs.readFile('./a.txt', 'utf8',
//     function(err, data) {
//         console.log(data);
//         return fs.readFile('b.txt', 'utf8', function(err, data){
//             console.log(data)
//         })
//     }).then(res => {
//         console.log(res)
//     }).then(res => {
//         console.log(res)
//     })
// }catch(e) {

// }
try {
    // Promise 也可以 then链
    const fileAPromise = new Promise((resolve, reject) => {
        fs.readFile('./a.txt', 'utf8', function(err, data) {
            if(err) {
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
    const fileBPromise = new Promise((resolve, reject) => {
        fs.readFile('./b.txt', 'utf8', function(err, data) {
            if(err) {
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
    fileAPromise.then(resa => {
        console.log(resa)
        return fileBPromise
    }).then(resb => {
        console.log(resb)
    }).catch(err => {
        console.log(err);
    })
    Promise.all([fileAPromise, fileBPromise])
    .then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
    // const dataA = fs.readFileSync('./a.txt', 'utf8');
    // const dataB = fs.readFileSync('./b.txt', 'utf8')
} catch (error) {
    console.log(error)
}