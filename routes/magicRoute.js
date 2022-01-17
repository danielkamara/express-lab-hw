const express = require("express");
const magicQuotes = require("../data/magicQuotes");
const magicRoute = express.Router();

magicRoute.get("/", (req, res) => {
  res.status(200).json({ message: "It's Like Magic Baby!!!" });
});

magicRoute.get("/:question", (req, res) => {
  let quotes = magicQuotes[Math.floor(Math.random() * magicQuotes.length)];
  res.status(200).json({ message: quotes });
});
module.exports = magicRoute;
