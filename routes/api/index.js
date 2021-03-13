const router = require("express").Router();
const userRoutes = require("./users");
const appointmentRoutes = require("./appointments");
const authRoutes = require("./auth");

// user routes
router.use("/users", userRoutes);

// appointment routes
router.use("/appointments", appointmentRoutes);

router.use("/googlelogin", authRoutes);

module.exports = router;
