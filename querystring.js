const querystring = require('querystring')

let str = 'foo=bar&pass=123'

// querystring.encode
const obj = querystring.parse(str)

console.log(obj)

// querystring.encode
const str2 = querystring.stringify(obj, '&', ':')


console.log(str2)

const str3 = 'Q=你好？&A=OK'

console.log(querystring.escape(str3))

const str4 = 'Q%3D%E4%BD%A0%E5%A5%BD%EF%BC%9F%26A%3DOK'

console.log(querystring.unescape(str4))

console.log(querystring.encode === querystring.stringify) // true
console.log(querystring.decode === querystring.parse) // true
