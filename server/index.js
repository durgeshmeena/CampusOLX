const express = require("express");

const PORT = process.env.PORT || 5000;

const app = express();


app.use(express.json());
const router = express.Router();


app.get("/api", (req, res) => {
    res.json({ message: "Hello from Durga server!" });
  });
  
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });