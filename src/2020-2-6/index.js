var express = require('express');
var app = express();

// view engine setup, 默认会从目录下的 views 文件夹中寻找 .art 文件. 如果需要改成 .html 文件可以将 art 改成 html 即可.
app.engine('html', require('express-art-template'));

// routes
app.get('/', function (req, res) {
    res.render('extend.html')
});

app.listen('3000', function () {  
  console.log(3000);
})