const { validationResult } = require("express-validator")
const { crypto_encrypt } = require("../../Utils/crypto.utils")
const userModel = require("../../Model/userModel")
const { generateToken } = require("../../Utils/jwt.utils")


const addUserController = async(req,res)=>{
    try {
        const validation_err = validationResult(req)
        console.log(validation_err.array())
        if(!validation_err.isEmpty()){
            const msg = validation_err.array().map( error => error.msg )
            return res.status(422).send({ success : false , data : { message : msg } })
        }

        const data = req.body

        const newUser = userModel(data)

        data.password = await crypto_encrypt(data.password)

        console.log(newUser._id)

        const token = await generateToken({_id : newUser._id})

        if(!token){
            return res.status(400).send({ success : false , data : { message : "Something Went Wrong..." } })
        }

        await newUser.save()


        return res.status(200).send({ success : true , data : { message : "New User Added..." , token : `Bearer ${ token }` } })
        
    } catch (error) {
        console.log("At Add User: \n" , error)
        res.status(500).send({ success : false , data : { message : error.message } })
    }
}

module.exports = addUserController