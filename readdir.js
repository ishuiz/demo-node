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
