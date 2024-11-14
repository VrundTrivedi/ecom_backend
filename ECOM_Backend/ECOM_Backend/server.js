const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const connectDB = require('./Database/db')
const route = require('./Routers/Index/index.routes')
require('dotenv').config()


const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use('/api/v1', route)

connectDB()

const port = process.env.PORT || 5000

app.listen(port , (error)=>{
    if(error){
        console.log("At Server.js:- \n" , error)
    }
    else{
        console.log("Server Running On:" , port)
    }
})

