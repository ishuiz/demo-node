const mongoose = require('mongoose')

mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true })

const db = mongoose.connection

db.on('error', ()=> {
  console.log('connection error')
})

db.once('open', () => {
  console.log('connected')
})
