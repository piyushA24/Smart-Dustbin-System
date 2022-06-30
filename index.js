const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

app.use(express.static("./assets"));
const bp = require("body-parser");
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

//Use Express Router
app.use("/", require("./routes"));

app.set("view engine", "ejs");
app.set("views", "./views");
app.set("views", path.join(__dirname, "views"));

//Connecting Database
const db = require("./config/mongoose");

app.listen(port, function (err) {
  if (err) {
    console.log("Error in running the server", err);
  }
  console.log("Yup!My Server is running on Port", port);
});
