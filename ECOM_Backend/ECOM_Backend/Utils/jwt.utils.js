const jwt = require('jsonwebtoken')
require('dotenv').config()

const jwt_secretkey = process.env.JWT_SECRETKEY

const generateToken = (data)=>{
    try {
        const token = jwt.sign(data , jwt_secretkey , { expiresIn : '1d' })        
        return token;
    } catch (error) {
        console.log("At Generate Token: \n" , error)
    }
}

const decryptToken = (token)=>{
    try {
        const decryptedToken = jwt.verify(token , jwt_secretkey)
        return decryptedToken
    } catch (error) {
        console.log("At Decryption Token: \n" , error)
    }
}

module.exports = { generateToken , decryptToken }