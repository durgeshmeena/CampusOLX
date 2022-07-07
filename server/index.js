const express = require("express");
const mongoose = require('mongoose');
const router = require("./Routes/appRouter");
const InitiateMongoServer = require('./config/db');


const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);


// InitiateMongoServer();

InitiateMongoServer()
.then(()=>{
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  if(db.readyState){
    console.log("connection was successful");
  }
    
});







// app.post("/api/create/seller", (req, res) => {
//     // const { name, email, mobile, otherInfo } = req.body;
//     console.log(req.body);
//     res.json({ message: "Reached" });
  
//   });
  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });