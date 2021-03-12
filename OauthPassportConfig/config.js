const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const User = require("./");

passport.use(
  new GoogleStrategy({
    clientID: dotenv.google.clientID,
    clientSecret: dotenv.google.clientSecret,
    callbackURL: "/auth/google/redirect"
  }, (accessToken, refreshToken, profile, done) => {
    // passport callback function
    //check if user already exists in our db with the given profile ID
    User.findOne({googleId: profile.id}).then((currentUser)=>{
      if(currentUser){
        //if we already have a record with the given profile ID
        done(null, currentUser);
      } else{
        //if not, create a new user
        new User({
          googleId: profile.id,
        }).save().then((newUser) =>{
          done(null, newUser);
        });
      }
    });
  })
);

