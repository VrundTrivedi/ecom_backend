const crypto = require('crypto-js')
require('dotenv').config()


const secretKey = process.env.CRYPTO_SECRETKEY

const crypto_encrypt = ( data )=>{
    try {
        const encryptedData = crypto.AES.encrypt(data , secretKey).toString()
        return encryptedData
    } catch (error) {
        console.log("At Crypto Encryption: \n" , error)
    }
}

const crypto_decrypt = ( data )=>{
    try {
        const decryptedPass = crypto.AES.decrypt(data , secretKey).toString(crypto.enc.Utf8)
        return decryptedPass
    } catch (error) {
        console.log("At Crypto Decryption : \n" , error)
    }
}

module.exports = { crypto_encrypt , crypto_decrypt }