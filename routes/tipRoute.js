const express = require("express");

const tipRoute = express.Router();

tipRoute.get("/", (req, res) => {
  res.status(200).json({ tip: "Hello Tip" });
});

tipRoute.get("/:total/:tipPercentage", (req, res) => {
  let total = req.params.total;
  let tipPercentage = req.params.tipPercentage;

  let tip = Number(total) * Number(tipPercentage);
  res.status(200).json({ message: `Your tip is ${tip}.` });
});

tipRoute.get("/:tip", (req, res) => {});

module.exports = tipRoute;
