const express = require("express");
const mongoose = require("mongoose");
let logger = require("morgan");
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./OauthPassportConfig/passport");

require("dotenv").config();


const routes = require("./routes");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());


// Add routes, both API and view
app.use(routes);

mongoose
  .connect(process.env.MONGODB_URI || `mongodb://${process.env.HOST}/${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("\n\nMongoDB successfully connected\n\n"))
  .catch((err) => console.log(err));

// Start the API server
app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
