const url = require('url')

const urlString = 'https://www.bilibili.com/video/av53978941?p=7'

const urlObj = url.parse(urlString)

console.log(urlObj)

const string = url.format({
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'www.bilibili.com',
  port: null,
  hostname: 'www.bilibili.com',
  hash: null,
  search: '?p=7',
  query: 'p=7',
  pathname: '/video/av53978941',
  path: '/video/av53978941?p=7',
  href: 'https://www.bilibili.com/video/av53978941?p=7'
})

console.log(string)
