var express = require('express')
var fs = require('fs')
var Student = require('./student')

var router = express.Router()

/**
 * 学生后台首页
 */
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
})

/**
 * 进入新增学生页面
 */
router.get('/students/new', function (req, res) {  
  res.render('new.html')
})

/**
 *  新增完毕点击确认发送数据
 */
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

/**
 *  进入修改学生信息页面
 */
router.get('/students/edit', function (req, res) {  
  Student.findById(Number(req.query.id), function (err, student) {  
    if (err) {
      console.log(err);
    }
    res.render('edit.html', {
      student
    })
  })
})

/**
 *  修改完成确认发送信息
 */
router.post('/students/edit', function (req, res) { 
  Student.edit(req.body, function (err) {  
    if (err) {
      return console.log("2222222222222");
    }
  })
  res.redirect('/students')
})

/**
 *  删除学生
 */
router.get('/students/delete', function (req, res) {  
  console.log(req.query.id);
  Student.remove(req.query.id, function (err) {  
    if (err) {
      return console.log(err);
    }
    res.redirect('/students')
  })
})

module.exports = router
