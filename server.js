//Import our npm packages
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const app = express();
require("dotenv").config();
const path = require("path");

const PORT = process.env.PORT || 3001;
const routes = require("./routes");

//Morgan middleware
app.use(logger("dev"));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add routes, both API and view
app.use(routes);

// Serve up static assets (usually on heroku)
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "./client/build"));
});

mongoose
  .connect(
    process.env.MONGODB_URI ||
      `mongodb://${process.env.HOST}/${process.env.DB_NAME}`,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("\n\nMongoDB successfully connected\n\n"))
  .catch((err) => console.log(err));




// Start the API server
app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
