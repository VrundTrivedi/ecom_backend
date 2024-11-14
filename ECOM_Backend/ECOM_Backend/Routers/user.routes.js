const express = require('express')
const { userValidation } = require('../Middleware/Validation')
const addUserController = require('../Controller/User/add')
const edit_userController = require('../Controller/User/edit')
const route = express.Router()

// Add User 

route.post('/add' , userValidation , addUserController )

// Edit User

route.put('/edit' , userValidation , edit_userController )

module.exports = route