const express = require('express')

const app = express()

// http://localhost:3000/user/login
app.get('/user/login', (req, res) => {
  res.send({err: '000000', msg: 'ok'})
})

app.listen(3000, () => {
  console.log('server start')
})
