var fs = require('fs')

var readA = new Promise((resovle, reject) => {
  fs.readFile('./a.txt', 'utf8', function (err, data) {  
    if (err) {
      reject(err)
    }
    resovle(data)
  })
})

var readB = new Promise((resovle, reject) => {
  fs.readFile('./b.txt', 'utf8', function (err, data) {  
    if (err) {
      reject(err)
    }
    resovle(data)
  })
})

// readA
//   .then(data => {
//   console.log(data);
//   return readB
// }).catch(err => {
//   console.log(err);
// })
//   .then(data => {
//   console.log(data);
// }).catch(err => {
//   console.log(err);
// })

// 封装 Promise 方法
function readFileP(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', function (err, data) {  
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })
}

readFileP('./a.txt').then(res => {
  console.log(res);
  return readFileP('./b.txt')
}).then(res => {
  console.log(res);
})