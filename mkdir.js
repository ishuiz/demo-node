const fs = require('fs')

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
