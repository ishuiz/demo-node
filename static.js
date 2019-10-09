const express = require('express')
const path = require('path')

const app = express()

console.log(__dirname)
// 域名:端口号 直接指向规定的静态目录
app.use(express.static(path.join(__dirname, 'test')))

app.listen(3000, () => {
  console.log('server start')
})
