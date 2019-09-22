const nodemailer = require('nodemailer')

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: testAccount.user, // generated ethereal user
    pass: testAccount.pass // generated ethereal password
  }
})

const mailObj = {
  from: '"Fred Foo 👻" <foo@example.com>', // sender address
  to: 'bar@example.com, baz@example.com', // list of receivers
  subject: 'Hello ✔', // Subject line
  text: 'Hello world?', // plain text body
  html: '<b>Hello world?</b>' // html body
}

// send mail with defined transport object
transporter.sendMail(mailObj, (err, data) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('OK')
})
