const express = require("express")

const mongoose = require("mongoose")

const cors = require("cors")
require("dotenv").config()
const routes =  require("./routes/TaskRoute")
const app = express()
const PORT = process.env.PORT || 5000
app.use(express.json())
app.use(cors())



mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Mongo Connected")
}).catch((err)=>console.error(err))


app.use("/api",routes)
 
app.listen(PORT,()=>{
    console.log(`Listening at ${PORT}`)
})