const express = require('express')
//import express from "express"
// USE dot env
require('dotenv').config()

const app = express()
//const port = 3000
const githubdata={
    "message": "Not Found",
    "documentation_url": "https://docs.github.com/rest",
    "status": "404"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hello',(req,res)=>{

  res.send('hello -- From the hello routes')
})

// send some json  from server
app.get('/git',(req,res)=>{
    res.json({
        "message": "Not Found",
        "documentation_url": "https://docs.github.com/rest",
        "status": "404"
      })


})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})