// 1. 使用 require 方法加载 fs 核心模块
var fs = require('fs')

// 2. 读取文件
// fs.readFile(path[, options], callback)
// path <string> | <Buffer> | <URL> | <integer> filename or file descriptor
// options <Object> | <string>
// encoding <string> | <null> Default: null
// flag <string> See support of file system flags. Default: 'r'.
// callback <Function>
// err <Error>
// data <string> | <Buffer></Buffer>
fs.readFile('../../README.md', function (err, data) {
  if (err) {
    console.log(err)
  } else {
    console.log(data.toString())
  }
})
