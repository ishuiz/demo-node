const fs = require('fs')

// 创建文件 覆盖写入
fs.writeFile('name.txt', '笑一笑', (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('创建成功')
})

// 写入文件
fs.appendFile('name.txt', '笑一笑', (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('写入成功')
})

// 读取文件
fs.readFile('name.txt', (err, data) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(data.toString('utf8'))
})

fs.readFile('name.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(data)
})

// 删除文件
fs.unlink('name.txt', (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('删除成功')
})
