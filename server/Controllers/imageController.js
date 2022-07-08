const Mongoose = require("mongoose");
const Product = require("../Modals/Product");

// function for fetching all products
const getAllProducts = async (req, res) => {


    try {
        const products = await Product.find();
        // console.log(products);
        res.json(products);
    } catch (err) {
        res.json({ message: err });
    }
    res.json({ message: "Hello from Durga and Monu server!" });
}

module.exports = { getAllProducts };
