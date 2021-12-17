const express = require("express");
const router = express.Router();

const EventsController = require("../controllers/events");

router.route("/events")
  .get(EventsController.find_All)

router.route("/:userId")
  .get(EventsController.find_One) 
  .put(EventsController.update_One) 
  .delete(EventsController.remove_One)  

module.exports = router;