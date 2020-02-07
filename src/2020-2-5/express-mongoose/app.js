var express = require(`express`)

// 创建服务器应用程序
//    相当于原来的 http.createServer()
var app = express()

// 导入 body-parser 包
var bodyParser = require('body-parser')

app.use(bodyParser({
  'Content-Type': 'application/x-www-form-urlencoded'
}));

// 优先解析 views 文件夹下的 html 文件
app.engine('html', require('express-art-template'));

// 设置开放目录
app.use('/public/', express.static('./public'))
app.use('/node_modules/', express.static('./node_modules'))

// 导入 router.js 文件
var router = require('./router')
// 将路由容器挂载到 app 服务中
app.use(router)

app.listen('3000', function () {  
  console.log('正在侦听 3000 端口');
})