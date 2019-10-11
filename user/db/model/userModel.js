const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  us: { type: String, required: true },
  ps: { type: String, required: true },
  age: Number,
  gender: { type: Number, default: 0 }
})

// 将 Schema 编译成 Model
const User = mongoose.model('user', userSchema)

module.exports = User
