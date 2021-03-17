/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const User = require("../models/User");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);

exports.googlelogin = (req, res) => {
  console.log(req.body);
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
        console.log("CREATING NEW USER" + res);
        let newUser = new User({
          googleId: googleId,
          name: name,
          email: email,
          headshot: headshot,
        });
        newUser.save((err, data) => {
          if (err) {
            console.log("JESUS TAKE THE WHEEL", err);
            return res.status(400).json({
              error: "I don't know what Happened!",
            });
          }
          console.log("NEW USER CREATED TO DATABASE!!!");
          res.json({
            name: data.name,
            headshot: data.headshot,
          });
        });
      } else {
        console.log("EXISTING USER DATA!!!");
        res.json({
          name: name,
          headshot: headshot,
          tokenId,
        });
      }
    }
  });
};
