/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const User = require("../models/User");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);

exports.googlelogin = (req, res) => {
  const headshot = req.body.headshot;
  const googleId = req.body.id;
  const name = req.body.name;
  const email = req.body.email;

  const tokenId = req.body.tokenId;

  User.findOne({ googleId }).exec((err, user) => {
    if (err) {
      return res.status(400).json({
        error: "This user doesn't exist. Created a google email and try again!",
      });
    } else {
      if (!user) {
        console.log("CREATING NEW USER");
        let newUser = new User({
          googleId: googleId,
          name: name,
          email: email,
          headshot: headshot,
          isLoggedIn: true,
        });
        newUser.save((err, data) => {
          if (err) {
            console.log(err);
            return res.status(400).json({
              error: "There was an error when trying to create a new user.  Please try again",
            });
          }
          res.json({
            name: data.name,
            headshot: data.headshot,
            googleId,
          });
        });
      } else {
        User.findOneAndUpdate({ googleId }, { isLoggedIn: true }).then((data) => {
          res.json({
            name: name,
            headshot: headshot,
            tokenId,
            isLoggedIn: true,
            googleId: googleId,
          });
        });
      }
    }
  });
};
