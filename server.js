//Import our npm packages
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3001;
const routes = require("./routes");

//Morgan middleware
app.use(logger("dev"));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view

// Start the API server
app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
