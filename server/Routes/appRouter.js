const express = require("express");
const router = express.Router();
const { createSeller } = require("../Controllers/sellerController");




router.get("/api", (req, res) => {
    res.json({ message: "Hello from Durga server!" });
  });

router.post("/api/create/seller", createSeller);


module.exports = router;  