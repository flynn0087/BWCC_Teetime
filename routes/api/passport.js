const express = require("express");
const passport = require("../../OauthPassportConfig");
const authenticated = require ("../../OauthPassportConfig/middleware/isAuthenticated");
const router = express.Router();


//   GET /auth/google
router.get("/auth/google", passport.authenticate("google", { scope: ["profile"] }));


//    GET /auth/google/callback
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/dashboard");
  }
);

router.get("auth/calendar",
  passport.authenticate("calendar", {scope: ["user: email"]})

);

router.get("/auth/calendar/callback",
  passport.authenticate("calendar", {failureRedirect : "/login"}), (req, res) => {
    res.redirect("/dashboard");
  }
);

router.get("/User", authenticated, (req, res) => {
  res.json(req.user);
}
);

//  /auth/logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
