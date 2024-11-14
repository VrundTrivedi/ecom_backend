const { validationResult } = require("express-validator")
const { crypto_decrypt } = require("../../Utils/crypto.utils")
const userModel = require("../../Model/userModel")


const edit_userController = async(req,res)=>{
    try {
        const validation_err = validationResult(req)
        console.log(validation_err.array())
        if(!validation_err.isEmpty()){
            const msg = validation_err.array().map( error => error.msg )
            return res.status(422).send({ success : false , data : { message : msg } })
        }

        const data = req.body

        const oldData = await userModel.find({ username : data.username })

        console.log(oldData)

        const decryptedPass = await crypto_decrypt(data.password)

        


        return res.status(200).send({ success : true , data : { message : "New User Added..." } })
        
    } catch (error) {
        console.log("At Add User: \n" , error)
        res.status(500).send({ success : false , data : { message : error.message } })
    }
}

module.exports = edit_userController