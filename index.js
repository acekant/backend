const express = require("express")
require("dotenv").config()
const app = express()

const port = process.env.PORT || 4000

app.get("/", (req,res) => {
    res.send("Hello World!")
})

app.get("/youtube", (req,res) => {
    res.send("<h2>Chai aur code</h2>")
})

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
})