const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "megumi") {
    req.user = { name: "megumi", id: 4 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = authorize;
