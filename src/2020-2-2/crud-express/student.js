var fs = require('fs')

const dbPath = './db.json'

/**
 * 获取所有学生列表
 */
exports.find = function (callback) {  
  fs.readFile(dbPath, 'utf8', function (err, data) {  
    if (err) {
      return callback(err)
    }
    callback(null, JSON.parse(data).students)
  })
}

/**
 * 将新增学生保存到 db.json
 */
exports.save = function (student, callback) {  
  fs.readFile(dbPath, 'utf8', function (err, data) {  
    if (err) {
      return callback(err)
    }
    var students = JSON.parse(data).students

    // 处理 id 使它不重复
    student.id = students[students.length - 1].id + 1

    // 将用户传递的对象保存到数组中
    students.push(student)

    // 把对象数据转换为字符串
    var fileData = JSON.stringify({students})

    // 将字符串写入 db.json
    fs.writeFile(dbPath, fileData, function (err) {  
      if (err) {
        return console.log('数据库写入失败');
      }
    })
  })
}

/**
 * 确定修改学生信息
 */
exports.edit = function (student, callback) {  
  fs.readFile(dbPath, 'utf8', function (err, data) {  
    if (err) {
      callback(err)
    }
    var students = JSON.parse(data).students

    student.id = parseInt(student.id)
    student.age = parseInt(student.age)
    student.gender = parseInt(student.gender)
    
    var stu = students.find(function (item) {  
      return item.id === student.id
    })
    
    for (var key in student) {
      stu[key] = student[key]
    }

    // 把对象数据转换为字符串
    var fileData = JSON.stringify({students})
    
    // 将字符串写入 db.json
    fs.writeFile(dbPath, fileData, function (err) {  
      if (err) {
        return console.log('数据库写入失败');
      }
    })
  })
}

/**
 *  按照 id 获取特定学生信息
 */
exports.findById = function (id, callback) { 
  fs.readFile(dbPath, 'utf8', function (err, data) {  
    if (err) {
      return console.log(err);
    }
    var students = JSON.parse(data).students
    var student = students.find(function (item) {
      console.log(id + '!!!')
      return item.id === id
    })
    callback(null, student)
  })
}

/**
 *  根据 id 删除学生信息
 */
exports.remove = function (id, callback) {  
  fs.readFile(dbPath, 'utf8', function (err, data) {  
    if (err) {
      callback(err)
    }
    var students = JSON.parse(data).students
    var studentIndex = students.findIndex(function (item) {  
      return item.id === parseInt(id)
    })
    students.splice(studentIndex, 1)
    
    // 把对象数据转换为字符串
    var fileData = JSON.stringify({students})
    
    // 将字符串写入 db.json
    fs.writeFile(dbPath, fileData, function (err) {  
      if (err) {
        return console.log('数据库写入失败');
      }
      callback(null)
    })
    
  })
}