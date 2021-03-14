
const express = require("express");
const router = express.Router();
const { googlelogin } = require("../../controllers/authController");
router.get("/", (req, res) => {
  res.send("hello");
});

router.post("/", googlelogin);

module.exports = router;
