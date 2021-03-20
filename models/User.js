const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  googleId: {
    type: String,
    required: true,
    unique: true,
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
});


const User = mongoose.model("users", UserSchema);



module.exports = User;
