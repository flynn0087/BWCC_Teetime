/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const User = require("../models/User");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);

exports.googlelogin = (req, res) => {
  console.log(req.body);
  const headshot = req.body.headshot;
  const googleId = req.body.id;
  console.log(googleId);
  const tokenId = req.body.tokenId;
  client.verifyIdToken({ idToken: tokenId, audience: process.env.REACT_APP_GOOGLE_CLIENT_ID }).then((response) => {
    const { email_verified, name, email } = response.payload;

    if (email_verified) {
      console.log(email_verified);
      User.findOne({ email }).exec((err, user) => {
        console.log(name);
        if (err) {
          return res.status(400).json({
            error: "This user doesn't exist. Created a google email and try again!",
          });
        } else {
          if (!user) {
            console.log("Hello and welcome" + user);
            let newUser = new User({
              googleId,
              name,
              email,
              headshot,
              isLoggedIn: true,
            });
            newUser.save((err, data) => {
              if (err) {
                console.log("JESUS TAKE THE WHEEL", err);
                return res.status(400).json({
                  error: "I don't know what Happened!",
                });
              }
              console.log("Success");
              res.json(data);
            });
          } else {
            res.json({ user, tokenId });
          }
        }
      });
    }
  });
};
