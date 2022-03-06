require("dotenv").config();
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
var bodyParser = require("body-parser");
const data = require("./data");
const projectRouters = require("./routes/projects");
const auth = require("./basicAuth");

// app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(setUser);
app.use("/projects", projectRouters);

app.get("/", function (req, res) {
  res.send("Server is running at port 5000");
});

app.get("/users", auth.authUser, function (req, res) {
  res.json({ users: data.data.users });
});

app.get("/admin", auth.authUser, auth.authRole(data.data.ROLE.ADMIN), function (req, res) {
    res.json({ users: data.data.ROLE });
  });

function setUser(req, res, next) {
  const userId = req.body.userId;
  if (userId) {
    req.user = data.data.users.find((user) => user.id == userId);
    console.log({user: req.user});
  }
  next();
}

app.listen(5000);
