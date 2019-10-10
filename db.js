const mongoose = require('mongoose')

mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true })

const db = mongoose.connection

db.on('error', ()=> {
  console.log('connection error')
})

db.once('open', () => {
  console.log('connected')
})

// 创建 Schema
const userSchema = new mongoose.Schema({
  us: { type: String, required: true },
  ps: { type: String, required: true },
  age: Number,
  gender: { type: Number, default: 0 }
})

// 将 Schema 编译成 Model
const User = mongoose.model('User', userSchema)

// User.insertMany({us: 'lee', ps: '123'}).then(data => {
//   console.log('插入成功')
//   console.log(data)
// }).catch(err => {
//   console.log(err)
// })

// User.find().then(data => {
//   console.log('查询成功')
//   console.log(data)
// }).catch(err => {
//   console.log(err)
// })

User.deleteMany().then(data => {
  console.log('删除成功')
  console.log(data)
}).catch(err => {
  console.log(err)
})