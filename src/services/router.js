const {Router} = require('express')
const rt = new Router()

rt.route('/').get((req, res) => {
    res.status(200).send({success: true, message: "teste"})
})


module.exports = rt