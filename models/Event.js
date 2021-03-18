const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  start: {
    type: Date,
  },

  end: {
    type: Date,
  },

  allDay: {
    type: Boolean,
  },
});

const Event = mongoose.model("events", EventSchema);

module.exports = Event;
