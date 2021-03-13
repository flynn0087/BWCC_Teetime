const express = require("express");
const mongoose = require("mongoose");
const googlelogin = require("./routes/api/auth");
const PORT = process.env.PORT || 8088;
const app = express();
require("dotenv").config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
mongoose
  .connect(process.env.MONGODB_URI || `mongodb://${process.env.HOST}/${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("\n\nMongoDB successfully connected\n\n"))
  .catch((err) => console.log(err));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view

app.use("/api/googlelogin", googlelogin);

// Start the API server
app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
