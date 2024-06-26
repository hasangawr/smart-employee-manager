const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const passport = require("passport");

const env = require("dotenv").config();
const port = process.env.PORT || 3500;

console.log(process.env.NODE_ENV);

app.use(bodyParser.json());
app.use(passport.initialize());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
