const express = require("express");

const magicRoute = express.Router();

magicRoute.get("/", (req, res) => {
  res.status(200).json({ magic: "Hello magic" });
});

magicRoute.get("/", (req, res) => {
  let name = req.params.name;
  res.status(200).json({});
});

module.exports = magicRoute;
