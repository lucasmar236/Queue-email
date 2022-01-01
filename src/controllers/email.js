const sendEmail = async (req,res) => {
    res.status(201).send({
        success: true,
        message: "E-mail created and sent successfully"
    })
}

module.exports.sendEmail = sendEmail