const express = require("express");
const passport = require("../../OauthPassportConfig/passport");
const authenticated = require ("../../OauthPassportConfig/middleware/isAuthenticated");
const router = express.Router();


//   GET /auth/google
router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));


//    GET /auth/google/callback
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/oauth", session: false }),
  (req, res) => {
    let token = req.user.token;
    res.redirect("http://localhost:3000?token=" + token);
  }
);

router.get("auth/calendar",
  passport.authenticate("calendar", {scope: ["user: email"]})

);

router.get("/auth/calendar/callback",
  passport.authenticate("calendar", {failureRedirect : "/oauth"}), (req, res) => {
    res.redirect("/oauth");
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
