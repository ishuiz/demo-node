const fs = require('fs')

// 同步读取目录
// try {
//   let dirs = fs.readdirSync('./')
//   console.log(dirs)
// } catch (err) {
//   console.log(err)
// }


// 异步读取
fs.readdir('./', (err, data) => {
  console.log(err)
  console.log(data)
})

fs.mkdir('./test', (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('创建成功')
})

// fs.rename('./test', './test01', (err) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log('修改成功')
// })

// 只能删除空的
fs.rmdir('./test01', (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('删除成功')
})
