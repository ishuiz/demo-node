const express = require('express')

const app = express()

// 局部中间件 可以添加多个
app.get('/test1', (req, res, next) => {
  console.log('fun1')
  const { token } = req.query
  if (token) {
    next()
  } else {
    res.send('no token')
  }
}, (req, res) => {
  console.log('test1')
  res.send('ok')
})

app.listen(3000, () => {
  console.log('server start')
})
