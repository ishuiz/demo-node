const express = require('express')
const User = require('../db/model/userModel')

const router = express.Router()

router.post('/reg', (req, res) => {
  const { us, ps } = req.body
  if (!us || !ps) {
    res.send({err: -1, msg: '参数错误'})
    return
  }
  User.find({us}).then(data => {
    if (data.length) {
      res.send({err: -3, msg: '用户名已存在'})
    } else {
      User.insertMany({us, ps}).then(() => {  
        res.send({err: 0, msg: '注册成功'})
      }).catch(() => {
        res.send({err: -2, msg: '注册失败'})
      })
    }
  }).catch(() => {
    res.send({err: -4, msg: '内部错误'})
  })
})

router.post('/login', (req, res) => {
  const { us, ps } = req.body
  if (!us || !ps) {
    res.send({err: -1, msg: '参数错误'})
    return
  }
  User.find({us, ps}).then((data) => {
    console.log(data)
    if (data.length) {
      res.send({err: 0, msg: '登录成功'})
    } else {
      res.send({err: -2, msg: '用户名或密码错误'})
    }
  }).catch(() => {
    res.send({err: -1, msg: '登录失败'})
  })
})

module.exports = router
