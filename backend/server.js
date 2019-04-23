const express=require('express')
const bodyParser=require('body-parser')
const{ObjectID,MongoClient}=require('mongodb')
const assert=require('assert')
const multer= require('multer')
const mongoose = require('mongoose')
const cors =require('cors')
const app=express()
const passport = require("passport");

const users = require("./routes/api/users");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
const MongoUrl='mongodb://localhost:27017'
const database='badeli'

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads")
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname)
    }
  })
  const upload = multer({
    storage
  })
//-------------------uploadimage------------------
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

  const db = require("./config/keys").mongoURI;

  // Connectiong to MongoDB Mlab
  mongoose.Promise = global.Promise;
  mongoose
    .connect(db)
    .then(() => console.log("mongodb connected"))
    .catch(err => console.log(err));
  
  
// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

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
app.delete('/delete-service/:id',(req,res)=>{
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

 //remove event
app.delete('/delete-event/:id',(req,res)=>{
    let id=ObjectID(req.params.id)
    db.collection('events').findOneAndDelete({_id:id},(err,data)=>{
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


       //---------------------dons------------------------------
//add dons
app.post('/add-don',(req,res)=>{
    let newevent=req.body
    db.collection('dons').insertOne(newevent,(err,data)=>{
        if(err) res.send('cant not add dons')
        else res.send(data)
    })
})
 // get dons
 app.get('/get-dons',(req,res)=>{

    db.collection('dons').find().toArray((err,data)=>{
         if(err) res.send('can not get dons')
        else res.send(data)
    })   
    })


 //remove dons
app.delete('/delete-dons/:id',(req,res)=>{
    let id=ObjectID(req.params.id)
    db.collection('dons').findOneAndDelete({_id:id},(err,data)=>{
        if (err) res.send('can not delete don')
        else res.send(data)
    })
})
//edit dons
app.put('/edit-dons/:id',(req,res)=>{
    let id=ObjectID(req.params.id)
    let updated=req.body
db.collection('dons').findOneAndUpdate({_id:id},{$set:{...updated}},(err,data)=>{
    if(err) res.send('can not edit the dons')
    else res.send (data)
})
})


       //---------------------biens------------------------------
//add biens
app.post('/add-bien',(req,res)=>{
    let newevent=req.body
    db.collection('biens').insertOne(newevent,(err,data)=>{
        if(err) res.send('cant not add biens')
        else res.send(data)
    })
})
 // get biens
 app.get('/get-biens',(req,res)=>{

    db.collection('biens').find().toArray((err,data)=>{
         if(err) res.send('can not get biens')
        else res.send(data)
    })   
    })


//get biens by id
app.get("/getbien/:id", (req, res) => {
    let id = ObjectID(req.params.id)
    db.collection("biens")
      .find({ _id: id })
      .toArray((err, data) => {
        if (err) res.send("can not get item")
        else res.send(data)
        console.log(data)
      })
})




 //remove biens
app.delete('/delete-bien/:id',(req,res)=>{
    let id=ObjectID(req.params.id)
    db.collection('biens').findOneAndDelete({_id:id},(err,data)=>{
        if (err) res.send('can not delete biens')
        else res.send(data)
    })
})
//edit biens
app.put('/edit-bien/:id',(req,res)=>{
    let id=ObjectID(req.params.id)
    let updated=req.body
db.collection('biens').findOneAndUpdate({_id:id},{$set:{...updated}},(err,data)=>{
    if(err) res.send('can not edit the biens')
    else res.send (data)
})
})

})


app.listen(3055,(err)=>{
    assert.equal(null,err,'server not running')
    console.log('the server is running on port 3055')
    })
