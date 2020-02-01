var express = require('express')

var app = express()

app.use('/public/', express.static('./public'))

app.get('/', function () {  
  app.send('Hello Node')
})

app.listen('3000', function () {  
  console.log('正在侦听 3000 端口');
})