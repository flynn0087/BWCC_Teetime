const express = require("express");
const { ensureAuth } = require("../../config/middleware/isAuthenticated");
const router = express.Router();
const { googlelogin } = require("../../controllers/authController");
// const db = require("../../models");
// const passport = require("../../config/passport");

router.get("/", ensureAuth, (req, res) => {
  res.send("hello");
});

router.post("/", googlelogin);

// // Using the passport.authenticate middleware with our local strategy.
// // passport.authenticate() is a middle ware provided by passport
// // and is configured
// router.post("/login", passport.authenticate("local"), (req, res) => {
//   console.log(req);
//   res.json(req.user);
// });

// Route for logging user out
router.get("/logout", (req, res) => {
  req.logout();
  res.json("logout successful");
});

// // Route for getting some data about our user to be used client side
// router.get("/user_data", (req, res) => {
//   if (!req.user) {
//     // The user is not logged in, send back an empty object
//     res.json({});
//   } else {
//     // Otherwise send back the user's email and id
//     res.json({
//       email: req.user.email,
//       id: req.user.id,
//     });
//   }
// });

module.exports = router;
