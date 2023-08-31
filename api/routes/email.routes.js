const { sendEmail } = require('../controller/email.controller')

const router = require('express').Router()

/***
 *
 * Sending Email Router
 */

router.post('/sendEmail', sendEmail)

module.exports = router
