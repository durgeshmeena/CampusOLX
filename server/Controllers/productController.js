const fs = require('fs');
const path = require('path');
const multer = require('multer');

// storing image in mongoDB using multer



const pathName = path.join(__dirname, '../public/uploads'); 



const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, pathName);
    }
    ,
    filename:(req, file, cb)=>{
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
}
)

const upload = multer({storage:storage});


const addProduct = async (req, res)=>{
    const {name, category, price, description} = req.body;
    console.log(name, category, price, description);
    // console.log(req.body);
    // console.log(req.file);
    console.log("request recieved");
    res.json({message: "product added successfully"});
}

module.exports = { addProduct, upload };

