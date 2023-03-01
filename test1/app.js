const express = require('express')
const connectToDatabase = require('./dbconfig')
const products = require('./model')
const app = express()

connectToDatabase();

app.get('/',(req,res)=>{
    products.find({},(err,data)=>{
        if(err){
            console.log(err)
            res.send('error')
        }else{
            console.log(data)
            res.send(data)
        }
    })
})



app.listen(4000,()=>{
    console.log('Server is running')
})

