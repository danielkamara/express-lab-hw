const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

const greetingRoute = require("./routes/greetingRoute");

app.use(bodyParser.json());

app.use("/greeting", greetingRoute);

app.get("/", (req, res) => {
  res.status(200).json({ message: "API UP" });
});

app.listen(port, () => {
  console.log("What's Up Fam!!!!!!!");
});
