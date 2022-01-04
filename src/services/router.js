const {Router} = require('express')
const rt = new Router()

const controllers = require('../controllers/email')

rt.route('/emails').post(controllers.sendMail)

module.exports = rt