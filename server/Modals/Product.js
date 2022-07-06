const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    description: {
        type: String,
        required: true,
      },
      
    image:{
        data:Buffer,
        contentType:String
    
    },

    seller:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'seller'
  
  },
  approv:{
    type:bool,
    required: true,

},
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("Product", productSchema);
module.exports = Product;