const {Router} = require('express')
const rt = new Router()
const mail = require('../controllers/email')

rt.route('/emails').post(mail.sendMail)


module.exports = rt