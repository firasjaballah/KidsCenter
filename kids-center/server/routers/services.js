const express = require("express");
const router = express.Router();

const servicesController = require("../controllers/services");

router.route("/")
  .get(servicesController.find_All)

// router.route("/:servicesId")
//   .get(servicesController.find_One) 
//   .put(servicesController.update_One) 
//   .delete(servicesController.remove_One)  

module.exports = router;
