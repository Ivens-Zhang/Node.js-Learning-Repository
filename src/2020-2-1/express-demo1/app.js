var express = require('express')

var app = express()

app.use('/public/', express.static('./public'))

// view engine setup
app.engine('html', require('express-art-template'));

// app.set('view', {
//     debug: process.env.NODE_ENV !== 'production'
// });
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'art');

// // routes
// app.get('/', function (req, res) {
//     res.render('index.art', {
//         user: {
//             name: 'aui',
//             tags: ['art', 'template', 'nodejs']
//         }
//     });
// });

app.get('/', function (req, res) {  
  // 如果不对配置进行修改, 则默认从 views 文件夹中寻找文件
  res.render('index.html')
})

app.get('/404', function (req, res) { 
  console.log(req.query); 
  var userInfo = req.query
  res.render('404.html')
})


app.listen('3000', function () {  
  console.log('正在侦听 3000 端口');
})