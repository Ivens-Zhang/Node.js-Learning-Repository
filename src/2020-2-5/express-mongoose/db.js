var mongoose = require('mongoose')
var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost:27017/student', {
  useNewUrlParser: true
})

var student = mongoose.model('normalStudent', new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: Number,
    required: true
  },
  hobbies: {
    type: String,
    required: true
  }
}))

var studentTest1 = new student({
  name: 'Tom',
  age: 12,
  gender: 0,
  hobbies: '打篮球'
})

// studentTest1.save().then(res => console.log(res)).catch(err => console.log(err))


exports.find = function (callback) {  
  // 查询学生信息
  student.find().then(res => {
    callback(null, res)
  }).catch(err => {
    callback(err)
  })
}

exports.delete = function (id, callback) {  
  student.remove({
    _id: id
  }).then(res => {
    callback(null)
  }).catch(err => {
    callback(err)
  })
}

exports.add = function (student1, callback) {  
  var studentAdd = new student({
    name: student1.name,
    age: parseInt(student1.age),
    gender: parseInt(student1.gender),
    hobbies: student1.hobbies
  })

  studentAdd.save().then(res => {
    callback(null)
  }).catch(err => {
    callback(err)
  })
}

exports.findById = function (id, callback) {  
  student.findById(id, (err, res) => {
    if (err) {
      callback(err)
    }
    callback(null, res)
  })
}

exports.edit = function (student1, callback) {  
  console.log(student1);
  student.findByIdAndUpdate(student1.id, {
    name: student1.name,
    age: parseInt(student1.age),
    gender: parseInt(student1.gender),
    hobbies: student1.hobbies
  }).then(res => {
    console.log('修改成功');
  }).catch(err => {
    callback(err)
  })
}