const router = require("express").Router();
const userRoutes = require("./users");
const appointmentRoutes = require("./appointments");
const passportRoutes = require("./passport");

// user routes
router.use("/users", userRoutes);

// appointment routes
router.use("/appointments", appointmentRoutes);

// passport routes
router.use("/passport", passportRoutes);



module.exports = router;
