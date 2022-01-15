const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

const greetingRoute = require("./routes/greetingRoute");
const tipRoute = require("./routes/tipRoute");
const magicRoute = require("./routes/magicRoute");
const passAroundRoute = require("./routes/passAroundRoute");
const dogRoute = require("./routes/dogRoute");

app.use(bodyParser.json());

app.use("/greeting", greetingRoute);
app.use("/tip", tipRoute);
app.use("/magic", magicRoute);
app.use("/passAround", passAroundRoute);
app.use("/dog", dogRoute);

app.get("/", (req, res) => {
  res.status(200).json({ message: "API UP" });
});

app.listen(port, () => {
  console.log("What's Up Fam!!!!!!!");
});
