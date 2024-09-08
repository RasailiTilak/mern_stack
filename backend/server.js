// const express = require('express')
// //import express from "express"
// // USE dot env
// require('dotenv').config()

// const app = express()
// //const port = 3000
// const githubdata={
//     "message": "Not Found",
//     "documentation_url": "https://docs.github.com/rest",
//     "status": "404"
//   }

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/hello',(req,res)=>{

//   res.send('hello -- From the hello routes')
// })

// // send some json  from server
// app.get('/git',(req,res)=>{
//     res.json({
//         "message": "Not Found",
//         "documentation_url": "https://docs.github.com/rest",
//         "status": "404"
//       })


// })


// app.listen(process.env.PORT, () => {
//   console.log(`Example app listening on port ${process.env.PORT}`)
// })



//======================================================== class 2


//  actually express work as common js so that to perform as the moudle js we have changes on the package.json
//  "type": "module",
import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// get a list of  5 jokes
app.get('/jokes', (req, res) => {
    const jokes = [
        { id: 1, joke: "Why don’t scientists trust atoms? Because they make up everything!" },
        { id: 2, joke: "Why did the scarecrow win an award? Because he was outstanding in his field!" },
        { id: 3, joke: "What’s orange and sounds like a parrot? A carrot!" },
        { id: 4, joke: "Why don’t skeletons fight each other? They don’t have the guts!" },
        { id: 5, joke: "What did the fish say when it hit the wall? Dam!" }
    ];
    
    res.json(jokes);
});







const port=process.env.PORT || 3000;


app.listen(port,()=>{
    console.log(`server at the http://localhost:${port}`);
});