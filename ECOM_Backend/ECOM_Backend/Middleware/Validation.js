const userModel = require('../Model/userModel')

const body = require('express-validator').body

const userValidation = [
    body('username' , 'Username Must Be Required...').not().isEmpty(),
    body('password' , 'Password Must Be Required...').not().isEmpty(),
    body('password' , 'Minimum 6 Word Length Password Required...').isLength({min : 6}),
    body('role' , "Role Must Be Required...").not().isEmpty(),
    body('username').custom(async(value) =>{
        const isExist = await userModel.countDocuments({ username : value })
        console.log(isExist)
        if(isExist > 0){
            throw new Error("Username Already Exists...")
        }
        return true
    })
]

module.exports = { userValidation }