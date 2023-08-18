const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body

  const transporter = nodemailer.createTransport({
    service: 'your-email-service-provider',
    auth: {
      user: 'your-email@example.com',
      pass: 'your-email-password',
    },
  })

  const mailOptions = {
    from: 'your-email@example.com',
    to: 'destination@example.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error)
      res.status(500).send('Error sending email')
    } else {
      console.log('Email sent:', info.response)
      res.status(200).send('Email sent successfully')
    }
  })
})

app.listen(3001, () => {
  console.log('Server is running on port 3001')
})
