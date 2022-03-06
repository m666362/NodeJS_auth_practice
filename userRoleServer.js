require("dotenv").config();
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
var bodyParser = require("body-parser");
const data = require("./data");

// app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const posts = [
  {
    username: "Rayhan",
    post: "NodeJS",
  },
  {
    username: "Tanvir",
    post: "NextJS",
  },
  {
    username: "Ifrat",
    post: "ReactJS",
  },
];

app.get("/", function (req, res) {
  res.send("Server is running at port 5000");
});

app.get("/posts", function (req, res) {
  res.json(data);
});

app.listen(5000);
