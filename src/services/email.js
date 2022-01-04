const mail = require('nodemailer')

const emailConfig = require('../configs/email')

const transporter = mail.createTransport(emailConfig)

module.exports.mail = transporter