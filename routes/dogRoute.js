const express = require("express");

const dogRoute = express.Router();

dogRoute.get("/", (req, res) => {
  res.status(200).json({ message: "Woof!!!! Woof!!!" });
});

module.exports = dogRoute;
