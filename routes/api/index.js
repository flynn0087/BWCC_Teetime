const router = require("express").Router();
const userRoutes = require("./users");
const authRoutes = require("./auth");
const eventRoutes = require("./events");

// user routes
router.use("/users", userRoutes);

router.use("/googlelogin", authRoutes);

router.use("/events", eventRoutes);

module.exports = router;
