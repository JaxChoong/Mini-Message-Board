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

app.get("/", (req,res)=>{
    res.render("index")
})

app.listen(PORT,()=>{
    console.log(`Listening through port ${PORT}`)
})