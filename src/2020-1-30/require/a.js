console.log('现在执行 a.js');

// 定义一个 add 函数
var add = function (a, b)  {  
  return a + b;
}

// 将 add 函数挂载到 exports 上
exports.add = add

console.log('结束执行 a.js');