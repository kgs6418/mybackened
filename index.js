require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT

const exampleData={"menu": 
{  
  "id": "file",  
  "value": "File",  

  "popup": {  
    "menuitem": [  
      {"value": "New", "onclick": "CreateDoc()"},  
      {"value": "Open", "onclick": "OpenDoc()"},  
      {"value": "Save", "onclick": "SaveDoc()"}  
    ]  
  }  
}}  

app.get('/github',(req,res)=>{
  res.send(exampleData.menu.id)
})

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