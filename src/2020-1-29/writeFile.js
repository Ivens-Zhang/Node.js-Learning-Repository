// 1. 使用 require 方法加载 fs 核心模块
var fs = require('fs')

// 2. 写入文件
fs.writeFile('write.txt', '这是用来写入的 txt 文件!', 'utf8', function (err) {
  if (err) {
    console.log(error)
  } else {
    console.log('成功写入数据!')
  }
})