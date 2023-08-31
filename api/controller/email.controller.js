const nodemailer = require('nodemailer')
const config = require('config')

// const SERVICE_PROVIDER = config.get('SERVICE_PROVIDER')
// const SERVICE_USER = config.get('SERVICE_USER')
// const SERVICE_PASSWORD = config.get('SERVICE_PASSWORD')

const transporter = nodemailer.createTransport({
  service: 'gmail', // e.g., Gmail, Yahoo
  auth: {
    user: 'derichey9@gmail.com',
    pass: 'drchey12345',
  },
})

const sendEmail = async (req, res) => {
  const { name, email, message } = req.body

  const mailOptions = {
    from: 'derichey9@gmail.com',
    to: 'derichey9@gmai.com',
    subject: 'New Contact Form Submitted',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error)
      res.status(500).send('Error sending email')
    } else {
      console.log('Email sent: ' + info.response)
      res.status(200).send('Email sent successfully')
    }
  })
}

module.exports = { sendEmail }
