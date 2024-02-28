import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import express from 'express';
const app = express();
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
var cors = require('cors')




mongoose
  .connect(
    'mongodb+srv://devavratthokal30:5M8ZA2a6z9tNlgCJ@cluster0.dnhpnno.mongodb.net/file1'
  )
  .then(() => console.log("Connected!"))
  .catch((e) => console.log(e));

    const User = mongoose.model('User',{
        "firstname" : String,
        "lastname" : String,
        "address" : String,
        "contact" : String,
        "country" : String,
        "state" : String,
        "username" : String,
        "pincode" : Number,
    })
  app.use(bodyParser.json())
  app.use(cors())

  app.post('/signup',(req,res) => {
    console.log(req.body)
    const user = new User(req.body)
    user.save().then((data,error) => console.log(error, data));
    return res.json({status:"Done", message:"User signup done"})
  })

  console.log('Server is listening on port 3000')
  app.listen(3000)