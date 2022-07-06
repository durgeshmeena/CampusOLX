const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config();
const mongoURI="mongodb+srv://adminOlx:RBVlR5ON2dHvwmmv@cluster0.pdtvd.mongodb.net/?retryWrites=true&w=majority";  // create .env file storing yout mongoURI secrete

const InitiateMongoServer = async()=>{
    try{
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
        console.log("connected to DB");
    }
    catch(err){
        console.log(err);
        throw err;
    }
};


module.exports = InitiateMongoServer;