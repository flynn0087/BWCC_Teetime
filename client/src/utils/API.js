import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Gets all appointments
  getAppointments: function () {
    return axios.get("/api/appointments");
  },
  // Gets the appointment with the given id
  getAppointment: function (id) {
    return axios.get("/api/appointments/" + id);
  },
  // Deletes the appointment with the given id
  deleteAppointment: function (id) {
    return axios.delete("/api/appointments/" + id);
  },
  // Saves an appointment to the database
  saveAppointment: function (appointmentData) {
    return axios.post("/api/appointments", appointmentData);
  },
  // Gets all events
  getEvents: function () {
    return axios.get("/api/events");
  },
  // Gets the event with the given id
  getEvent: function (id) {
    return axios.get("/api/events/" + id);
  },
  // Deletes the event with the given id
  deleteEvent: function (title) {
    return axios.delete("/api/events/" + title);
  },
  // Saves an event to the database
  saveEvent: function (id) {
    return axios.post("/api/events" + id);
  },
  getWeather: function () {
    const city = "Minneapolis";
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`;
    return axios.get(apiUrl);
  },
};
