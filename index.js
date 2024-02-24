require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("hello gaurav twitter")
})

app.get('/gmail',(req,res)=>{
    res.send("hello gaurav gmail")
})
app.get('/facebook',(req,res)=>{
    res.send("hello from facebook")
})



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})