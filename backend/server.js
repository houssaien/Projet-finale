const express = require("express")
const { ObjectID, MongoClient } = require("mongodb")
const multer = require("multer")
const cors = require("cors")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")


const app = express()
app.use(bodyParser.json())
const MongoUrl = "mongodb://localhost:27017"
const database = "badelgiti"
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/uploads")
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname)
  }
})
const upload = multer({
  storage
})
app
  .use(cors())
  .use(express.static("public"))
  .post("/upload", upload.single("image"), (req, res) => {
    if (req.file)
      res.json({
        imageUrl: `images/uploads/${req.file.filename}`
      })
    else res.status("409").json("No Files to Upload.")
})
MongoClient.connect(MongoUrl, { useNewUrlParser: true }, (err, client) => {
    err ? console.log("can not connect to database") : (db = client.db(database))
    
 
 
 
 
    app.post("/add-don", (req, res) => {
      let newactu = req.body
      db.collection("don").insertOne(newactu, (err, data) => {
        err ? res.send("cant not add list") : res.send(data)
      })
  })
 
 
 
 
 
 
 
 
 
 
   })


 
app.listen(3055,(err)=>{

console.log('the server is running on port 3055')
})
