require('dotenv').config()
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
var bodyParser = require('body-parser')

// app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

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

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];
    if (token==null) res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
        if (err) res.sendStatus(403);
        req.user = user;
        next()
    });
}

app.get("/", function (req, res) {
  res.send("Server is running at port 3000");
});

app.get("/posts", authenticateToken,  function (req, res) {
  res.json(posts.filter( post=> post.username==req.user.name ) );
});

app.listen(3000);
