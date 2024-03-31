const express = require("express");
const router = express.Router();

router.use(express.static("./"));

router.post("/", (req, res) => {
  const { name } = req.body;

  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please Provide more credential");
});

module.exports = router;
