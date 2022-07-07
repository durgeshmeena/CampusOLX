const express = require("express");
const mongoose = require('mongoose');
const router = require("./Routes/appRouter");
const InitiateMongoServer = require('./config/db');


const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);



InitiateMongoServer()
.then(()=>{
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  if(db.readyState){
    console.log("connection was successful");
  }
    
});



  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });