var express = require('express')
var fs = require('fs')
var Student = require('./student')

var router = express.Router()

router.get('/students', function (req, res) {  
  Student.find(function (err, students) {  
    if (err) {
      return console.log(err);
    }
    res.render('index.html', {
      fruits: ['苹果', '香蕉', '橘子', '菠萝'],
      students
    })
  })
  
  // fs.readFile('./db.json', 'utf8', function (err, data) {  
  //   if (err) {
  //     return console.log('数据库读取失败');
  //   }
  //   // console.log(data);
  //   var students = JSON.parse(data).students
  //   res.render('index.html', {
  //     fruits: ['苹果', '香蕉', '橘子', '菠萝'],
  //     students
  //   })
  // })
})


router.get('/students/new', function (req, res) {  
  res.render('new.html')
})
router.post('/students/new', function (req, res) {  
  console.log( req.body );
  var student = req.body
  Student.save(student, function (err) {  
    if (err) {
      return console.log(err);
    }
  }) 
  res.redirect('/students')
})
router.get('/students/edit', function (req, res) {  

})
router.post('/students/edit', function (req, res) {  

})
router.get('/students/delete', function (req, res) {  

})

module.exports = router