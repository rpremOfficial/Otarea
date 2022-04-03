const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/indesign", (req, res) => {
  res.render("indesign.ejs");
});

app.get("/blog", (req, res) => {
  res.render("blog.ejs");
});

app.get("/network", (req, res) => {
  res.render("network.ejs");
});

app.listen(process.env.PORT || 5100, process.env.IP, () => {
  console.log("Server is running");
});
