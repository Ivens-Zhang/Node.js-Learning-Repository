const mongoose = require('mongoose');
var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true
});

//设计表架构
var schema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
  }
});

/**
 *  将文档结构发布为模型
 *    mongoose.model 方法就是用来将一个架构发布为 model
 *    第一个参数: 传入一个大写名词单数字符串用来表示你的数据库名称, mongoose 会自动生成小写负数的集合
 *                例如: User => users
 *    第二个参数: 架构 Schema
 *    返回值: 模型构造函数
 */
var User = mongoose.model('User', schema);


/**
 *  有了模型构造函数可以新建数据
 */
var admin = new User({
  username: 'admin',
  password: '123',
  email: 'aaa.@163.com'
})

// admin.save().then(() => console.log('保存成功'));

// 查询
// User.find().then((res) => console.log(res))

// 按条件查询
// User.find({
//   username: 'admin'
// }).then((res) => {
//   console.log(res);
// })

// 删除
// User.remove({
//   username: 'admin'
// }).then((res) => {
//   console.log('删除成功');
// })

// 根据 id 修改数据
User.findByIdAndUpdate('5e3985478aa7094f2ccb122f', {
  username: 'admin1'
}).then((res) => {
  console.log(res);
})