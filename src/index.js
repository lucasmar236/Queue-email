require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const router = require('./services/router')

const app = express()

app.use(bodyParser.json())
app.use(morgan('combined'))
app.use('/public',router)

app.use((req, res) => {
    res.status(404).send({
        success: false,
        message: "Route not found"
    })
})

app.listen(process.env.HTTP_PORT, () => console.log(`Application started on ${process.env.HTTP_PORT}`))