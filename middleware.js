const express = require('express')

const app = express()

// 全局中间件
// 第一个参数为根路径时可以省略， 相当于 app.use((req, res, next) => {})
app.use('/', (req, res, next) => {
  console.log('中间件') // 拦截器
  const { token } = req.query
  if (token) {
    next()
  } else {
    res.send('no token')
  }
})

app.get('/test1', (req, res) => {
  console.log('test1')
  res.send('ok')
})

app.listen(3000, () => {
  console.log('server start')
})
