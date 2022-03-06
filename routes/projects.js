const express = require("express");
const router = express.Router();
const data = require("../data");
const auth = require("../basicAuth");

router.get("/", (req, res) => {
  res.send({ projects: data.data.projects });
});

router.get("/:projectId", auth.authUser, setProject, (req, res) => {
  res.send({ projects: req.project, user: req.user });
});

function setProject(req, res, next) {
  const projectId = req.params.projectId;
  req.project = data.data.projects.find((project) => project.id == projectId);
  if (req.project == null) {
    res.status(404);
    return res.send("Page not found");
  } else if (req.user.id != req.project.userId) {
    res.status(403);
    return res.send("You dont have permission to access this project");
  }
  next();
}

module.exports = router;
