const fs = require('fs')

fs.stat('./', (err, stats) => {
  if (err) {
    console.log(err)
    return
  }
  if (stats.isFile()) {
    console.log('is file')
  } else {
    console.log('is dir')
  }
})
