const fs = require('fs');
const path = require('path');
const multer = require('multer');

// storing image in mongoDB using multer


const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './public/upload');
    }
    ,
    filename:(req, file, cb)=>{
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
}
)

const upload = multer({storage:storage});
module.exports.upload = upload;

const addProduct = async (req, res)=>{
    // const {name, category, description, file} = req.body;
    console.log(req.body);
    res.json({message: "product added successfully"});
}

