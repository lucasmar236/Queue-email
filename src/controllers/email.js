const {mail} = require('../services/email')


async function sendMail(req,res){
    try {
        const {to,subject,text} = req.body

        try {
            if(to.length > 0){
              var destination = to.join(',')
              console.log(destination)
            }
        }catch{
            res.status(400).send({success: false})
        }

        let info = await mail.sendMail({
            from: process.env.FROM_EMAIL, // sender address
            to: "bar@example.com, baz@example.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        })
        console.log("Message sent: %s", info.messageId);

        res.status(201).send({success: true, message: "E-mail created and sent successfully"})
    }catch (e){
        console.log(e)
        res.status(500).send({success: false, error: "Error sending the e-mail"})
    }
}

module.exports.sendMail = sendMail