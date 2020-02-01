// 1. 引包
var express = require('express')

// 2. 创建你的服务器应用程序
//      也就是原来的 http.createServer()
var app = express()

// 3. 对路径进行判断
app.get('/', function (req, res) {  
  res.send('hello express!')
})

app.get('/about', function (req, res) {  
  res.send('这是 about 页面!')
})

/*
  4. 指定公开目录
  指定开放的目录，即可访问此目录下的所有文件。
  
  公开目录的三种方式：
  
  1.可以访问此目录下的文件资源 , 即 http://localhost:3000/static/home.html
  app.use('/static/',express.static('./static')); ---> 用的多

  2.当没有第一个参数时，访问时也要删除第一个参数 , 即 http://localhost:3000/home.html
  app.use(express.static('./static'));

  3.可以给目录起别名 即 http://localhost:3000/public/home.html 即 static 的别名是 public
  app.use('/public/',express.static('./static'));

*/
app.use('/public/', express.static('./public'))

// 相当于 server.listen()
app.listen(3000, function () {  
  console.log('正在侦听 3000 端口');
})