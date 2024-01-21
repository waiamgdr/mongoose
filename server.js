const express=require("express")
const mongoose=require("mongoose")
const app=express()
const dotenv=require("dotenv")
dotenv.config()
const Port=process.env.Port
console.log(Port)
app.use(express.json())


app.listen(Port,(err)=>{err?console.log(err):console.log("serveur is rining in " +Port)})

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })  .then(() => {
    console.log('Database connection successful')
  })
  .catch(err => {
    console.error('Database connection error')
  })