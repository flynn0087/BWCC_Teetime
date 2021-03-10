const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Appointments collection and inserts the appointments below

mongoose.connect(
  // process.env.MONGODB_URI ||
  `mongodb://${process.env.HOST}/${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useFindAndModify: false,
  });


const appointmentSeed = [
  {
    name: "George Georgeson",
    date: new Date().setDate(new Date().getDate() - 10),
    time: new Date(Date.now()),
    serviceType: "SSP",
  },
  {
    name: "Sue Sueson",
    date: new Date().setDate(new Date().getDate() - 9),
    time: new Date(Date.now()),
    serviceType: "SP",
  },
  {
    name: "Fred Fredson",
    date: new Date().setDate(new Date().getDate() - 8),
    time: new Date(Date.now()),
    serviceType: "Regular",
  },
  {
    name: "Marge Margeson",
    date: new Date().setDate(new Date().getDate() - 7),
    time: new Date(Date.now()),
    serviceType: "Regular",
  },
  {
    name: "Bob Bobson",
    date: new Date().setDate(new Date().getDate() - 6),
    time: new Date(Date.now()),
    serviceType: "SSP",
  },
  {
    name: "Kara Karason",
    date: new Date().setDate(new Date().getDate() - 5),
    time: new Date(Date.now()),
    serviceType: "SSP",
  },
  {
    name: "David Davidson",
    date: new Date().setDate(new Date().getDate() - 4),
    time: new Date(Date.now()),
    serviceType: "SP",
  },
  {
    name: "Belinda Belindason",
    date: new Date().setDate(new Date().getDate() - 3),
    time: new Date(Date.now()),
    serviceType: "Regular",
  },
  {
    name: "Sam Samson",
    date: new Date().setDate(new Date().getDate() - 2),
    time: new Date(Date.now()),
    serviceType: "SSP",
  },

];

db.Appointment
  .remove({})
  .then(() => db.Appointment.collection.insertMany(appointmentSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
