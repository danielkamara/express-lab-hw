const express = require("express");

const greetingRoute = express.Router();

greetingRoute.get("/", (req, res) => {
  res.status(200).json({ greeting: "Hello Stranger" });
});

greetingRoute.get("/:name", (req, res) => {
  let name = req.params.name;
  res.status(200).json({ greeting: `What's up ${name}!!!` });
});

module.exports = greetingRoute;
