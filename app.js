const express = require('express')
const app = express()
const mongoose = require('mongoose')

const pathRoutes = require('./routes/post')
const key = require('./models/key')

mongoose.connect(key.dbKey,()=>{
    console.log("Database is connected")
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/',pathRoutes)

app.get('/',(req,res)=>{
    res.send("Hello")
})


app.listen(4000,()=>{
    console.log("server running")
})
