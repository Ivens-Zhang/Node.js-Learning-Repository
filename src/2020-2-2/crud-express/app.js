var express = require('express')
var router = require('./router')
var bodyParser = require('body-parser')

var app = express()

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser({
  'Content-Type': 'application/x-www-form-urlencoded'
}));

app.engine('html', require('express-art-template'));

app.use('/public/', express.static('./public'))
app.use('/node_modules/', express.static('./node_modules'))

// 将路由容器挂载到 app 服务中
app.use(router)



app.listen('3000', function () {  
  console.log('正在侦听 3000 端口');
})