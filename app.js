const express = require("express")
const path = require("node:path")

const app = express()
const PORT = 3000

// setup templating with ejs
app.set("views",path.join(__dirname,"views"))
app.set("view engine", "ejs")

// set assets/static files path
const assetsPath = path.join(__dirname, "public")
app.use(express.static(assetsPath))

// setup messages
const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
  
app.get("/", (req,res)=>{
    res.render("index",{title:"Mini Messageboard", messages: messages})
})

app.get("/new",(req,res)=>{
    res.render("form",{title: "Mini Messageboard"})
})

app.listen(PORT,()=>{
    console.log(`Listening through port ${PORT}`)
})