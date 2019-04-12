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


 




MongoClient.connect(MongoUrl,{useNewUrlParser:true},(err,client)=>{
    assert.equal(null,err,'can not connect to database')
    const db=client.db(database)


    //--------------------------Users----------------------------
   //add users
app.post('/add-user',(req,res)=>{
    let newuser=req.body
    db.collection('users').insertOne(newuser,(err,data)=>{
        if(err) res.send('cant not add user')
        else res.send(data)
    })
})


     // get user
app.get('/get-user',(req,res)=>{

    db.collection('users').find().toArray((err,data)=>{
         if(err) res.send('can not get user')
        else res.send(data)
    })   
    })
//remove user
app.delete('/delete-user/:id',(req,res)=>{
    let id=ObjectID(req.params.id)
    db.collection('users').findOneAndDelete({_id:id},(err,data)=>{
        if (err) res.send('can not delete user')
        else res.send(data)
    })
})
//edit user
app.put('/edit-user/:id',(req,res)=>{
    let id=ObjectID(req.params.id)
    let updated=req.body
db.collection('users').findOneAndUpdate({_id:id},{$set:{...updated}},(err,data)=>{
    if(err) res.send('can not edit the user')
    else res.send (data)
})
})  
  
     //-------------------------services--------------------------
    //add services
app.post('/add-service',(req,res)=>{
    let newservice=req.body
    db.collection('services').insertOne(newservice,(err,data)=>{
        if(err) res.send('cant not add service')
        else res.send(data)
    })
})


     // get service
app.get('/get-service',(req,res)=>{

    db.collection('services').find().toArray((err,data)=>{
         if(err) res.send('can not get service')
        else res.send(data)
    })   
    })
//remove service
app.delete('/delete-sevice/:id',(req,res)=>{
    let id=ObjectID(req.params.id)
    db.collection('services').findOneAndDelete({_id:id},(err,data)=>{
        if (err) res.send('can not delete service')
        else res.send(data)
    })
})
//edit service
app.put('/edit-service/:id',(req,res)=>{
    let id=ObjectID(req.params.id)
    let updated=req.body
db.collection('services').findOneAndUpdate({_id:id},{$set:{...updated}},(err,data)=>{
    if(err) res.send('can not edit the service')
    else res.send (data)
})
})

        //---------------------events------------------------------
//add events
app.post('/add-event',(req,res)=>{
    let newevent=req.body
    db.collection('events').insertOne(newevent,(err,data)=>{
        if(err) res.send('cant not add event')
        else res.send(data)
    })
})
 // get event
 app.get('/get-event',(req,res)=>{

    db.collection('events').find().toArray((err,data)=>{
         if(err) res.send('can not get event')
        else res.send(data)
    })   
    })

 //remove service
app.delete('/delete-sevice/:id',(req,res)=>{
    let id=ObjectID(req.params.id)
    db.collection('servicess').findOneAndDelete({_id:id},(err,data)=>{
        if (err) res.send('can not delete service')
        else res.send(data)
    })
})
//edit event
app.put('/edit-event/:id',(req,res)=>{
    let id=ObjectID(req.params.id)
    let updated=req.body
db.collection('events').findOneAndUpdate({_id:id},{$set:{...updated}},(err,data)=>{
    if(err) res.send('can not edit the event')
    else res.send (data)
})
})

})


app.listen(3055,(err)=>{
    assert.equal(null,err,'server not running')
    console.log('the server is running on port 3055')
    })
    
