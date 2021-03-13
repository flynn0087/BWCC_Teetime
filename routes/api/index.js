const router = require("express").Router();
const userRoutes = require("./users");
const appointmentRoutes = require("./appointments");

// user routes
router.use("/users", userRoutes);

// appointment routes
router.use("/appointments", appointmentRoutes);



module.exports = router;
