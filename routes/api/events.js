const router = require("express").Router();
const db = require("../../models");
const passport = require("../../config/passport");

// Matches with "/api/events"
router.route("/")
  .get(eventsController.findAll)
  .post(eventsController.create);

router.get("/events", passport.authenticate("local"), (req, res) => {
  db.Event.find({})
    // .populate("events")
    .the(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

// Matches with "/api/events/:id"
router
  .route("/:id")
  .get(eventsController.findById)
  .put(eventsController.update)
  .delete(eventsController.remove);

module.exports = router;
