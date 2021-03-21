const express = require("express");
const router = express.Router();
const { googlelogin } = require("../../controllers/authController");


router.post("/", googlelogin);



// Route for logging user out
router.get("/logout", (req, res) => {
  req.logout();
  res.json("logout successful");
});



module.exports = router;
