require("dotenv").config();
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
var bodyParser = require("body-parser");

// app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

let refreshTokens = [];

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15s" });
}

function generateRefreshToken(user) {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
}

app.get("/", function (req, res) {
  res.send("Auth Server is running at port 3000");
});

app.post("/token", function (req, res) {
  const refreshToken = req.body.token;
  if (refreshToken == null) res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) res.sendStatus(403);
  console.log({ refreshToken });
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) res.sendStatus(403);
    const accessToken = generateAccessToken({ name: user.name });
    res.json({ accessToken });
  });
});

app.post("/login", function (req, res) {
  // Authenticate user
  const username = req.body.username;
  const user = { name: username };
  console.log({ user });
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);
  refreshTokens.push(refreshToken);
  res.json({ accessToken, refreshToken });
});

app.delete("/logout", (req, res) => {
  refreshTokens = refreshTokens.filter(token=> token!=req.body.token);
  res.sendStatus(204);
});

app.listen(4000);
