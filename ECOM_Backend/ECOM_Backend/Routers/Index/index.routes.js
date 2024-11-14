const express = require('express')
const route = express.Router()

const userRoute = require('../user.routes')

route.use('/user' , userRoute)

module.exports = route