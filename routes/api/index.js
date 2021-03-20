const router = require("express").Router();
const userRoutes = require("./users");
const appointmentRoutes = require("./appointments");
const authRoutes = require("./auth");
const eventRoutes = require("./events");

// user routes
router.use("/users", userRoutes);

// appointment routes
router.use("/appointments", appointmentRoutes);

router.use("/googlelogin", authRoutes);

router.use("/events", eventRoutes);

module.exports = router;
