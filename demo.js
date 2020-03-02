// *1. 实现 (5).add(3).minus(2) 结果输出: 6
(function () {
  // if (typeof(num) !== Number) {
  //   return console.log('输入值不是数字');
  // }

  function add(n) {
    return this + n
  }

  function minus(n) {
    return this - n
  }

  Number.prototype.add = add
  Number.prototype.minus = minus
})()

console.log((5).add(3).minus(2));

// ===============================================================
// *2. 大小写转换
var str = 'abcDEFgh123你我他'
var newStr = str.replace(/[a-zA-Z]/g, function (item) {
  return item.toUpperCase() === item ? item.toLowerCase() : item.toUpperCase()
})
console.log(newStr);

// ===============================================================
// *3. 匹配字符串
var S = 'zhangyishidashuaibi',
  T = 'shuai';
(function () {
  function myIndexOf(str) {
    var _this = String(this),
      strLength = str.length,
      spliceStart = 0
    while (spliceStart + strLength < S.length) {
      var result = S.slice(spliceStart, spliceStart + strLength)
      if (result === str) {
        return spliceStart
      } else {
        spliceStart++
      }
    }
    return console.log('-1');
  }
  String.prototype.myIndexOf = myIndexOf
})()

console.log(S.myIndexOf(T));

// =================================================================
// *4. 创建函数 _new(类, 参数), 实现替代 new 的作用
function Foo(name) {
  this.name = name
}

function _new(className, ...arg) {
  var obj = {}
  obj.__proto__ === className.prototype
  className.call(obj, ...arg)
  return obj
}
var f1 = _new(Foo, 'Tom1')
console.log(f1.name);

// ==================================================================
// *5. 判断数组
var arr = [1, 2, 3]
res = arr instanceof Array
resT = typeof (arr)
console.log(res);
console.log(resT);
console.log(Array.isArray(arr));

// ==================================================================
// *6. 比较对象
var obj1 = {
  a: 1,
  b: 2
}
obj2 = {
  'a': 1,
  'b': 2
}
obj3 = {
  b: 2,
  a: 1
}

console.log(`-----------------`);
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
console.log(JSON.stringify(obj1) === JSON.stringify(obj3));

// ===============================================
var a = ['welcome', 'to', 'kunshan']
b = ['let', 'us', 'play', 'together']
console.log(...a);
console.log(...b);

// ===============================================
// *7. 指定删除字符串中特定字符
var st1 = 'nihaozhangyi'
st2 = 'yi'
// for (const item of st1) {
//   for (const item2 of st2) {
//     if (item === item2) {
//       st1 = st1.replace(item, '')
//     }
//   }
// }

for (let itemst2 of st2) {
  st1 = st1.replace(itemst2, '')
  // replace 方法只能替换第一个匹配的字符.
}
console.log(st1);