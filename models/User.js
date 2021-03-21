const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
  isLoggedIn: {
    type: Boolean,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  headshot: {
    type: String,
  },
  title: [{ type: Schema.Types.ObjectId, ref: "Event" }],
});

const User = mongoose.model("users", UserSchema);

module.exports = User;
