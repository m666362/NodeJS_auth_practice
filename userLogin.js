require("dotenv").config();
const bcrypt = require("bcrypt");
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
var bodyParser = require("body-parser");
let users = [];
// const passport = require("passport");
// const initializePassport = require('./passport-config')
// initializePassport(passport, email=> users.find(user=>user.email==email))

// app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
// app.use(setUser);

async function generatePassword(password) {
  return await bcrypt.hash(password, 10);
}

app.get("/users", function (req, res) {
  res.send({ users });
});

app.post("/register", checkDuplicate, async (req, res) => {
  try {
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const email = req.body.email;
    users.push({
      email,
      password: hashPassword || "",
    });
    res.send({ users });
  } catch (error) {
    res.status(500).send("Something wrong");
  }
});

app.post("/login", setUser, authUser, async (req, res) => {
  res.send("Log in");
});

function setUser(req, res, next) {
  const email = req.body.email;
  if (!users.find((user) => user.email == email)) {
    return res.status(404).send("Either password or user are not valid");
  }
  next();
}

function checkDuplicate(req, res, next) {
  const email = req.body.email;
  if (users.find((user) => user.email == email)) {
    return res.status(206).send("User Already exist");
  }
  next();
}

async function authUser(req, res, next) {
  const user = users.find((user) => user.email == req.body.email);
  try {
    if (!(await bcrypt.compare(req.body.password, user.password))) {
      return res.status(404).send("Either password or user are not valid");
    }
    next();
  } catch (error) {
    return res.status(500).send("Something wrong");
  }
}
app.listen(5000);
