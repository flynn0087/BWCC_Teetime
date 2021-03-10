const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  time: {
    type: Date,
    default: Date.now,
  },
  serviceType: {
    type: String,
    required: true,
  },
});

const Appointment = mongoose.model("appointments", AppointmentSchema);


module.exports = Appointment;
