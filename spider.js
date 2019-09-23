const http = require('https')
const fs = require('fs')
const cheerio = require('cheerio')

const url = 'https://www.baidu.com'

http.get(url, res => {
  const { statusCode } = res
  const contentType = res.headers['content-type']

  let err = null
  if (statusCode !== 200) {
    err = new Error('Request Failed')
  } else if (!/^text\/html/.test(contentType)) {
    err = new Error('Invalid content-type')
  }

  if (err) {
    console.error(err.message)
    // 清除缓存
    res.resume()
    return
  }

  let rawData = ''
  res.on('data', chunk => {
    rawData += chunk
  })

  res.on('end', () => {
    // fs.writeFile('./baidu.html', rawData, (err) => {
    //   if (err) {
    //     console.log(err)
    //     return
    //   }
    // })
    const $ = cheerio.load(rawData)
    $('img').each((index, el) => {
      console.log($(el).attr('src'))
    })
  })
}).on('error', () => {
  console.log('error')
})
