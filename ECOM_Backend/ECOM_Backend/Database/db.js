const mongoose = require('mongoose')

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected With Database...")
    } catch (error) {
        console.log("At Database Connection :\n", error)
    }
}

module.exports = connectDB