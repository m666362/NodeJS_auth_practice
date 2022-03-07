const express = require("express");
const router = express.Router();
const data = require("../data");
const auth = require("../basicAuth");
const permission = require("../permissions/project");

router.get("/", auth.authUser, (req, res) => {
  res.send({ projects: permission.scopedProject(req.user, data.data.projects) });
});

router.get("/:projectId",auth.authUser,setProject,authGetProject,(req, res) => {
    res.send({ projects: req.project, user: req.user });
  }
);

router.delete("/:projectId",auth.authUser,setProject, authDeleteProject,(req, res) => {
  res.send("Project is deleted");
}
);

function setProject(req, res, next) {
  const projectId = req.params.projectId;
  req.project = data.data.projects.find((project) => project.id == projectId);
  if (req.project == null) {
    res.status(404);
    return res.send("Page not found");
  }
  next();
}

function authGetProject(req, res, next) {
  if (!permission.canViewProject(req.user, req.project)) {
    res.status(401);
    return res.send("Not allowed!!!");
  }
  next();
}

function authDeleteProject(req, res, next) {
  if (!permission.canDeleteProject(req.user, req.project)) {
    res.status(401);
    return res.send("Not allowed!!!");
  }
  next();
}

module.exports = router;
