const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const User = require("../models/User");

// const cookieSession = require("cookie-session");

// app.use(cookieSession({
//   // milliseconds of a day
//   maxAge: 24*60*60*1000,
//   keys:[dotenv.session.cookieKey]
// }));

app.use(passport.initialize());
app.use(passport.session());


passport.use(
  new GoogleStrategy({
    clientID: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    clientSecret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/redirect"
  }, (accessToken, refreshToken, profile, done) => {
    // passport callback function
    //check if user already exists in our db with the given profile ID
    User.findOne({googleId: profile.id}).then(User => {
      if(!User) {
        User.create({
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          googleId: profile.id,
        })
          .then(User => console.log(User))
          .catch(err => console.log(err));
      }
    })
      .catch (err => console.log(err));

    console.log(profile);
    cb(null, profile);
  }
  ));


passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

module.exports = passport;
