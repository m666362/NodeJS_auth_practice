module.exports.authUser = (req, res, next) => {
  if (req.user == null) {
    res.status(403);
    return res.send("You need to sign in!!!");
  }
  next();
};

module.exports.authRole = (role) => {
  return (req, res, next) => {
    if (req.user.role != role) return res.sendStatus(403);
    next();
  };
};
