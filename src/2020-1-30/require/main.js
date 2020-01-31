console.log('主函数开始执行');

// 引入本目录下的 a.js 文件, 拓展名可省略
var aRequire = require('./a')

// 打印 a.js 中 exports 的 add 方法的结果
console.log(aRequire.add(1, 2));

console.log('主函数结束执行');