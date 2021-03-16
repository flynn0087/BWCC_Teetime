const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
const mongoose = require("mongoose");
let logger = require("morgan");

// Requiring passport as we've configured it

require("dotenv").config();

const routes = require("./routes");

const PORT = process.env.PORT || 3001;

const app = express();
require("dotenv").config();

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
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("\n\nMongoDB successfully connected\n\n"))
  .catch((err) => console.log(err));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view

// Start the API server
app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
