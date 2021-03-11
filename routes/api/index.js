const router = require("express").Router();
const userRoutes = require("./users");
const apointmentRoutes = require("./appointments");

// user routes
router.use("/users", userRoutes);

// apointment routes
router.use("/appointments", apointmentRoutes);


module.exports = router;
