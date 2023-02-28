const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://shilpa2468:shilpa2468@cluster0.unwlntb.mongodb.net/?retryWrites=true&w=majority'

const app = express()

mongoose.connect(url)
const con = mongoose.connection

con.on('open', () => {
    console.log('connected')
})

app.use(express.json())

const empRouter=require('./routes/emp')
app.use('/emp',empRouter)

app.listen(9000, err => {
    if (!err) {
        console.log('App is running on port 9000')
    }
    else {
        console.log('Failed to start server')
    }
})