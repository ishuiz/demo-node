const express = require('express')

const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// http://localhost:3000/user/login
app.get('/user/login', (req, res) => {
  console.log(req.query)
  const { us, ps } = req.query
  if (us === 'lee' && ps === '123') {
    res.send({err: '000000', msg: 'ok'})
  } else {
    res.send({err: '000001', msg: 'oh no!'})
  }
})

app.get('/test', (req, res) => {
  res.send('test ok')
})

app.post('/user/reg', (req, res) => {
  // express 不能直接解析消息体, 需要借助 body-parser
  console.log(req.body)
  const { us, ps } = req.body
  if (us === '123' && ps === '123') {
    res.send({err: '000000', msg: 'ok'})
  } else {
    res.send({err: '000001', msg: 'oh no!'})
  }
})

app.listen(3000, () => {
  console.log('server start')
})
