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
  // Saves a appointment to the database
  saveAppointment: function (appointmentData) {
    return axios.post("/api/appointments", appointmentData);
  },
  // Saves an event to the database
  events: function (eventData) {
    return axios.post("/api/events", eventData);
  },
};
