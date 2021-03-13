const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const { googlelogin } = require("../../controllers/authController");
router.get("/", (req, res) => {
  res.send("hello");
});

router.post("/", googlelogin);

module.exports = router;
