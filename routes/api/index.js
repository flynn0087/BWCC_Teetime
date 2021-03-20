const router = require("express").Router();
const userRoutes = require("./users");
const appointmentRoutes = require("./appointments");
const authRoutes = require("./auth");
const eventRoutes = require("./events");
const {ensureAuth} = require("../../config/middleware/isAuthenticated");

// user routes
router.use("/users", userRoutes);

// appointment routes
router.use("/appointments", ensureAuth, appointmentRoutes);

router.use("/googlelogin", authRoutes);

router.use("/events",ensureAuth, eventRoutes);

module.exports = router;
