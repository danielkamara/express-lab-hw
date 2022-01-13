const express = require("express");

const passAroundRoute = express.Router();

passAroundRoute.get("/", (req, res) => {
  res.status(200).json({
    message: `99 little bugs in the code
99 little bugs
Take on down
Patch it around
127 bugs in the code`,
  });
});

passAroundRoute.get("/:passAround", (req, res) => {
  let passAround = Number(req.params.passAround);
});

module.exports = passAroundRoute;
