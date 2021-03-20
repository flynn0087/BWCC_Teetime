const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const { ensureAuth } = require("../../config/middleware/isAuthenticated");
// const { db } = require("../../models/User");

// Matches with "/api/users"
router.route("/", ensureAuth).get(usersController.findAll).post(usersController.create);

// router.get("/populateduser", isAuthenticated, (req, res) => {
//   db.user.find({})
//     .populate("events")
//     .the(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// Matches with "/api/users/:id"
router.route("/:id").get(usersController.findById).put(usersController.update).delete(usersController.remove);

module.exports = router;
