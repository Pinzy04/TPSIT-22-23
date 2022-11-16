const express=require('express')
const app=express()
const fs=require('fs')
let path=require('path')
let bodyParser=require('body-parser')

let Port =5000

app.use(bodyParser.urlencoded({extended:false}))
app.get('/',function(req,res){

  res.sendFile(__dirname+"/index.html")
  
})
app.get('/version', function(req,res){

  res.send(" version 0.1 ")
})
app.get('/login', function(req,res){

  res.send(" version 0.1 ")
})

app.get('/chat', function(req,res){

  res.send(" version 0.1 ")
})

let jsonData=require('./data/chat.json')
console.log(jsonData)
console.log(jsonData.message)


app.listen(Port, function(req,res){
 console.log("server listening on "+Port)
 
})