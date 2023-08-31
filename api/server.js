const express = require('express')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3000

const app = express()
app.use(bodyParser.json())

app.use('/api/send-email', require('./routes/email.routes'))

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`)
})
