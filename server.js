const express = require("express")
const server = express()
require("dotenv").config()
const bodyParser = require("body-parser")
const port = process.env.PORT
 
server.use(bodyParser.json())

server.get("/",(req,res)=>{
    return res.send("server is running")
})
server.use("/api",require("./routes"))

server.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})
