const mongoose = require('mongoose');

const mongoURI ="mongodb+srv://barikgokul34:Biswajit%40123@cluster0.hl1sk02.mongodb.net/inotebook?retryWrites=true&w=majority"

const connectToMongo = ()=>{
  mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
  })
  const db=mongoose.connection
  db.once("open", function () {
  console.log("Connected successfully");
  })
  }


module.exports = connectToMongo;


