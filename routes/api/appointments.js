const router = require("express").Router();
const apointmentsController = require("../../controllers/apointmentsController");

// Matches with "/api/appointments"
router.route("/")
  .get(apointmentsController.findAll)
  .post(apointmentsController.create);

// Matches with "/api/appointments/:id"
router
  .route("/:id")
  .get(apointmentsController.findById)
  .put(apointmentsController.update)
  .delete(apointmentsController.remove);

module.exports = router;
