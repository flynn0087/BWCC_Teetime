const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");
const { ensureAuth } = require("../../config/middleware/isAuthenticate");

// Matches with "/api/events"
router.route("/", ensureAuth)
  .get(eventsController.findAll)
  .post(eventsController.create);


// Matches with "/api/events/:id"
router
  .route("/:title")
  .get(eventsController.findById)
  .put(eventsController.update)
  .delete(eventsController.remove);

module.exports = router;
