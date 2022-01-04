const mail = require('nodemailer')
const config = require('../configs/email')

const transporter = mail.createTransport(config)

module.exports.mail = transporter