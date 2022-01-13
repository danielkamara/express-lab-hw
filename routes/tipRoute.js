const express = require("express");

const tipRoute = express.Router();

tipRoute.get("/", (req, res) => {
  res.status(200).json({ tip: "Hello Tip" });
});

tipRoute.get("/:mood/:name", (req, res) => {
  let total = req.params.total;
  let tipPercentage = req.params.tipPercentage;

  res.status(200).json();
});

tipRoute.get("/:name", (req, res) => {});

module.exports = tipRoute;
